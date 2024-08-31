

export default class ProductModel{
    constructor(_id,_name,_disc,_price,_imgURL){
        this.id = _id;
        this.name = _name;
        this.disc = _disc;
        this.price = _price;
        this.imgURL = _imgURL;
    }

    static get(){
        return products;
    }
    
}
let products = [
    new ProductModel(1,"The Great King","The story of great king","211","https://m.media-amazon.com/images/I/817n4ymc4+L._AC_UF1000,1000_QL80_.jpg"),
    new ProductModel(2,"He is the man","Why he is called he","139","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTEViRFq14kPVNUPlBmc40z3EJ2sk5Ytz0g&s"),
    new ProductModel(3,"Long Walk","Story of a journey","245","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo2XwkiLnRxEA_TbZWWrR8PQx_YFKq_YnyQ&s"),
    new ProductModel(4,"Time Gone","The inspirational story","155","https://5.imimg.com/data5/SELLER/Default/2021/5/MV/RW/IM/3726307/world-famous-literature-all-time-great-classics-16-different-books-500x500.jpg")
];