const insertArrayAt = (arr1, arr2, position) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Cả hai đối số đầu tiên phải là mảng.");
    return;
  }

  if (typeof position !== 'number' || position < 0 || position > arr1.length) {
    console.log("Vị trí chèn không hợp lệ.");
    return;
  }

  const result = [
    ...arr1.slice(0, position),
    ...arr2,
    ...arr1.slice(position)
  ];
  
  console.log(result);
  return result;
};
