type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string; // optional
};
function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}
function printOrder(order: Order): void {
  console.log(`Đơn hàng: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log(`Sản phẩm:`);

  for (let item of order.items) {
    let { product, quantity } = item;
    let subtotal = product.price * quantity;
    console.log(
      `- ${product.name} × ${quantity} → ${subtotal.toLocaleString()} VND`
    );
  }

  let total = calculateOrderTotal(order);
  console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
}
let shirt: Product = { id: "P001", name: "Áo sơ mi", price: 250000 };
let trousers: Product = { id: "P002", name: "Quần tây", price: 400000 };

let orderSample: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: shirt, quantity: 2 },
    { product: trousers, quantity: 1 },
  ],
  note: "Giao sau 18h",
};

printOrder(orderSample);
