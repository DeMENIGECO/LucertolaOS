let zIndex = 1;

function createWindow(appSrc){
const win = document.createElement("div");
win.className="window";
win.style.top="120px";
win.style.left="120px";
win.style.zIndex = zIndex++;

win.innerHTML = `
<div class="titlebar">
<div class="circle red close"></div>
<div class="circle yellow"></div>
<div class="circle green"></div>
</div>
<iframe src="${appSrc}"></iframe>
`;

document.getElementById("desktop").appendChild(win);

win.querySelector(".close").onclick = ()=> win.remove();

dragWindow(win);
}

function dragWindow(win){
const bar = win.querySelector(".titlebar");
let x=0,y=0;

bar.onmousedown = e=>{
x=e.clientX;
y=e.clientY;

document.onmousemove = e=>{
win.style.top = win.offsetTop + (e.clientY-y)+"px";
win.style.left = win.offsetLeft + (e.clientX-x)+"px";
x=e.clientX;
y=e.clientY;
};

document.onmouseup = ()=> document.onmousemove=null;
};
}
