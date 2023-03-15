const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleSwitch = $('.switch__darkmode');
const currentTheme = localStorage.getItem('theme');
const darkmode = $('.darkmode');
const body = $('body');

const mobile__toggle = $('.navbar-toggler');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        darkmode.classList.remove('uil-moon')
        darkmode.classList.add('uil-sun')
        darkmode.style.color = 'var(--yellow)';
    }
    else {
        darkmode.style.color = 'var(--blue-dark)';
    }
}

toggleSwitch.onclick = () => {
    if (darkmode.classList.contains('uil-sun')) {
        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

        darkmode.classList.remove('uil-sun')
        darkmode.classList.add('uil-moon')
        darkmode.style.color = 'var(--blue-dark)';

        mobile__toggle.style.backgroundColor = 'unset';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        darkmode.classList.remove('uil-moon')
        darkmode.classList.add('uil-sun')
        darkmode.style.color = 'var(--yellow)';
        
        mobile__toggle.style.backgroundColor = 'var(--yellow)';
    }
}