const k = document.getElementById("header-title");
k.style.border = "thick solid black";

const p = document.querySelector("h2");
p.style.fontWeight = "bold";
p.style.color = "green";

const r = document.getElementsByClassName("list-group-item");
// r[2].style.backgroundColor = "green";
for(i=0;i<=3;i++){
    r[i].style.fontWeight = "bold";
}


const q = document.getElementsByTagName("li");
q[2].innerHTML = "newitem"

const a = document.querySelectorAll(".list-group-item")
a[1].style.backgroundColor = "green";
a[1].style.color = "green";
a[2].textContent = "";
for(i=1;i<=a.length;i=i+2){
    a[i].style.backgroundColor = "green"
}







