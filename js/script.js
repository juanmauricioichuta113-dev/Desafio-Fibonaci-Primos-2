function cambiarSeccion(idSeccionDestino) {
    document.getElementById("seccionFibo").classList.add("oculto");
    document.getElementById("seccionPrimos").classList.add("oculto");
    document.getElementById("seccionCombinado").classList.add("oculto");
    document.getElementById("btnNavFibo").classList.remove("active");
    document.getElementById("btnNavPrimos").classList.remove("active");
    document.getElementById("btnNavCombinado").classList.remove("active");
    document.getElementById(idSeccionDestino).classList.remove("oculto");

    if (idSeccionDestino === "seccionFibo") {
        document.getElementById("btnNavFibo").classList.add("active");
    } else if (idSeccionDestino === "seccionPrimos") {
        document.getElementById("btnNavPrimos").classList.add("active");
    } else if (idSeccionDestino === "seccionCombinado") {
        document.getElementById("btnNavCombinado").classList.add("active");
    }
}

function calcularSoloFibonacci() {
    let cantInput = document.getElementById("cantFibo");
    let cajaResultado = document.getElementById("resultadoFibo");
    let n = parseInt(cantInput.value);
    if (isNaN(n) || n < 1) return;

    let vectorFibo = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) vectorFibo.push(0);
        else if (i === 1) vectorFibo.push(1);
        else vectorFibo.push(vectorFibo[i - 1] + vectorFibo[i - 2]);
    }

    let html = "<div class='lista-horizontal'>";
    for (let i = 0; i < vectorFibo.length; i++) {
        html += "<span class='numero-badge'>" + vectorFibo[i] + "</span>";
    }
    html += "</div>";
    cajaResultado.innerHTML = html;
}

function verificarSoloPrimo() {
    let numInput = document.getElementById("numPrimo");
    let cajaResultado = document.getElementById("resultadoPrimo");
    let numero = parseInt(numInput.value);
    if (isNaN(numero) || numero < 1) return;

    let esPrimo = verificarPrimalidad(numero);
    if (esPrimo) {
        cajaResultado.innerHTML = "<div class='alerta-resultado exito'>[STATUS: VALIDADO] El número " + numero + " cumple la condición de primalidad criptográfica.</div>";
    } else {
        cajaResultado.innerHTML = "<div class='alerta-resultado peligro'>[STATUS: RECHAZADO] El número " + numero + " posee múltiples divisores estructurales.</div>";
    }
}

function procesarCombinado() {
    let cantInput = document.getElementById("cantCombinado");
    let cajaResultado = document.getElementById("resultadoCombinado");
    let n = parseInt(cantInput.value);
    if (isNaN(n) || n < 1) return;

    let fibo = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) fibo.push(0);
        else if (i === 1) fibo.push(1);
        else fibo.push(fibo[i - 1] + fibo[i - 2]);
    }

    let html = "";
    for (let i = 0; i < fibo.length; i++) {
        let actual = fibo[i];
        let esPrimo = verificarPrimalidad(actual);
        if (esPrimo) {
            html += "<div class='resultado-item primo'>Componente " + (i + 1) + ": <strong>" + actual + "</strong> <span class='badge-primo'>Match Perfecto</span></div>";
        } else {
            html += "<div class='resultado-item'>Componente " + (i + 1) + ": <strong>" + actual + "</strong></div>";
        }
    }
    cajaResultado.innerHTML = html;
}

function verificarPrimalidad(num) {
    if (num <= 1) return false;
    let divisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisores++;
    }
    return divisores === 2;
}