function estilos(){
    //alteração de temas claros para os escuros
    var body = document.body;
    body.classList.toggle("dark-mode");
    document.getElementById("container").classList.toggle("container-dark");
}

function teste() {
    estilos()
    iniCookie()
}

function readCookie(nome){
    //função que recebe nome do cookie como parametro e retorna o valor dele
    var vnome = nome + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0) return c.substring(vnome.length,c.length);
    }
    return "";
}

function criaCookie(nome, valor, expira){
    //função de criar cookie com base nos valores de parâmetros
    document.cookie = nome + "=" + valor + "; " + "expires= "+ expira;
}
function iniCookie(){
    //criar cookie para tema escuro caso não haja um
    const exist = document.cookie
    if(exist == null || exist == "") return criaCookie("tema-escuro", "true", "Tue, 01 Jan 2115 12:00:00 UTC");
    
    var cookie = readCookie("tema-escuro");
    if(cookie == null || cookie == "") return criaCookie("tema-escuro", "true", "Tue, 01 Jan 2115 12:00:00 UTC");
    //verificar se o tema está escuro ou claro e altera-lo
    if(cookie == "true"){
        console.log(cookie)
        return document.cookie = "tema-escuro" + "=" + "false" + "; " + "expires= "+ "Tue, 01 Jan 2115 12:00:00 UTC";
        
    }else{
        console.log(cookie)
        return document.cookie = "tema-escuro" + "=" + "true" + "; " + "expires= "+ "Tue, 01 Jan 2115 12:00:00 UTC";
    }
}
function carregar(){
    //ao carregar a página é lodo no cookie seu valor e já aplica tema escuro se necessário
    var cookie = readCookie("tema-escuro");
    if(cookie == "true"){
        estilos()
    }
}