document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('killerContainer');

    killers.forEach(killer => {
        const killerDiv = document.createElement('div');
        killerDiv.className = 'killer';
        
        killerDiv.innerHTML = `
            <h2>${killer.name}</h2>
            <p><strong>Ability:</strong> ${killer.ability}</p>
            <p><strong>Strength:</strong> ${killer.strength}</p>
            <p><strong>Weakness:</strong> ${killer.weakness}</p>
        `;
        
        container.appendChild(killerDiv);
    });
});
