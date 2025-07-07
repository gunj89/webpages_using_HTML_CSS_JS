document.getElementById("fr").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                gunj();
            }
        });

function gunj() {
    let fac = parseInt(document.getElementById("fr").value);
    for (let i = fac - 1; i > 1; i--) {
        fac *= i;
    }
    document.getElementById("ans").innerHTML = "factorial is : " + fac;
}