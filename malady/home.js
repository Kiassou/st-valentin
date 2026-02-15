document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName") || "mon amour";
    const welcomeText = document.getElementById("welcomeText");
    
    if (welcomeText) {
        welcomeText.innerText = `Bienvenue dans notre petit jardin secret, ${userName}. Chaque photo est un morceau de nous... ❤️`;
    }
});

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.classList.remove("active");
    }, 300);
}

function logout() {
    localStorage.removeItem("isLoggedIn"); // On retire le droit d'accès
    localStorage.removeItem("userName");
    window.location.replace("login.html"); // Retour au login
}
// On ajoute la gestion de la musique à ta fonction existante
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");
const musicIcon = document.getElementById("musicIcon");

// Fonction pour démarrer/arrêter
musicBtn.addEventListener("click", () => {
    toggleMusic();
});

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add("playing");
        musicIcon.innerText = "⏸️";
    } else {
        bgMusic.pause();
        musicBtn.classList.remove("playing");
        musicIcon.innerText = "🎵";
    }
}

// MISE À JOUR de ta fonction closeModal existante :
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.opacity = "0";
    
    // On essaie de lancer la musique dès qu'elle clique sur le bouton du modal
    bgMusic.play().then(() => {
        musicBtn.classList.add("playing");
        musicIcon.innerText = "⏸️";
    }).catch(error => {
        console.log("Lecture auto bloquée par le navigateur, elle devra cliquer sur le bouton 🎵");
    });

    setTimeout(() => {
        modal.classList.remove("active");
    }, 300);
}
