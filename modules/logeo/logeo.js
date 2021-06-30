
class Logeo{

    static logear(){

        $('.page-container').addClass('sbar_collapsed');//ocultamos el siderBar
        mainMenu.html('');//Limpiamos el contenido del sideBar
        mainHeader.html('');
        mainFooter.html('');       

        $('#form_submit').click(async function(){
            let resp = await fetch("http://192.168.0.249/sts-backend/backend/api/v1/autenticacion",{
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({usuario:"jesus.rubio",pass:"pruebas123"})
            });
            resp =  await resp.json();
            //verificar que nos devuelva un status ok
            //*******************************
            Token.set_(resp.result.msg.result.token);
            Token.setUserName(resp.result.msg.result.nombre);
            Token.setUserImage(resp.result.msg.result.avatar);
            history.pushState(null, "Demos", "inicio");
            await Scripts.require("js/enrutador.js");
            Enrutador.main();
        });

    }

    static async main(){
        await Scripts.require("js/cargadorArchivos.js");
        CargadorArchivos.main('modules/logeo/logeo.html',mainContent,function(){
           Logeo.logear();
        });
    }
}