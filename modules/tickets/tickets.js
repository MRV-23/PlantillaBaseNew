class Tickets{ 
    static async main(){
        await Scripts.require("js/cargadorArchivos.js");
        CargadorArchivos.main('modules/tickets/tickets.html',mainContent,function(){
            document.getElementById('tituloSeccion').innerText = "Tickets";
        });
    }
}