function toggleMenu() {
    const menu = document.querySelector('.menu > ul');
    menu.classList.toggle('active');
}

document.querySelector('.theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});