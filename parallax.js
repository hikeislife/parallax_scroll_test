let earth = document.querySelector(`.blue-marble`),
    disco = document.querySelector(`.mirror-ball`),
    galaxy = document.querySelector(`.milky-way`);



window.onscroll = () => {
 moveBall();
} 

function moveBall() {
 let pos = this.scrollY;
 earth.style.transform = `translateY(${pos/10}%)`;
 disco.style.transform = `translateY(-${pos/5}%)`;
 // galaxy.style.backgroundImage = `url(img/milky-way.png)`;
 // galaxy.style.height = `500px`;
 // galaxy.style.width = `100vw`;

 //console.log(pos)
};

