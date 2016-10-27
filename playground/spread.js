//function add (a, b) {
//    return a + b;
//}
//
//console.log(add(3, 1));
//
//var toAdd = [9, 5];
//console.log(add(...toAdd));

//var groupA = ['Ben', 'Luke'];
//var groupB = ['Nuno'];
//var final = [...groupB, 3,...groupA];
//
//console.log(final);

var person = ['Andrew', 25];
var person2 = ['Luke', 20];

function greeting (name, age) {
    console.log('hello ' + name + ', you are ' + age);
}

greeting(...person);
greeting(...person2);

var names = ['Mike', 'Luke'];
var final = ['Ben',...names];

final.forEach((item, index) => {
    console.log('Hi ' + item);
});