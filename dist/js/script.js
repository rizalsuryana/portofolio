const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


/* Membuat sebuah eventlistener ketika hamburger di clik
maka akan diberikan kelas baru yang bernama 'is-active'
*/
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('is-active');

    // Ketika hamburger button di klik akan mebuat kelas baru
    // dengan nama menu-active
    menu.classList.toggle('menu-active');
});

// todo Menutup menu hamburger ketika di scroll
window.addEventListener('scroll', () => {
    hamburger.classList.remove('is-active');
    menu.classList.remove('menu-active');
});


// ! Loader

const Loader = document.querySelector('.loader');

//ketika loader aktif akan memberikan kelas baru kepada loader
function loaderActive() {
    Loader.classList.add('loader-active');
}

// memberikan kelas baru loader aktif untuk berjalan selama 3 detik
function loaderActiveTime() {
    setInterval(loaderActive, 3000);
}

// ketika web di load/refresh maka loader aktif time akan di aktifkan
window.onload = loaderActiveTime();