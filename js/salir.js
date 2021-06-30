class Salir{
    static async main(){
        localStorage.removeItem(Token.name);
        localStorage.removeItem(Token.userName);
        localStorage.removeItem(Token.userImage);
        history.pushState(null, "Demos", "salir");
        await Scripts.require("modules/logeo/logeo.js");
        Logeo.main();
    }
}
