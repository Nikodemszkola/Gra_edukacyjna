function slowka_definicje() {
    var ile = parseInt(document.getElementById("ile").value);
    var druk = document.getElementById("druk");
    druk.innerHTML = "";

    if (!isNaN(ile) && ile >= 1 && ile <= 10) {
        for (var i = 1; i <= ile; i++) {
            druk.innerHTML += "<p>Słówko nr " + i + ": <input type='text'></p>";
        }   
    } else {
        druk.innerHTML = "<p>Wpisz liczbę od 1 do 10.</p>";
    }
}