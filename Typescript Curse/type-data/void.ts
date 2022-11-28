(() => {
    // void == vacío
    function callToBatman():void {
        return;
    }

    const callToSuperman = ():void => {
        return;
    }

    const a = callToBatman();
    console.log(a);

    const b = callToSuperman();
    console.log(b);
})()