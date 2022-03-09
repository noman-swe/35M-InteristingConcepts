function welcomeMessage(name, greethandler){
    // console.log(name);
    greethandler(name);
}
// const names = ['Tom Hanks', 'shibly', 'sadik'];
// const myObject = {name: 'shobly Noman', age: 11};
function greetMorning(name){
    console.log(name, 'Good Morning');
}
function greetEvening(name){
    console.log(name, 'Good Evening');
}
welcomeMessage('noman', greetMorning);
welcomeMessage('Shibly', greetEvening);