document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('killerContainer');

    killers.forEach(killer => {
        const killerDiv = document.createElement('div');
        killerDiv.className = 'killer-box';
        killerDiv.id = killer.name.replace(/\s+/g, ''); // Add an ID for navigation, remove spaces

        killerDiv.innerHTML = `
            <h2 class="killer-name">${killer.name}</h2>
            <div class="killer-details">
                <p><strong>Ability:</strong> ${killer.ability}</p>
                <p><strong>Strength:</strong> ${killer.strength}</p>
                <p><strong>Weakness:</strong> ${killer.weakness}</p>
            </div>
        `;

        container.appendChild(killerDiv);
    });
});
