function setActiveLink(type) {
    const toolLinks = document.querySelectorAll('.tool-type');
    var activeLink = document.querySelector('.Navigation-Link a[id=' + type + ']');
    toolLinks.forEach(l => l.classList.remove('clicked-link'));
    if (activeLink) {
        activeLink.parentElement.classList.add('clicked-link');
    }
}