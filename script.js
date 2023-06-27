/* document.querySelector("button.button-menu-toggle") //ESTA LINEA
    .addEventListener("click", function() {
         document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")}); */

                      const servicios = document.querySelector(".services");

                      //OTRA ALTERNATIVA
                      
                      //Boton de menu
                      const boton = document.querySelector("button.button-menu-toggle");// ESTO
                      
                      
                      //Funcion que muestra el menu
                      function mostrarMenu(){
                        const ul = document.querySelector(".nav-links");
                        ul.classList.toggle("nav-links-responsive");
                      }
                      
                      function mostrarServicios(){
                        const serviciosLinks = document.querySelector(".services-links");
                          serviciosLinks.classList.remove("services-links");
                          serviciosLinks.classList.add("services-links-open");
                      
                      }
                      
                      //Generar el evento al darle click
                      boton.addEventListener("click", mostrarMenu); // SEGUNDA LINEA
                      servicios.addEventListener("click", mostrarServicios);
                      
                      
