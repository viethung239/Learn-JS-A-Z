{
 let a = "Hello, world!";


 let b = 5;

 let c = 1;


console.log(a + b + c); // In ra "Hello, world!" kết quả sẽ là "Hello, world!5" vì 
 // a là chuỗi và b,c là số, JavaScript sẽ tự động chuyển đổi b thành chuỗi v à nối chúng lại với nhau.
// Kết quả sẽ là "Hello, world!5"   
console.log(b + c + a); // In ra "6Hello, world!" vì b và c là số, JavaScript sẽ cộng chúng lại với nhau và sau đó nối với a.
 // Kết quả sẽ là "6Hello, world!"
}

{
 // Trong #escape dùng let thì console sẽ không thể dùng ở bên ngoài được, 
 // vì nó chỉ có thể dùng trong pham vi của nó
    let a = "Hello, world!";
    
   
    let b = 5;
   
    let c = 1;
   
   
   console.log(a + b + c); // In ra "Hello, world!" kết quả sẽ là "Hello, world!5" vì 
    // a là chuỗi và b,c là số, JavaScript sẽ tự động chuyển đổi b thành chuỗi v à nối chúng lại với nhau.
   // Kết quả sẽ là "Hello, world!5"   
   console.log(b + c + a); // In ra "6Hello, world!" vì b và c là số, JavaScript sẽ cộng chúng lại với nhau và sau đó nối với a.
    // Kết quả sẽ là "6Hello, world!"
    
}   
// console.log(a + b + c); sẽ báo lỗi vì a,b,c chỉ có thể dùng trong pham vi của nó
// console.log(b + c + a); sẽ báo lỗi vì a,b,c chỉ có thể dùng trong pham vi của nó

// escape characters
let text = ` Tôi dang cố gắng học "JavaScript" và tôi sẽ thành công!`;
console.log(text); 