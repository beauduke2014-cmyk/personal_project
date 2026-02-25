const character = {
    name: "",
    class: "",
    level: "",
    background: "",
    race: "",
    alignment: "",
    exp: 0,
    armor_class: 0,
    current_hp: 0,
    temp_hp: 0,
    max_hp: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    widsom: 0,
    charisma: 0,
    proficiencies: "",
    personality: "",
    ideals: "",
    bonds: "",
    flaws: "",
    backstory: "",
    items: "",
    copper: 0,
    silver: 0,
    electrum: 0,
    gold: 0,
    platinum: 0,
    features: "",
    spells: {
        cantrips: [],
        level_one: [],
        level_two: [],
        level_three: [],
        level_four: [],
        level_five: [],
        level_six: [],
        level_seven: [],
        level_eight: [],
        level_nine: []
    }
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("editable")) {
        makeEditable(e.target);
    }
});

function makeEditable(span) {
    const field = span.dataset.field;
    const currentValue = span.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentValue === "------" ? "": currentValue;

    span.replaceWith(input);
    input.focus();

    function save() {
        const newValue = input.value.trim() || "------";
        
        character[field] = newValue;

        span.textContent = newValue;
        input.replaceWith(span);
    }

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            save();
        }
    })
}

function setupSpellInput(inputId, listId, spellArrayKey) {
    
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && this.value.trim() != "") {

            const newSpell = this.value.trim();

            character.spells[spellArrayKey].push(newSpell);

            this.value = "";

            renderSpellList(list, character.spells[spellArrayKey]);
        }
    });
}

function renderSpellList(listElement, spellArray) {

    listElement.innerHTML = ""

    spellArray.forEach((spell, index) => {

        const li = document.createElement('li');
        li.textContent = spell;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            spellArray.splice(index, 1);
            renderSpellList(listElement, spellArray);
        });
    
    li.appendChild(deleteBtn);
    listElement.appendChild(li);
    });
}

setupSpellInput("add_cantrip", "cantrip_spells", "cantrips");
setupSpellInput("add_level_one", "level_one_spells", "level_one");
setupSpellInput("add_level_two", "level_two_spells", "level_two");
setupSpellInput("add_level_three", "level_three_spells", "level_three");
setupSpellInput("add_level_four", "level_four_spells", "level_four");
setupSpellInput("add_level_five", "level_five_spells", "level_five");
setupSpellInput("add_level_six", "level_six_spells", "level_six");
setupSpellInput("add_level_seven", "level_seven_spells", "level_seven");
setupSpellInput("add_level_eight", "level_eight_spells", "level_eight");
setupSpellInput("add_level_nine", "level_nine_spells", "level_nine");