
class Scripts{

    static cache(){
        Scripts.cacheScripts = [];//almacenamos los archivos cargados para no volver a cargarlos
    }

    static require(url){//se incluyen como se van cargando, no importa el orden
        return new Promise((resolve,reject)=>{
            url = urlGlobal + url;
            if( Scripts.cacheScripts.find(e => e === (url) ) !== undefined)//Si existe en cache no volvemos a cargar
                return resolve();
            let script = document.createElement('script');
            script.src = url;
            document.getElementsByTagName('body')[0].appendChild(script);
            Scripts.cacheScripts.push(url);
            script.onload = function() {
                //console.log(url);
                resolve();
            };
        });
    }

    static loadScript(url, callback) {
        if( Scripts.cacheScripts.find(e => e === url) !== undefined)//Si existe en cache no volvemos a cargar
            return callback();
        let script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('body')[0].appendChild(script);
        Scripts.cacheScripts.push(url);
        script.onload = function() {
            //console.log(url);
            callback();
        };
    }
    
    static requireOrder(...params) {//Incluimos en el orden como se llamaron
        let idx = -1;
        let nextLoad =  function() {
            idx++
            if (idx >= params.length)
                 return true;
            if (typeof params[idx] == "function") {
                params[idx]();
                nextLoad();
            } 
            else
                Scripts.loadScript(params[idx],nextLoad);
        };
        nextLoad();
    }
}