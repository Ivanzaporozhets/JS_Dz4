//1
let max = (a, b) => {
    if (a > b) return a;
    else if (a < b) return b;
    else return "Числа равны";
}
console.log(max(0, -1));


//2
let min = (...numbers) => {
    let minNumber = numbers.reduce(function (previous, current) {
        if (previous > current) return previous = current;
        return previous;
    }); return minNumber;
};
console.log(min(0, -1, 100, 500, 100500));


//3
let users = [
    { firstname: "John I", lastname: "Cadillac ", age: 100 },
    { firstname: "John II", lastname: "Audi", age: 90 },
    { firstname: "John III", lastname: "BMW", age: 80 },
    { firstname: "John IV", lastname: "Ferrari", age: 70 },
    { firstname: "John V", lastname: "Lamborghini", age: 60 },
    { firstname: "John VI", lastname: "Mercedes", age: 50 },
    { firstname: "John VII", lastname: "Jaguar", age: 40 },
    { firstname: "John VIII", lastname: "Bentley", age: 30 },
    { firstname: "John IX", lastname: "Zaporozhets", age: 20 },
    { firstname: "John X", lastname: "Nissan", age: 10 }
];
let minorUsers = users.filter(user => user.age < 18);
let usersFullname = users.map(user => {
    user.fullname = user.firstname + " " + user.lastname;
    return user
});
let fullnameUsers = [];
usersFullname.forEach(user => fullnameUsers.push(user.fullname));


//4
let shiftAnalog = (elements) => {                   
    elements.splice(0, 1);
    return elements;
};
console.log(shiftAnalog([1, 2, 3, 4, 5]));



//5
let pushAnalog = (elements) => {
    let arr = [10, 15, 20];
    for(let i = 0; i < arr.length; i++){
        elements[elements.length] = arr[i];
    } return elements
};
console.log(pushAnalog([2, 4, 6 ,8]))


//6
let source = {firstname: 'Tom', age: 10}
let extend = (source, ...obj) => {
    for(let i =0; i < obj.length; i++)
    for(let key in obj[i])
    source[key] = obj[i][key];
    return source;
};
let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(s);



//7
let setComment = (date, message, author = "Anonymous") => {
    if(date === undefined  || message === undefined)
    return alert ("Данные переданы некорректно");
    console.log(author + ", " +  date + "\n\r" + message);
};


//8
let createTimer = () =>{
    let time1 = performance.now();
    return () => {
        let time2 = performance.now();
        return (`Время выполнения ${time2 - time1}`);
    }
};
let timer = createTimer();
alert("!");
alert (timer() );


//9
let createAdder = (x) => {
    return (y) =>{
        return x + y;
    }
}
let hello = createAdder("Hello, ");
alert(hello('John'));
alert(hello('Harry'));

let plus = createAdder(5);
alert(plus(1));
alert(plus(5));

