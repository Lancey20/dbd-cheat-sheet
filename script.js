document.addEventListener('DOMContentLoaded', function() {
    const killerContainer = document.getElementById('killerContainer');

    killers.forEach(killer => {
        const killerDiv = document.createElement('div');
        killerDiv.className = 'killer-box';
        killerDiv.id = killer.name.replace(/\s+/g, ''); // Add an ID for navigation, remove spaces

        killerDiv.innerHTML = `
            <div class="killer-left">
                <h2 class="killer-name">${killer.name}</h2>
                <img src="${killer.image}" alt="${killer.name}" class="killer-image">
            </div>
            <div class="killer-right">
                <div class="killer-details">
                    <p><strong>TLDR:</strong> ${killer.TLDR}</p>
                    <p><strong>Abilities:</strong> ${killer.abilities}</p>
                    <p><strong>Playstyle:</strong> ${killer.playstyle}</p>
                    <p><strong>Alias:</strong> ${killer.alias}</p>
                </div>
            </div>
        `;

        killerContainer.appendChild(killerDiv);
    });
});

function searchKillers() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let killerBoxes = document.getElementsByClassName('killer-box');

    for (let i = 0; i < killerBoxes.length; i++) {
        let killerName = killerBoxes[i].getElementsByClassName('killer-name')[0].innerText.toLowerCase();
        let killerAlias = killerBoxes[i].getElementsByClassName('killer-details')[0].querySelector('p:last-of-type').innerText.toLowerCase();
        if (killerName.includes(input) || killerAlias.includes(input)) {
            killerBoxes[i].style.display = "";
        } else {
            killerBoxes[i].style.display = "none";
        }
    }
}
