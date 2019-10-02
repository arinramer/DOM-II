// Your code goes here
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const links = document.querySelector('nav')
const a = document.querySelector('.nav-link');
const div = document.querySelector('div');

a.addEventListener("click", (event) => {
    event.preventDefault();
})

window.addEventListener("keydown", () => {
    alert("You have pressed a key");
});

window.addEventListener("scroll", () => {
    links.style.backgroundColor = 'yellow';
});

window.addEventListener("wheel", () => {
    h1.style.color = 'cyan';
});

div.addEventListener("mouseover", () => {
    div.style.color = 'red';
});

links.addEventListener("click", () => {
    a.style.border = 'red 1px dashed';
});

a.addEventListener("click", (event) => {
    a.style.border = 'gray 1px dashed';
    event.stopPropagation();
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

window.addEventListener("mousedown", () => {
    img.style.display = 'none';
});

window.addEventListener("mouseup", () => {
    img.style.display = 'inline-block';
});
