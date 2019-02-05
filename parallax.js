let earth = document.querySelector(`.blue-marble`),
    disco = document.querySelector(`.mirror-ball`);

window.onscroll = () => {
 moveBall();
} 

function moveBall() {
 let pos = this.scrollY;
 earth.style.transform = `translateY(${pos/10}%)`;
 disco.style.transform = `translateY(-${pos/2}%)`;
}