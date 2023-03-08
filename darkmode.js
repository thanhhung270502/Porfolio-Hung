const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleSwitch = $('.switch__darkmode');
const currentTheme = localStorage.getItem('theme');
const darkmode = $('.darkmode');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        darkmode.classList.remove('uil-moon')
        darkmode.classList.add('uil-sun')
    }
}

toggleSwitch.onclick = () => {
    if (darkmode.classList.contains('uil-moon')) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

        darkmode.classList.remove('uil-moon')
        darkmode.classList.add('uil-sun')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        darkmode.classList.remove('uil-sun')
        darkmode.classList.add('uil-moon')
    }
}