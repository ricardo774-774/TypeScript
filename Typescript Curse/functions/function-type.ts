(() => {

    const addNumber = ( a: number, b: number) => a + b;

    const saludar  = ( name: string) => `Hello ${name}`;

    const helloWord = () => 'Hello world';

    let myFuntion: (number1: number, number2: number) => number ;
    myFuntion = addNumber;
    console.log(myFuntion(1, 2));

    let myFuntion2: (text: string) => string ;
    myFuntion2 = saludar;
    console.log(myFuntion2('Ricardo'));

    let myFuntion3: () => string ;
    myFuntion3 = helloWord;
    console.log(myFuntion3());


})()