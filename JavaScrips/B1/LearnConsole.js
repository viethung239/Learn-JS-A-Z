//console.log(): Hiển thị thông tin hoặc giá trị trong console.
console.log("Hello, world!");
console.log(42)

//console.warn(): Hiển thị cảnh báo trong console.
console.warn("This is a warning!");


//console.error(): Hiển thị lỗi trong console.
console.error("An error occurred!");

//console.table(): Hiển thị dữ liệu dưới dạng bảng.
  const users = [
    { name: "Hùng", age: 25 },
    { name: "Minh", age: 30 }
  ];
  console.table(users);

//console.time() và console.timeEnd(): Đo thời gian thực thi của một đoạn mã.
  console.time("Timer");
  for (let i = 0; i < 1000000; i++) {}
  console.timeEnd("Timer");

  
//console.assert()`**: Hiển thị lỗi nếu điều kiện không đúng.

  console.assert(1 === 2, "1 không bằng 2!");  

//Theo dõi ngăn xếp lệnh
//phần này chưa hiểu lắm cần thực hành nhiều để nhớ
  function firstFunction() {
    secondFunction();
  }
  
  function secondFunction() {
    thirdFunction();
  }
  
  function thirdFunction() {
    console.trace("Stack trace example");
  }
  
  firstFunction();

//console.group() và console.groupEnd(): Nhóm các thông điệp lại với nhau.
    console.group("Group 1");
    console.log("Message 1");
    console.log("Message 2");
    console.groupEnd();

    //ra ngoài nhóm
    console.log("Message 3332");


 //console.clear(): Xóa nội dung trong console.
  //Lưu ý là nó sẽ xóa các thông tin trong console, không phải là xoá các biến trong mã   
   // console.clear();
