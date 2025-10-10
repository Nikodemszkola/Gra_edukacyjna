function slowka_definicje(e) {
    const ile = parseInt(document.getElementById("ile").value);
    const druk = document.getElementById("druk");
    const druk2 = document.getElementById("druk2");

    druk.innerHTML = "";
    druk2.innerHTML = "";
    if (e.key === "Enter"){
    if (!isNaN(ile) && ile >= 1 && ile <= 10) {
        for (let i = 1; i <= ile; i++) {
            
            druk.innerHTML += `<p>Słówko nr ${i}: <input type="text"></p>`;
            druk2.innerHTML += `<p>Definicja nr ${i}: <input type="text"></p>`;
        }
    } else {
        druk.innerHTML = "<p>Wpisz liczbę od 1 do 10.</p>";
    }}
}


function zmiana_koloru(kolor) {
    const prawy = document.querySelector(".prawy");
    if (prawy) {
        prawy.style.backgroundColor = kolor;
    } else {
        console.error("Nie znaleziono elementu .prawy");
    }
}
function start_game() {
    const ile = parseInt(document.getElementById("ile").value);
    const blok_prawy = document.getElementsByClassName("prawy")[0];

    blok_prawy.innerHTML = "";

    for (let i = 0; i < ile * 2; i++) {
        const el = document.createElement("div");
        el.classList.add("fiszka");
        el.textContent = ;
        blok_prawy.appendChild(el);
    }
}

