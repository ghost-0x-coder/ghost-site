let text="GHOST-OS v6 // ONLINE_";
let i=0;
function type(){if(i<text.length){document.getElementById("type").innerHTML+=text.charAt(i);i++;setTimeout(type,100)}}
type();
