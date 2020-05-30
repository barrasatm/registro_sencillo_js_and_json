/*

 Title: Registro sencillo
 Author: Barrasa
 Description: Te registras y se guarda en un archivo en formato JSON

*/

// Especificaciones
 let db = require("megadb");
 let rl = require("readline");
 let prompts = rl.createInterface(process.stdin, process.stdout);
 let message = "";
 let archivo = new db.crearDB("db")

// Codigo
 console.log("Bienvenido al menu de registro.\nRellene el siguiente formulario con sus datos.")
 prompts.question("Usuario: ", function (Usuario) {
     prompts.question("Nombre: ", function (Nombre) {
         prompts.question("Apellidos: ", function (Apellidos) {
             prompts.question("Correo electronico: ", function (Email) {
                 prompts.question("Edad: ", function (Edad) {
                     prompts.question("Codigo secreto: ", function (Codigo) {
                         let repetido = archivo.tiene(Usuario)
                         if (repetido) {
                             console.clear()
                             console.log(`El nombre de usuario ${Usuario} ya esta escojido. Por favor, escoga otro nombre.`)
                         } else {
                             if (isNaN(Edad)) {
                                console.clear()
                                console.log("La edad debe ser un numero") 
                             } else {
                              if (Edad < 18) {
                                  console.log(`A donde vas niñato, necesitas tener 18 años mas para acceder, todavia te quedan ${18 - Edad} años.`)
                              } else {
                               if (Edad > 99) {
                                  console.log(`A donde vas fosil, deberias estar muerto. ¡¡FUERA DE AQUI!!`)
                               } else {
                                   console.clear()
                                   archivo.establecer(Usuario, {"Nombre": Nombre, "Apellidos": Apellidos, "Email": Email, "Edad": Edad, "Codigo secreto": Codigo})
                                   console.log(`\n\n  ¡Bienvenido ${Nombre}!\n\nHas sido registrado correctamente con los siguientes datos:\nUsuario: ${Usuario}\nNombre y Apellidos: ${Apellidos}, ${Nombre}\nEmail: ${Email}\nEdad: ${Edad} años\nCodigo secreto: ${Codigo}`)
                               }
                              }
                            }
                         }
                     })
                 })
             })
         })
     })
 })