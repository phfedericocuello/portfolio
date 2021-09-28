const button = document.querySelector('.btn-Updater')
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.7; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

const portContainer = document.getElementById('portfolio-carrusel');
const portWidth = portContainer.scrollWidth;

window.addEventListener('load', () => {
    self.setInterval(() => {
        if (portContainer.scrollLeft !== portWidth && isDown == false) {
            portContainer.scrollTo(portContainer.scrollLeft + 1, 0);
        }
    }, 50);
});


var boton = 1;
button.addEventListener('click', () => {
    if (boton == 1) {
        button.innerHTML = 'Ver Menos Servicios';
        boton -= 1;
    } else if (boton == 0) {
        button.innerHTML = 'Ver Mas Servicios';
        boton += 1;
    }
});