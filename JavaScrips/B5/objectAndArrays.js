// trong object có thể chứa các kiểu dữ liệu khác nhau, quan trọng nhất là value trong object
{
    const a = {
        name: 'Hùng',
        age: 23,
        address: 'Hà Nội',
    }

    a.name = 'Việt Hùng'; // Đổi tên

    console.log(`Tên: ${a.name}. Tuổi: ${a.age}. Địa chỉ: ${a.address}`); // Tên: Việt Hùng
    // const formattedData = {
    //     'Tên': a.name,
    //     'Tuổi': a.age,
    //     'Địa chỉ': a.address
    // };
    // console.table([formattedData]);

    console.log(`typeof kiểu a: ${typeof a}`, a);

}

// Object và Array
// sự khác biết giữa object và array là, array quản lý các phần tử có thứ tự, còn object thì
// không cần thứ tự,
{
    let a = ['GS', 'PRX', 'DRX'] // Array có thể chứa object và các kiểu dữ liệu khác nhau
    let c = {}; //object

    console.log(`type of a: ${typeof a}`, a); // object
    console.log(`first element of a:`, a[0]);
}
//bình thường Array sẽ quản lý tất cả và nhiều object khác nhau,
//VD
{
    let person = [
        {
            name: 'Hùng',
            age: 23,
            address: 'Hà Nội',
        },
        {
            name: 'Việt',
            age: 25,
            address: 'HCM',
        },
        {
            name: 'Nam',
            age: 30,
            address: 'Đà Nẵng',
        }
    ]

    console.log(`Array of person: ${typeof person}`, person); // object

}