function szamolas(){
    let ered = document.getElementById("op").value + " összesen " + (parseInt(document.getElementById("futas").value) + parseInt(document.getElementById("talaj").value)) + " pontot kapott. "
    
    document.getElementById("eredmeny").innerHTML = ered
}