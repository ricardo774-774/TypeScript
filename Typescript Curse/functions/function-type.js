"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const saludar = (name) => `Hello ${name}`;
    const helloWord = () => 'Hello world';
    let myFuntion;
    myFuntion = addNumber;
    console.log(myFuntion(1, 2));
    let myFuntion2;
    myFuntion2 = saludar;
    console.log(myFuntion2('Ricardo'));
    let myFuntion3;
    myFuntion3 = helloWord;
    console.log(myFuntion3());
})();
//# sourceMappingURL=function-type.js.map