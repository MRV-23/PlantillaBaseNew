class Token{
    static get get(){
        return JSON.parse(localStorage.getItem(Token.name)) || null;
    }

    static get name(){
        return "x-api-key";//Se define el nombre de la key
    }

    static set_(key){
        localStorage.setItem(Token.name,JSON.stringify(key));
    }

    static get userName(){
        return "user";//Se define el nombre del usuario
    }

    static get getUserName(){
        return JSON.parse(localStorage.getItem(Token.userName)) || null;
    }

    static setUserName(user){
        localStorage.setItem(Token.userName,JSON.stringify(user));
    }

    static get userImage(){
        return "image";//Se define la imagen de perfil o avatar
    }

    static get getUserImage(){
        return JSON.parse(localStorage.getItem(Token.userImage)) || null;
    }

    static setUserImage(image){
        localStorage.setItem(Token.userImage,JSON.stringify(image));
    }
}