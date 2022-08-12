document.querySelector("nav").style.display="none";
icon=document.querySelector("#menu");
icon.onclick= function(){
    nav=document.querySelector("nav");
    if(nav.style.display=="none")
        nav.style.display="block";

    else 
        nav.style.display="none";
        
    }

x = document.querySelector("#x");
x.onclick=function(){
    nav=document.querySelector("nav");
    nav.style.display="none";
}