
class Usuarios{

    static async getUsuarios(){
        let headers = new Headers();
        headers.append(Token.name, Token.get);
        let resp = await fetch("http://192.168.0.249/sts-backend/backend/api/v1/usuarios",{
            headers
        });
        return await resp.json();
    }

    static async cargarLista(){
        let respuesta = await Usuarios.getUsuarios().then(resp => resp).catch(err=>err);

        await Scripts.require("js/response.js");

        Response.validateResponse(respuesta);// Se debera configurar respecto a la respuesta que se obtenga
        
        let data = respuesta.result.msg.result.data;
        let html = "";
        data.forEach(function(e){
            console.log(e)
            html += `<div class="col-lg-6 col-md-4 mt-2">
                        <div class="mb-1" style="background:#f9f9f9;padding:15px;">
                            <div class="media align-items-center">
                                <img src="assets/images/team/avatar.jpg" class="d-block ui-w-30 rounded-circle" alt="">
                                <div class="media-body ml-md-5 ml-3 ">
                                    <p>${e.nombre}</p>
                                    <span style="font-size:10px;">${e.puesto}</span>
                                </div>

                                <div class="btn-group ml-md-0 ml-1">
                                    <button type="button" class="btn btn-secondary">Mostrar</button>
                                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Actualizar</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Eliminar</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>`;
        });

        $('#contenedorUsuarios').html(html);
    }



    static async main(){
        await Scripts.require("js/cargadorArchivos.js");

        CargadorArchivos.main('modules/usuarios/usuarios.html',mainContent,function(){
            document.getElementById('tituloSeccion').innerText = "Usuarios";

            Usuarios.cargarLista();

        },true);
    }
}