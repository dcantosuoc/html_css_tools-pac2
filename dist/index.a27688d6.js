!function(){function e(e){let t,n;let l=document.getElementById("slider"),i=l.getElementsByTagName("li");for(var r=0;r<i.length;r++)if(1==i[r].style.opacity){t=r;break}"prev"==e||"next"==e?n="prev"==e?0==t?i.length-1:t-1:t==i.length-1?0:t+1:e=t>(n=e)?"prev":"next";// Resalta els punts
let s=document.getElementsByClassName("listslider")[0].getElementsByTagName("a");s[t].classList.remove("item-select-slid"),s[n].classList.add("item-select-slid"),i[t].style.opacity=0,i[t].style.zIndex=0,i[n].style.opacity=1,i[n].style.zIndex=1}async function t(){setInterval(e,5e3,"next")}document.querySelector(".listslider")&&document.querySelectorAll(".listslider li a").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("itlist").split("_");return fntExecuteSlide(t[1]),!1})}),document.getElementById("next")&&document.getElementById("next").addEventListener("click",function(t){return t.preventDefault(),e("next"),!1}),document.getElementById("prev")&&document.getElementById("prev").addEventListener("click",function(t){return t.preventDefault(),e("prev"),!1}),document.querySelector("#container-slider")&&t()}();//# sourceMappingURL=index.a27688d6.js.map

//# sourceMappingURL=index.a27688d6.js.map
