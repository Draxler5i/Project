angular
    .module('app',[])
    .controller('Customer',Customer);

function Customer(){
    var cust = this;
    cust.mensaje = "Index de proyecto";
    cust.estilo = {
        color: "blue"
    }
}



