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
    features: ""
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