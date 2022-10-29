let counter = document.getElementsByClassName(main-container)
let count= 1;
setInterval(()=>
{
counter.innerText = count;
count++

if(count >5) location.replace('/index.html');


},1000)
