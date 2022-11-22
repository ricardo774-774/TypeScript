// Funciones Básicas
(() => {

  const sum = (a: number, b: number): number => {
    return a + b;
  }
  
  const cont = ( heroes: string[]): number => {
    return heroes.length;
  }
  
  const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  cont(superHeroes);
  
  //Parametros por defecto
  const llamarBatman = ( llamar = true ): void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes = ( ...personas: string[] ): string => {
    return personas.join(", ");
  }
  
  // Tipo funcion
  const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[])=> {}
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (n: number, t: string, b: boolean, a: string[]) => void;
  
  noHaceNadaTampoco = noHaceNada

})()
