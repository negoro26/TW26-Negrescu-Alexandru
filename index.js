console.log("Hello World");

function validare_cnp(cnp) {
    const key = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];

    // verificam lungimea si sa fie format din cifre
    if (!/^[0-9]{13}$/.test(cnp)) {
        return false;
    }

    // verificam sexul si secolul (nu poate fi 0, e de la 1 la 9)
    if (cnp[0] === '0') {
        return false;
    }

    // verificam anul nasterii
    const an = cnp.substring(1, 3);

    // verificam luna nasterii
    const luna = cnp.substring(3, 5);
    if (luna < '01' || luna > '12') {
        return false;
    }

    // verificam ziua nasterii
    const ziua = cnp.substring(5, 7);
    if (ziua < '01' || ziua > '31') {
        return false;
    }

    // verificam judetul (sunt 52 judete/sectoare valide)
    const judet = cnp.substring(7, 9);
    if (judet < '01' || judet > '52') {
        return false;
    }

    // verificam numarul de ordine (trebuie sa fie intre 001 si 999)
    const numar_ordine = cnp.substring(9, 12);
    if (numar_ordine === '000') {
        return false;
    }

    // verificam cifra de control
    let suma = 0;
    for (let i = 0; i < 12; i++) {
        suma += parseInt(cnp[i]) * key[i];
    }

    let cifra_control = suma % 11;
    if (cifra_control === 10) {
        cifra_control = 1; // conform standardului daca restul este 10, cifra de control este 1
    }

    if (cifra_control !== parseInt(cnp[12])) {
        return false;
    }

    return true;
}

function valideazaCnpDinPagina() {
    const cnpInput = document.getElementById("cnp").value.trim();
    const rezultatElement = document.getElementById("rezultat");

    if (!cnpInput) {
        rezultatElement.textContent = "Te rog să introduci un CNP.";
        rezultatElement.style.color = "orange";
        return;
    }

    const esteValid = validare_cnp(cnpInput);

    if (esteValid) {
        rezultatElement.textContent = "CNP Valid!";
        rezultatElement.style.color = "green";
    } else {
        rezultatElement.textContent = "CNP Invalid!";
        rezultatElement.style.color = "red";
    }
}
