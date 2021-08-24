'use strict';

// при загрузке страницы
let basketSpan = document.querySelector('.cartIconWrap span');
basketSpan.innerText = "0";

let btns = document.querySelectorAll('.featuredImgDark button');
let items = document.querySelectorAll('.featuredItem');
let prices = document.querySelectorAll('.featuredPrice');
let basketBlock = document.querySelector('.basket');


// основа генерации id продукта
let counter = 1;
let productItemClassName = 'basketRow__item';

// кеш данных с товарами (целиком) и id
let map = new Map();


class Product {
    constructor(id, name, price) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    getPrice() {
        return this.price;
    }

    getId() {
        return this.id;
    }
}

class Box {
    constructor() {
        this.products = new Array();
    };

    addProduct(product) {
        this.products.push(product);
    }
}

class Basket {
    constructor() {
        this.productMap = new Map();
    };
    addProduct(product) {
        if (this.productMap.has(product)) {
            this.productMap.set(product, this.productMap.get(product) + 1);
        } else {
            this.productMap.set(product, 1);
        }
    };

    getProductCounter() {
        let productCount = 0;
        for (let p of this.productMap.values()) {
            productCount += p;
        }
        return productCount;
    }

    getAmount() {
        let sum = 0;
        for (let p of this.productMap) {
            sum += p.price;
        }
        return sum;
    }

    getQuantity(product) {
        return this.productMap.get(product);
    }
}


let pricesDigit = new Array();
let productBox = new Box();
let basket = new Basket();

// преобразование цены
for (let i = 0; i < prices.length; i++) {
    pricesDigit.push(parseFloat(prices[i].innerText.replace("$", "")));
}

// первоначальное заполнение товаров в память (аналог выгрузки из бд)
let productItems = document.querySelectorAll(".featuredName");
for (let i = 0; i < productItems.length; i++) {
    let idx = counter++;
    let pr = new Product(idx, productItems[i].innerText, pricesDigit[i]);
    map.set("id" + idx, pr);
    productItems[i].setAttribute("id", "id" + idx);
    productBox.addProduct(pr);
}



// функция добавления в корзину
function increaseProductCount() {
    basketSpan.textContent = '' + basket.getProductCounter();
}


function generateRowWithProduct(product) {
    let q = basket.getQuantity(product);
    let p = product.getPrice();
    let row = `
        <div>${product.name}</div>
        <div>${q}</div>
        <div>${p}</div>
        <div>${p * q}</div>
    `;
    return row;
}

// удаляем блоки с продуктами - очищаем таблицу корзины
function removeProductsFromBasket(className) {
    let productItems = document.querySelectorAll(className);
    if (productItems) {
        let len = productItems.length;
        for (let i = 0; i < len; i++) {
            productItems.pop();
        }
    }

}



function addProductToBasketList(product) {
    if (basket.productMap.has(product)) {
        let idx = 'item' + product.getId();
        //----------------------------------------------------------------
        // ТУТ ОШИБКА. Я добавляла дивы к корзине. В дебаге они были видны.
        // Но при поиске этих дивов, я получала null
        // То есть как будто document не знает об этих элементах
        // Подскажите, пожалуйста, как можно обработать этот момент?
        //----------------------------------------------------------------
        let productHtml = document.querySelectorAll(idx);
        basket.addProduct(product);
        let q = basket.getQuantity(product);
        let p = product.getPrice() * q;
        let divQuantity = productHtml.firstElementChild.nextSibling;
        divQuantity.innerText = '' + q;
        let fullPrice = divQuantity.nextSibling.nextSibling;
        fullPrice.innerText = '' + p;

    } else {
        let total = document.querySelector('basketTotal');
        let newDiv = document.createElement('div');
        newDiv.classList.add('basketRow');
        newDiv.classList.add('item' + product.id);
        newDiv.innerHTML = generateRowWithProduct(product);
        // вставляет div с продуктом перед блоком total
        basketBlock.insertBefore(newDiv, total);
        basket.addProduct(product);
    }

}


btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let elIdx = event.target.parentElement.parentElement.nextElementSibling.firstElementChild.id;
        let pr = map.get(elIdx);


        addProductToBasketList(pr);
        increaseProductCount();
    });

});



// -----------------------------------------------------------


let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});