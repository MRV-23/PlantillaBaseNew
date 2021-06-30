
class Response{
    static async validateResponse(resp){
        if(resp.status === "error" && resp.result.code == 401){//verificar el tipo de error sí es que caduco el token o no tiene permisos lo sacamos
            await Scripts.require("js/salir.js");
            Salir.main();
        }
    }
}
