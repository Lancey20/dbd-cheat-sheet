const killers = [
    {
        "name": "Trapper",
        "TLDR": "WATCH THE GROUND! Look for bear traps, especially in loops or on the other side of vaults. If Trapper is putting a trap in a loop, run to a different loop. The less you let him set up, either by forcing chases or a full generator rush, the better. ",
        "strength": "Trapper excels at controlling the map. A good trapper will only let you loop them in the area they want. However, Trapper is a very weak killer overall. ",
        "weakness": "High setup time.",
        "image": "images/trapper.png"
    },
    {
        "name": "Wraith",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/wraith.png"
    },
    {
        "name": "Hillbilly",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/hillbilly.png"
    },
    {
        "name": "Nurse",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/nurse.png"
    },
    {
        "name": "Shape",
        "alias": "Michael Myers",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/shape.png"
    },
    {
        "name": "Hag",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/hag.png"
    },
    {
        "name": "Doctor",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/doctor.png"
    },
    {
        "name": "Huntress",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/huntress.png"
    },
    {
        "name": "Cannibal",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/cannibal.png"
    },
    {
        "name": "Nightmare",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/nightmare.png"
    },
    {
        "name": "Pig",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/pig.png"
    },
    {
        "name": "Clown",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/clown.png"
    },
    {
        "name": "Spirit",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/spirit.png"
    },
    {
        "name": "Legion",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/legion.png"
    },
    {
        "name": "Plague",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/plague.png"
    },
    {
        "name": "Ghost Face",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/ghostface.png"
    },
    {
        "name": "Demogorgon",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/demogorgon.png"
    },
    {
        "name": "Oni",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/oni.png"
    },
    {
        "name": "Deathslinger",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/deathslinger.png"
    },
    {
        "name": "Executioner",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/executioner.png"
    },
    {
        "name": "Blight",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/blight.png"
    },
    {
        "name": "Twins",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/twins.png"
    },
    {
        "name": "Trickster",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/trickster.png"
    },
    {
        "name": "Nemesis",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/nemesis.png"
    },
    {
        "name": "Cenobite",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/cenobite.png"
    },
    {
        "name": "Artist",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/artist.png"
    },
    {
        "name": "Onryo",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/onryo.png"
    },
    {
        "name": "Dredge",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/dredge.png"
    },
    {
        "name": "Mastermind",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/mastermind.png"
    },
    {
        "name": "Knight",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/knight.png"
    },
    {
        "name": "Skull Merchant",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/skullmerchant.png"
    },
    {
        "name": "Singularity",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/singularity.png"
    },
    {
        "name": "Xenomorph",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/xenomorph.png"
    },
    {
        "name": "Good Guy",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/goodguy.png"
    },
    {
        "name": "Unknown",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/unknown.png"
    },
    {
        "name": "Vecna",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "images/vecna.png"
    }
];
