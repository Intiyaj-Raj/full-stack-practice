// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 100);
});

function handleIntroSection() {
    window.location.href = "intro.html";
}