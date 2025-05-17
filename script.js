document.addEventListener('DOMContentLoaded', () => {
    // Year in the footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Animated Energy Orbs
    const orbs = document.querySelectorAll('.energy-orb');
    const progressStatusText = document.getElementById('progressStatusText');

    if (orbs.length > 0 && progressStatusText) {
        const orbsToActivate = Math.floor(Math.random() * 2) + 1; // Activate 1 or 2 orbs (NB: Change it in the future)

        const statusMessages = [
            "Whispers in the void...",
            "Stirring from slumber...",
            "Gathering ancient magic...",
            "The dream takes form...",
            "Awaiting the signal..."
        ];
        progressStatusText.textContent = statusMessages[Math.floor(Math.random() * statusMessages.length)];

        orbs.forEach((orb, index) => {
            // Stagger the activation
            setTimeout(() => {
                if (index < orbsToActivate) {
                    orb.classList.add('active');
                }
            }, 500 + index * 300);
        });
    }

    // Fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    let delay = 100;
    fadeElements.forEach((el) => {
        if (el.closest('.incubation-chamber') && el !== document.querySelector('.incubation-chamber')) {
            // These will fade with their parent .incubation-chamber
        } else {
            setTimeout(() => {
                el.classList.add('visible');
            }, delay);
            delay += 150;
        }
    });
    // Manually trigger fade for progressStatusText after orbs start animating
    if (progressStatusText) {
        setTimeout(() => {
            progressStatusText.classList.add('visible');
        }, 500 + orbs.length * 300 + 200);
    }


    // Easter egg: Console message
    console.log(
        "%c🐉 DreamingDragons.net 🐉%c\n\nShhh... the ancient ones are stirring.\nWhat wonders will they unveil?\n\n%cKeep watching this space. Join us on Discord!%c",
        "font-family: 'Orbitron', sans-serif; font-size: 24px; color: #9b59b6; text-shadow: 0 0 5px #6a0dad;",
        "font-family: 'Montserrat', sans-serif; font-size: 14px; color: #e0e0e0;",
        "font-family: 'Montserrat', sans-serif; font-size: 12px; color: #aaa;",
        ""
    );
});