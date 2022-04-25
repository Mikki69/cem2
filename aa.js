 let foto = []
 var i=0;
 var n=1;
 var imgs=new Array('img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'
 ,'img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'
 ,'img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg'
 ,'img/16.jpg','img/17.jpg','img/18.jpg');
document.getElementById("klr").addEventListener('click', fotosplus);
document.getElementById("kl").addEventListener('click', fotosminus);
let num = document.querySelector("span");
var image = document.getElementById("image");
function fotosplus() {
    if(i == 17){
        return
    }
    n++;
    num.innerHTML = n+"/18";
    i++;
    i %= imgs.length;
    image.src = imgs[i];
}
function fotosminus() {
    if(i == 0){
        return
    }
    n--;
    num.innerHTML = n+"/18";
    i--;
    i %= imgs.length;
    image.src = imgs[i];
}