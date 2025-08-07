interface Student {
  name: string;
  age: number;
  email: string;
}

function displayStudent(name: string, age: number, email: string) {
  console.log(
    `Tên tôi là ${name}, tôi ${age} tuổi và email của tôi là ${email}.`
  );
}
displayStudent("A", 25, "abc@gmail.com");
