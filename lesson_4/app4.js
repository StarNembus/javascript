/* Задание 1*/
'use strict'
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.pmake25PercentDiscount = function(){
        console.log(this.price  * 0.75);
};


let product = new Product('product', 1500);

product.pmake25PercentDiscount();

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    pmake25PercentDiscount(){
        console.log(this.price  * 0.75);
    }
}
let product = new Product('product', 1500);

product.pmake25PercentDiscount();

/* Задание 2*/
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(){
    console.log(this.text);
};

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author,text,date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    console.log(this.highlighted = true);   

};
let attachpost = new AttachedPost('Pushkin', 'Evgeny Onegin', '1825', false)
attachpost.edit();
attachpost.makeTextHighlighted();

class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        console.log(this.text);
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        console.log(this.highlighted = true);
    }
}
let attachpost = new AttachedPost('Dumas', 'Count of Monte Cristo', '1844',false)
attachpost.edit();
attachpost.makeTextHighlighted();