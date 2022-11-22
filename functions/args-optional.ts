(() => {
    
    const fullName = (firstName?: string, lastName?: string): string => {
        
        return `${firstName} ${lastName || '"not underwritten"'}`;
    }

    const name = fullName('Ricardo');

    console.log(name);

})()