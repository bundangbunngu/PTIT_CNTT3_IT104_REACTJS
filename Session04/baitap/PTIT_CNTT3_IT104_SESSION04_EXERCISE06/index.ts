type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

let listProduct: Product[] = [
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

function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount);
  }
  return product.price;
}

function printProductInfo(product: Product): void {
  let finalPrice = getFinalPrice(product);
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
  console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  console.log(`Danh mục: ${product.category.name}`);
}

for (let product of listProduct) {
  printProductInfo(product);
}
