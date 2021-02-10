const searchInput = document.getElementById('searchInputTextbox')
const divItems = document.getElementById('divItems')
let loadedIds = null;

(async function() {
    loadedIds = await fetch('assets/ids.json').then((response) => { return response.json() }).catch((err) => console.error(err));
})();

function searchIds() {
    if (searchInput.value.length < 1)
        return divItems.innerHTML = "";

    let outputItems = [];

    for (let c = 0; c < loadedIds.length; c++) {
        let currentClass = loadedIds[c][0];

        for (let w = 0; w < loadedIds[c][1].length; w++) {
            let currentWeapon = loadedIds[c][1][w];

            if (currentWeapon.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
                outputItems.push({
                    class_name: currentClass,
                    id: currentWeapon.id,
                    name: currentWeapon.name,
                    slot_type: currentWeapon.slot_type
                });
            }
        }
    }

    processIdsToHTML(outputItems);
}

function processIdsToHTML(input) {
    let outputHTML = "";

    for (let i = 0; i < input.length; i++) {

        let preHTML = `
    <div class="animate__animated animate__zoomIn search-result">
        ID:
        <span class="search-result-key">
            ${input[i].id}
        </span>
        | Name:
        <span class="search-result-key">
            ${input[i].name}
        </span>
        | Slot Type:
        <span class="search-result-key">
            ${input[i].slot_type}
        </span>
        | From:
        <span class="search-result-key">
            ${input[i].class_name}
        </span>
    </div>\n`;

        outputHTML += preHTML;
    }

    divItems.innerHTML = outputHTML;
}