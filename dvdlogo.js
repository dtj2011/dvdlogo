    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    var width = canvas.width;
    var height = canvas.height;
    var x = (Math.random() * 200) + 100;
    var y = (Math.random() * 200) + 100;
    var xwidth = 200;
    var ywidth = 97;
    var xspeed = 1;
    var yspeed = 1;
    var img = new Image();
    var prevImgSrc = 0;
    var imgStr = ["F:\\webproject\\imgfiles\\dvdproject\\dvdlblue.png",
     "F:\\webproject\\imgfiles\\dvdproject\\dvdblue.png",
 "F:\\webproject\\imgfiles\\dvdproject\\dvdbrown.png",
 "F:\\webproject\\imgfiles\\dvdproject\\dvdgold.png",
 "F:\\webproject\\imgfiles\\dvdproject\\dvdgreen.png",
  "F:\\webproject\\imgfiles\\dvdproject\\dvdred.png",
 "F:\\webproject\\imgfiles\\dvdproject\\dvdviolet.png"];
 var imgStrlen = imgStr.length;
    img.src = imgStr[0];
       context.drawImage(img,x,y);
    setInterval(draw,15);

    
   

function draw()
{
    context.clearRect(x - Math.abs(xspeed),y - Math.abs(yspeed),xwidth + 12,ywidth + 12); //cure for mkc anti-aliasing
    if(x + xwidth >= canvas.width)
    {
        img.src = imgStr[imgSelector()];
        xspeed = -xspeed;
    }
    if(y + ywidth >= canvas.height)
    {
        img.src = imgStr[imgSelector()];

        yspeed = -yspeed;
    }
    if(x <= 0)
    {
        img.src = imgStr[imgSelector()];

        xspeed = -xspeed;
    }
    if(y <= 0)
    {
       img.src = imgStr[imgSelector()];

        yspeed = -yspeed;
    }

    x += xspeed;
    y += yspeed;
    context.drawImage(img,x,y);
   
}
function imgSelector()
{
 
 let imgSrc = Math.floor(Math.random() * imgStrlen);
 if(prevImgSrc == imgSrc)
 {
     if(imgSrc == 7)
     imgSrc--;
     if(imgSrc == 0)
     imgSrc++
 }
 prevImgSrc = imgSrc;
 return imgSrc;
}