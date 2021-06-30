let mainMenu;//sideBar
let mainContent;//area de carga del contenido
let mainHeader;//header
let mainFooter;//footer
let mainOption;//Algun otro elemento recurrente en la aplicación
let urlGlobal =  window.location.protocol + '//' + window.location.host + "/";

class Main{

    static habilitarHistorial(){//para cuando seleccione el boton del navegador adelante y atrás se guarde
        $(window).on('popstate',function(event) {
            Menu.main();
        });
    }

    static start() {
        Main.habilitarHistorial();
        mainMenu = $('#component-main-menu');
        mainContent = $('#component-main-content');
        mainHeader = $('#component-main-header');
        mainFooter = $('#component-main-footer')
        mainOption = $('#component-main-option');
      
        Token.get != null ? Enrutador.main() : Logeo.main();  
    }

    static run(){
        Scripts.cache();//Iniciamos el cache
        Scripts.requireOrder("https://code.jquery.com/jquery-3.6.0.min.js",
                            urlGlobal + "assets/js/popper.min.js",
                            urlGlobal + "assets/js/bootstrap.min.js",
                            urlGlobal + "assets/js/owl.carousel.min.js",
                            urlGlobal + "assets/js/metisMenu.min.js",
                            urlGlobal + "assets/js/jquery.slimscroll.min.js",
                            urlGlobal + "assets/js/jquery.slicknav.min.js",
                            urlGlobal + "assets/js/scripts2.js",
                            urlGlobal + "assets/js/plugins.js", 
                            urlGlobal + "js/token.js",
                            urlGlobal + "js/enrutador.js",
                            urlGlobal + "modules/logeo/logeo.js",
                            Main.start);                         
    }
}

Main.run();
