
let products = JSON.parse(localStorage.getItem('products')) || [];


function addProductToDb(product) {
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products)); // Mahsulotni localStorage-ga yozish
}


function deleteProductFromDb(index) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products)); // O'chirilgan mahsulotni localStorage'dan yangilash
}

function getProducts() {
    return products;
}
