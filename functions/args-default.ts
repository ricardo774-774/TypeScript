(() => {
    
    const fullName = (
        firstName: string, 
        lastName?: string, 
        upper: boolean = false
    ): string => {
        
        if(upper) {
            return `${firstName} ${lastName || '"not underwritten"'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || '"not underwritten"'}`.toLowerCase();
        }

    }

    const name = fullName('Ricardo','Velez',true);

    console.log(name);

})()