function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;
    if(user=="ratoncita" && pass=="14042023") {
        window.location="hola.html";        
    }
    else{
        alert("datos incorrectos");
    }
}