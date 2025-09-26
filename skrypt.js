function slowka_definicje() {
    const ile = parseInt(document.getElementById("ile").value);
    const druk = document.getElementById("druk");
    const druk2 = document.getElementById("druk2");

    druk.innerHTML = "";
    druk2.innerHTML = "";

    if (!isNaN(ile) && ile >= 1 && ile <= 10) {
        for (let i = 1; i <= ile; i++) {
            druk.innerHTML += `<p>Słówko nr ${i}: <input type="text"></p>`;
            druk2.innerHTML += `<p>Definicja nr ${i}: <input type="text"></p>`;
        }
    } else {
        druk.innerHTML = "<p>Wpisz liczbę od 1 do 10.</p>";
    }
}


function zmiana_koloru(kolor) {
    const prawy = document.querySelector(".prawy");
    if (prawy) {
        prawy.style.backgroundColor = kolor;
    } else {
        console.error("Nie znaleziono elementu .prawy");
    }
}
