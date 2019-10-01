// Your code goes here
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const links = document.querySelector('nav')

window.addEventListener("keydown", () => {
    alert("You have pressed a key");
});

window.addEventListener("scroll", () => {
    links.style.backgroundColor = 'yellow';
});

h1.addEventListener("mouseover", () => {
    h1.style.color = 'red';
});

h1.addEventListener("dblclick", () => {
    h1.style.border = '1px black dashed';
});

window.addEventListener("resize", () => {
    alert("You have resized the page");
});

window.addEventListener("drag", () => {
    h1.style.color = 'blue';
});

window.addEventListener("dragend", () => {
    alert("You have dropped the element");
});

window.addEventListener("wheel", () => {
    h1.style.color = 'cyan';
});

window.addEventListener("mousedown", () => {
    img.style.display = 'none';
});

window.addEventListener("mouseup", () => {
    img.style.display = 'inline-block';
});
