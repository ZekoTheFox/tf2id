let currentLoadout = {
    "Primary": 0,
    "Secondary": 0,
    "Melee": 0,
    "PDA": 0
};

function addItem(id) {
    const tmpId = parseInt(document.getElementById(`resultId${id}`).innerText);
    const tmpSlot = document.getElementById(`resultSlot${id}`).innerText.trim();

    switch (tmpSlot) {
        case "Primary":
            currentLoadout.Primary = tmpId;
            break;
        case "Secondary":
            currentLoadout.Secondary = tmpId;
            break;
        case "Melee":
            currentLoadout.Melee = tmpId;
            break;
        case "PDA":
            currentLoadout.PDA = tmpId;
            break;
        default:
            break;
    }

    refreshLoadout();
}

function clearItems() {
    currentLoadout = {
        "Primary": 0,
        "Secondary": 0,
        "Melee": 0,
        "PDA": 0
    };

    refreshLoadout();
}

function refreshLoadout() {
    document.getElementById('loadoutOutput').innerText = `${currentLoadout.Primary} ${currentLoadout.Secondary} ${currentLoadout.Melee}` + (currentLoadout.PDA !== 0 ? ` ${currentLoadout.PDA}` : '');
}

// Headless run
setTimeout(() => {
    refreshLoadout();
}, 300);