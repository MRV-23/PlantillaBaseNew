
class Enrutador{

    static async dependecias(){
        await Scripts.require("modules/menu/menu.js");
        await Scripts.require("js/cargadorArchivos.js");
        await Scripts.require("js/token.js");
    }
    
    static async main(){
        await Enrutador.dependecias();
        CargadorArchivos.main('modules/header/header.html',mainHeader,function(){});
        CargadorArchivos.main('modules/footer/footer.html',mainFooter,function(){});
        CargadorArchivos.main('modules/opciones/opciones.html',mainOption,function(){});
        CargadorArchivos.main('modules/menu/menu.html',mainMenu,function(){
            if (window.innerWidth > 1364)
                $('.page-container').removeClass('sbar_collapsed');//por defecto mostramos el siderBar, ya que al salir siempre lo oculto SOLO PARA ESTA PLANTILLA
            $('#userName').text(Token.getUserName);//cargamos nombre del usuario
            $('#userImage').attr('src',Token.getUserImage);//cargamos la imagen o avatar del usuario
            Menu.main();//cargarmos el archivo que corresponda a la ruta del url
            $('.link-principal').click(function(e){//Al dar click en cada link cambiamos el url y mostramos el contenido respectivo
                e.preventDefault();
                if( $(this).attr('href') === Menu.ruta )//Evitar cargar una pagina que ya este cargada (menú)
                    return;
                if (window.innerWidth <= 1364)//SOLO PARA ESTA PLANTILLA
                    $('.page-container').addClass('sbar_collapsed');
                history.pushState(null, "Demos", $(this).attr('href'));//cambiamos la url dependiendo del link seleccionado
                Menu.main();//como ya cambio la url la verificamos y mostramos el contenido que corresponda
            });
        });
    }
}