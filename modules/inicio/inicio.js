class Inicio{ 
    static async main(){
        await Scripts.require("js/cargadorArchivos.js");
        CargadorArchivos.main('modules/inicio/inicio.html',mainContent,function(){
            document.getElementById('tituloSeccion').innerText = "Inicio";
            
        });
    }
}