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

    // Shuffle the items
    allItems.sort(() => Math.random() - 0.5);

    let selected = null; // Main selected variable

    allItems.forEach(item => {
        const el = document.createElement("div");
        el.classList.add("fiszka");
        el.textContent = item.text;
        el.dataset.type = item.type;
        el.dataset.match = item.match;

        el.onclick = function () { // Assign the click event directly
            if (!selected) {
                // First selection
                selected = el;
                el.classList.add("selected");
            } else {
                // Second selection
                if (selected.textContent === el.dataset.match) {
                    // If there's a correct match
                    const matchedSelected = selected; 
                    const matchedEl = el; 
                    
                    matchedSelected.style.backgroundColor = "green";
                    matchedEl.style.backgroundColor = "green";

                    // Use setTimeout to fade out after 1 second
                    setTimeout(() => {
                        // Check if references are still valid before accessing style
                        if (matchedSelected && matchedSelected.style !== undefined) {
                            matchedSelected.style.opacity = "0";
                        }
                        if (matchedEl && matchedEl.style !== undefined) {
                            matchedEl.style.opacity = "0";
                        }

                        // Check for remaining items
                        const remainingItems = document.querySelectorAll('.fiszka:not([style*="opacity: 0"])');
                        if (remainingItems.length === 0) {
                            stopTimer(); 
                        }
                    }, 1000); // 1 second delay
                } else {
                    // If there's an incorrect match
                    const wrongSelected = selected; // Store the reference for the incorrect item
                    const wrongEl = el; // Store the reference for the incorrect item

                    wrongSelected.style.backgroundColor = "red";
                    wrongEl.style.backgroundColor = "red";

                    setTimeout(() => {
                        // Reset both selected elements immediately
                        if (wrongSelected) {
                            wrongSelected.style.backgroundColor = "";
                            wrongSelected.classList.remove("selected"); // Remove selection
                        }
                        if (wrongEl) {
                            wrongEl.style.backgroundColor = "";
                        }
                        
                    }, 500); // 0.5 second delay
                }

                // Reset the selected variable
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
let sekundy = 0;
let timerInterval = null;

function start() {
  start_game(); 
  startTimer(); 
}

function startTimer() {
  if (timerInterval === null) {
    timerInterval = setInterval(() => {
      sekundy++;
      document.getElementById("czas").textContent = sekundy;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}
