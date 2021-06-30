class Menu{

    static get ruta(){
        return window.location.pathname.substring(1);
    }

    static get rutaDefault(){
        return "inicio";//URL por defecto
    }

    static async contenidoPorDefault(){
        await Scripts.require("modules/inicio/inicio.js");
        Inicio.main();
        Menu.opciones.eq(0).parent().addClass('active');
    }


    static async main(){

        Menu.opciones = $('.link-principal');

        Menu.opciones.each(function(){//limpiamos la opción seleccionada
            $(this).attr('href') === Menu.ruta ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
        });

        switch(Menu.ruta){
            case "inicio":
                await Scripts.require("modules/inicio/inicio.js");
                Inicio.main();
            break;
            case "tickets":
                await Scripts.require("modules/tickets/tickets.js");
                Tickets.main();  
            break;
            case "usuarios":
                await Scripts.require("modules/usuarios/usuarios.js");
                Usuarios.main();  
            break;
            case "salir":
                await Scripts.require("js/salir.js");
                Salir.main(); 
            break;
            default:
                history.pushState( null, "Demos", urlGlobal + Menu.rutaDefault );
                Menu.contenidoPorDefault();
        }
     }
 }