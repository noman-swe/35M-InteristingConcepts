const fabNum = 50;

function add (first, secoond){
    const result = first + secoond;
    console.log(result);//hoisting kore
    if(result > 9){
        var mood = 'happy';
        mood = 'carnky';
        console.log(mood);
    }
    return result;
}

const sum = add(11, 25);
// console.log(mood);

for(let i = 0; i < 10; i++){
    console.log(i);
}

