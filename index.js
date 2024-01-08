const darkmodeToggleElement = document.getElementById('darkmode-toggle');

function toggleDarkmode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

darkmodeToggleElement.addEventListener('change', toggleDarkmode);