alert("Salva el ladrillo!, toca el ladrillo para salvarlo, NO TOQUES AL AARON!")

document.getElementById('ladrillo').addEventListener("click", sumarPuntos);

puntos = 0;
tiempo = 30;

function sumarPuntos() {
    puntos++;

    document.getElementById("puntos").innerHTML = "<b>Puntos: <b>" +
        puntos + "</b>";
    document.getElementById("puntos")
        .style.fontFamily = "sans-serif";
    document.getElementById("puntos")
        .style.fontSize = "30px";
    randNum = Math.round(Math.random() * 300);
    randNum2 = Math.round(Math.random() * 300);
    randNum3 = Math.round(Math.random() * 1920);
    randNum4 = Math.round(Math.random() * 1080);
    randNum5 = Math.round(Math.random() * 1720);
    randNum6 = Math.round(Math.random() * 880);
    document.getElementById("ladrilloimg")
        .style.height = randNum + "px";
    document.getElementById("ladrilloimg")
        .style.width = randNum2 + "px";
    document.getElementById("ladrilloimg")
        .style.marginLeft = randNum3 + "px";
    document.getElementById("ladrilloimg")
        .style.marginTop = randNum4 + "px";
    document.getElementById("aaronimg")
        .style.visibility = "visible";
    document.getElementById("aaronimg")
        .style.marginLeft = randNum5 + "px";
    document.getElementById("aaronimg")
        .style.marginTop = randNum6 + "px";
}

document.getElementById('aaron').addEventListener("click", gameOver);


function gameOver() {
    alert("Has perdido, el Aaron consiguió tus ladrillos, salvastes un total de: " + puntos + " ladrillos");
    location.reload();
}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "<b>&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
    if (tiempo == 0) {
        alert("Se te acabo el tiempo, salvastes un total de: " + puntos + " ladrillos");
        location.reload();
    }


}

setInterval(restarTiempo, 1000);