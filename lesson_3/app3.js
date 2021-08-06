/* Задание 1*/
'use strict'
for(let i = 0; i <= 10; i++){
    if (i == 0) {
        console.log('0 – это ноль');
        continue;
    }
    if (i % 2 == 0 ){
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
    /* Вариант */
    if (i == 0 ) {
        console.log('0 – это ноль');
    } else if (i % 2 != 0 ) { 
        console.log(i + ' - нечетное число');
    } else {
        console.log(i + ' - четное число');
    }

}
/* Задание 2*/

const pose = {
    author: "John",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(pose.author);
console.log(pose.comments[0].rating.dislikes);
console.log(pose.comments[1].text);

/* Задание 3 */
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (sale) {

    console.log(sale.price  * 0.85);
    
});

/* Задание 4*/
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
    id: 8,
    price: 78,
    },
];
products.sort(function(price1, price2) {
    if (price2.price > price1.price){
        return - 1;
    }
    if (price1.price > price2.price) {
        return 1;
    
    }
    return 0;
});
console.log(products);
let my_images = products.filter(function(image) {

    return image.photos && image.photos.length > 0;
         
});
console.log(my_images);

/* Задание 5 */

let a = "x"
console.log(a)
 for (let x = 0; x < 20; x++) {
    console.log (a += "xx");
 };
     
 



