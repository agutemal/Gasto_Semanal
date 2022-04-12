$( document ).ready(function() {
    $('#staticBackdrop').modal('toggle')
});

let fomrPresupuesto=document.getElementById("fomrPresupuesto");
fomrPresupuesto.addEventListener("submit",(e)=>{
    e.preventDefault();
    let presupuesto=document.getElementById("inputGastoSemanal").value;
    let spanPresupuesto=document.getElementById("spanPresupuesto");
    spanPresupuesto.innerHTML=presupuesto;

    let spanRestante=document.getElementById("spanRestante");
    spanRestante.innerHTML=presupuesto;
    $('#staticBackdrop').modal('hide');

})

let formGastos=document.getElementById("formGastos");
formGastos.addEventListener("submit",(e)=>{
    e.preventDefault();
    let gasto=document.getElementById("exampleInputEmail1").value;
    let cantidad=document.getElementById("exampleInputPassword1").value;
    
    let spanRestante=document.getElementById("spanRestante");
    let restante=spanRestante.innerHTML;
    console.log(restante);

    let objGastoSemanal=new gastoSemanal(gasto,cantidad,restante);
    let objcontrolarGastos=new controlarGastos();
    objcontrolarGastos.addGastos(objGastoSemanal);
    objcontrolarGastos.resetFrom(formGastos);
})


class gastoSemanal{
    constructor(gasto, cantidad, restante){
        this.gasto=gasto;
        this.cantidad=cantidad;
        this.restante=restante;
    }
}

class controlarGastos{
    addGastos(objgastoSemanal){
        let divMostrarGastos=document.getElementById("mostrarGastos");
        let newGasto=document.createElement("ul");
        newGasto.setAttribute("class","list-group list-group-flush");
        newGasto.innerHTML=`
        <li class="list-group-item">${objgastoSemanal.gasto}: <span class="badge bg-primary">${objgastoSemanal.cantidad} </span> </li>
        `;
        divMostrarGastos.appendChild(newGasto);
        let auxrestante=objgastoSemanal.restante-objgastoSemanal.cantidad;
        let spanRestante=document.getElementById("spanRestante");
        spanRestante.innerHTML=auxrestante;
    }

    resetFrom(formenviar){
        formenviar.reset();
    }

}

