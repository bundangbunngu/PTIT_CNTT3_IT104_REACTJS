function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log("\u0110\u01A1n h\u00E0ng: #".concat(order.orderId));
    console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
    console.log("S\u1EA3n ph\u1EA9m:");
    for (var _i = 0, _a = order.items; _i < _a.length; _i++) {
        var item = _a[_i];
        var product = item.product, quantity = item.quantity;
        var subtotal = product.price * quantity;
        console.log("- ".concat(product.name, " \u00D7 ").concat(quantity, " \u2192 ").concat(subtotal.toLocaleString(), " VND"));
    }
    var total = calculateOrderTotal(order);
    console.log("T\u1ED5ng c\u1ED9ng: ".concat(total.toLocaleString(), " VND"));
    if (order.note) {
        console.log("Ghi ch\u00FA: ".concat(order.note));
    }
}
var shirt = { id: "P001", name: "Áo sơ mi", price: 250000 };
var trousers = { id: "P002", name: "Quần tây", price: 400000 };
var orderSample = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: shirt, quantity: 2 },
        { product: trousers, quantity: 1 },
    ],
    note: "Giao sau 18h",
};
printOrder(orderSample);
