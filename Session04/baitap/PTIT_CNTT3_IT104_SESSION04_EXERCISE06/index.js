var listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: {
            id: "C01",
            name: "Thời trang nam",
        },
        discount: 0.2,
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 500000,
        category: {
            id: "C01",
            name: "Thời trang nam",
        },
    },
    {
        id: "P003",
        name: "Váy hoa",
        price: 450000,
        category: {
            id: "C02",
            name: "Thời trang nữ",
        },
        discount: 0.1,
    },
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    var finalPrice = getFinalPrice(product);
    console.log("T\u00EAn: ".concat(product.name));
    console.log("Gi\u00E1 g\u1ED1c: ".concat(product.price.toLocaleString(), " VND"));
    console.log("Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice.toLocaleString(), " VND"));
    console.log("Danh m\u1EE5c: ".concat(product.category.name));
}
for (var _i = 0, listProduct_1 = listProduct; _i < listProduct_1.length; _i++) {
    var product = listProduct_1[_i];
    printProductInfo(product);
}
