(() => {

    const numbers: (string | number | boolean | {})[] = [1,2,3,4,5,'6',7,{}];

    numbers.push(true);

    console.log(numbers);

    const villians = ['Medusa', 'Optopus', 'Pepe'];

    villians.forEach( v => console.log(v.toUpperCase()));

    numbers.forEach( v => console.log(v))
})()