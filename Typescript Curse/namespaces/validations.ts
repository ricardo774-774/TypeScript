
namespace validations {

    export const validateText = ( text:string):boolean => {
        return (text.length > 3) 
         ? true
         : false
    }

    const validateDate = ( myDate: Date ): boolean => {
        return ( typeof(myDate) == "number" )
          ? true
          : false
    }
    
}

console.log( validations.validateText('Ricardo'));