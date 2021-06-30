
class CargadorArchivos{

    static cache(){
        CargadorArchivos.cacheUrl = [];
    }

    static main(file,target,callback,cache=true){
    
        mainHeader.append('<div class="preloader2"></div>');
        if(cache){
            let existe = CargadorArchivos.cacheUrl.find(function(elemento){
                return elemento.url === file
            });

            if(existe){
                $('.preloader2').fadeOut(500,function(){
                    $(this).remove()
                });
                callback(target.html(existe.html));
                return;
            }
        }
        
        let archivo = window.ActiveXObject ?  new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
        archivo.open("GET", urlGlobal + file, true);
        archivo.onreadystatechange = function () {
            if (archivo.readyState == 4) {
                if (archivo.status == 200 || archivo.status == 0){
                    $('.preloader2').fadeOut(500,function(){
                        $(this).remove()
                    })
                    if(cache)
                         CargadorArchivos.cacheUrl.push({url:file,html:archivo.responseText});
                    callback(target.html(archivo.responseText));
                } 
            }
        }   
        archivo.send(null);
    } 
}

CargadorArchivos.cache();