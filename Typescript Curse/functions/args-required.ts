(() => {
    
    const fullName = (firstName: string, lastName: string): string => {

        if (!firstName  || !lastName) {
            throw new Error('Required name');
        }
        
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Ricardo','Velez');

    console.log(name);

})()