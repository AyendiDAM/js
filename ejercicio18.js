/*. Crea un mapa vacío y añade los DNI de diez personas ficticias, usando el dni como clave 
y el nombre como valor. A continuación, muestra en consola la lista de todos los dni 
junto con el nombre de las personas. Modifica el nombre de la tercera persona y vuelve 
a mostrar todos los datos en consola, para comprobar que la operación se ha realizado 
correctamente. */

let mapa = new Map();//mapa vacío
//se piede añadir mejor con el set las claves o modificar

mapa = new Map([[5534874, "Jordi"],[323, "Hola"],[3254, "Jordi"],[35635, "Jordi"],
    [54363456, "Jordi"],[44, "Jordi"],[555, "Jordi"]
    ,[333452, "Jordi"],[5534234874, "Jordi"],[557434874, "Jordi"]]);

console.log(mapa);


mapa.set(3254,"Ya sabes klk");
console.log(mapa);