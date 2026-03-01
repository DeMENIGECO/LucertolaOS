let z = 1;

function openApp(src){
const win = document.createElement("div");
win.className = "window";
win.style.top = "100px";
win.style.left = "100px";
win.style.zIndex = z++;

win.innerHTML = `
<div class="titlebar">
<div class="circle red" onclick="this.closest('.window').remove()"></div>
<div class="circle yellow"></div>
<div class="circle green"></div>
</div>
<iframe src="${src}"></iframe>
`;

document.getElementById("desktop").appendChild(win);
drag(win);
}

function drag(el){
const bar = el.querySelector(".titlebar");
let x=0,y=0;

bar.onmousedown = e=>{
x=e.clientX;
y=e.clientY;

document.onmousemove = e=>{
el.style.top = el.offsetTop + (e.clientY-y) + "px";
el.style.left = el.offsetLeft + (e.clientX-x) + "px";
x=e.clientX;
y=e.clientY;
};

document.onmouseup = ()=> document.onmousemove=null;
};
}
