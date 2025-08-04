function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0"); // thêm tiền tố 0 nếu < 10
  const month = String(date.getMonth() + 1).padStart(2, "0"); // tháng bắt đầu từ 0 nên +1
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export { formatDate };
