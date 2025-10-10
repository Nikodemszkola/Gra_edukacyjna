function slowka_definicje(e) {
    const ile = parseInt(document.getElementById("ile").value);
    const druk = document.getElementById("druk");
    const druk2 = document.getElementById("druk2");

    druk.innerHTML = "";
    druk2.innerHTML = "";
    if (e.key === "Enter"){
    if (!isNaN(ile) && ile >= 1 && ile <= 10) {
        for (let i = 1; i <= ile; i++) {
            
            druk.innerHTML += `<p>Słówko nr ${i}: <input type="text" name="${i}"></p>`;
            druk2.innerHTML += `<p>Definicja nr ${i}: <input type="text" name="${i+10}"></p>`;
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

    const pairs = [];

    for (let i = 1; i <= ile; i++) {
        const wordInput = document.querySelector(`input[name="${i}"]`);  
        const defInput = document.querySelector(`input[name="${i + 10}"]`);

        if (wordInput && defInput) {
            pairs.push({
                word: wordInput.value.trim(),
                definition: defInput.value.trim()
            });
        }
    }

    const allItems = [];

    pairs.forEach(pair => {
        allItems.push({ text: pair.word, type: "word", match: pair.definition });
        allItems.push({ text: pair.definition, type: "definition", match: pair.word });
    });

    
    allItems.sort(() => Math.random() - 0.5);

    let selected = null;

    allItems.forEach(item => {
        const el = document.createElement("div");
        el.classList.add("fiszka");
        el.textContent = item.text;
        el.dataset.type = item.type;
        el.dataset.match = item.match;

        el.onclick = function () {
            if (!selected) {
                selected = el;
                el.classList.add("selected");
            } else {
                
                if (selected.textContent === el.dataset.match) {
                    selected.style.opacity = "0";
                    el.style.opacity = "0";
                } else {
                    selected.style.backgroundColor = "red";
                    el.style.backgroundColor = "red";
                    selected.classList.add("error");
                    el.classList.add("error");

                    setTimeout(() => {
                        selected.classList.remove("error");
                         el.classList.remove("error");
                    }, 1000); 

                }

                selected.classList.remove("selected");
                selected = null;
            }
        };

        blok_prawy.appendChild(el);
    });
}

function logika(){
    for(let i =0;i <ile;i++){
    const fiszki = document.querySelectorAll(`input[name="${i}"]`);
    const definicja = document.querySelectorAll(`input[name="${i + 10}"]`);
    if(fiszki == definicja){
        fiszki.style.opacity = 0;
        definicja.style.opacity = 0;
    }
    else{
        fiszki.style.BackgroundColor = "red";
        definicja.style.BackgroundColor = "red";
    }


    }
}
