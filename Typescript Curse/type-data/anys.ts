(() => {
    let avenger: any = 123;
    let exist;
    let power;

    avenger = 'Hulk';
    console.log((avenger as string).charAt(0));

    avenger = 105.40323;
    console.log(<number>avenger.toFixed(2));

    console.log(exist);
    console.log(power);
})()