// Giải thích về từ khóa 'let' trong JavaScript
// 'let' được sử dụng để khai báo biến trong JavaScript. Nó có các đặc điểm sau:
// 1. Phạm vi khối (block scope): Biến được khai báo bằng 'let' chỉ tồn tại trong khối mã mà nó được khai báo.
// 2. Không thể khai báo lại trong cùng một phạm vi.
// 3. Hỗ trợ cơ chế hoisting nhưng không thể sử dụng trước khi khai báo (Temporal Dead Zone).

let x;
x = 5; // Khai báo biến x và gán giá trị 5 
console.log(x); // In ra giá trị của x (5)
x = "Hùng"; // Gán giá trị mới cho x (String "Hùng") 
console.log(x); // In ra giá trị mới của x ("Hùng")

//Điểm khác biệt với các ngôn ngữ khác là JavaScript cho phép khai báo biến mà không cần khai báo kiểu dữ liệu trước.
// Điều này có nghĩa là bạn có thể gán bất kỳ kiểu dữ liệu nào cho biến mà không cần chỉ định kiểu dữ liệu trước đó.

// Giải thích về từ khóa 'const' trong JavaScript
// 'const' được sử dụng để khai báo một hằng số trong JavaScript. Các đặc điểm chính của 'const':
// 1. Giá trị của biến khai báo bằng 'const' không thể được gán lại sau khi đã khởi tạo.
// 2. Biến 'const' phải được khởi tạo giá trị ngay tại thời điểm khai báo.
// 3. Phạm vi khối (block scope), tương tự như 'let'.
// 4. Nếu 'const' được sử dụng với một đối tượng hoặc mảng, bạn có thể thay đổi nội dung của đối tượng hoặc mảng đó, nhưng không thể gán lại đối tượng hoặc mảng mới.

// Ví dụ minh họa:

// Khai báo một hằng số
const PI = 3.14;
console.log(PI); // In ra giá trị của PI

// Thay đổi giá trị của hằng số sẽ gây lỗi
// PI = 3.14159; // Lỗi: Assignment to constant variable.

// Sử dụng 'const' với đối tượng
const person = { name: "Alice", age: 25 };
console.log(person);

// Thay đổi thuộc tính của đối tượng
person.age = 26; // Hợp lệ
console.log(person);

// Gán lại đối tượng mới sẽ gây lỗi
// person = { name: "Bob", age: 30 }; // Lỗi: Assignment to constant variable.

// Sử dụng 'const' với mảng
const colors = ["red", "green", "blue"];
console.log(colors);

// Thay đổi nội dung của mảng
colors.push("yellow"); // Hợp lệ
console.log(colors);

// Gán lại mảng mới sẽ gây lỗi
// colors = ["black", "white"]; // Lỗi: Assignment to constant variable.

// Khi nào nên sử dụng 'const' và khi nào nên sử dụng 'let':

// 1. Sử dụng 'const':
//    - Khi giá trị của biến không thay đổi trong suốt chương trình.
//    - Dùng để khai báo các hằng số hoặc các biến mà bạn muốn đảm bảo không bị gán lại giá trị mới.
//    - Thích hợp cho các đối tượng hoặc mảng mà bạn chỉ thay đổi nội dung bên trong, không gán lại đối tượng hoặc mảng mới.

// Ví dụ:
const PIs = 3.14; // Giá trị không thay đổi
const person3 = { name: "Alice", age: 25 }; // Đối tượng có thể thay đổi thuộc tính nhưng không thể gán lại
person3.age = 26; // Hợp lệ

// 2. Sử dụng 'let':
//    - Khi giá trị của biến có thể thay đổi trong quá trình thực thi chương trình.
//    - Dùng khi bạn cần khai báo biến trong phạm vi khối (block scope).
//    - Thích hợp cho các biến mà giá trị có thể được cập nhật hoặc thay đổi.

// Ví dụ:
let counter = 0; // Giá trị có thể thay đổi
counter++; // Tăng giá trị của biến

// Tóm lại:
// - Sử dụng 'const' khi bạn muốn đảm bảo biến không bị gán lại giá trị mới.
// - Sử dụng 'let' khi bạn cần một biến có thể thay đổi giá trị trong phạm vi khối.


// Kiểu Number
let num = 42; // Số nguyên
let pi = 3.14; // Số thực
console.log(num, pi);

// Kiểu String
let greeting = "Hello, World!";
console.log(greeting);

// Kiểu Boolean
let isJavaScriptFun = true;
console.log(isJavaScriptFun);

// Kiểu Undefined
let undefinedVar;
console.log(undefinedVar);

// Kiểu Null
let emptyValue = null;
console.log(emptyValue);

// Kiểu Symbol
let uniqueId = Symbol("id");
console.log(uniqueId);

// Kiểu BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

// Kiểu Object
let person2 = { name: "John", age: 30 };
console.log(person2);

// Kiểu Array
let s = ["red", "green", "blue"];
console.log(s);

// Kiểu Function
function sayHello() {
    console.log("Hello!");
}
sayHello();

// Kiểu Date
let now = new Date();
console.log(now);

// Kiểu RegExp
let regex = /ab+c/;
console.log(regex);

// Chốt lại
// Dùng let khi cần khai báo biến có thể thay đổi giá trị trong khối (block scope).
// Dùng const khi cần khai báo biến không thay đổi giá trị trong khối (block scope).
// 1. Sử dụng 'const':
//    - Khi giá trị của biến không thay đổi trong suốt chương trình.
//    - Dùng để khai báo các hằng số hoặc các biến mà bạn muốn đảm bảo không bị gán lại giá trị mới.
//    - Thích hợp cho các đối tượng hoặc mảng mà bạn chỉ thay đổi nội dung bên trong, không gán lại đối tượng hoặc mảng mới.

// 2. Sử dụng 'let':
//    - Khi giá trị của biến có thể thay đổi trong quá trình thực thi chương trình.
//    - Dùng khi bạn cần khai báo biến trong phạm vi khối (block scope).
//    - Thích hợp cho các biến mà giá trị có thể được cập nhật hoặc thay đổi.