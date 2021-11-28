var index = 0;
var bigImage = document.querySelector(".big-image");
var smallImage = document.getElementById("small-images_container").getElementsByTagName("img");
smallImage[0].classList.add("selected");

setInterval(function(){
    smallImage[index].classList.remove("selected")
    index++
    if(index == smallImage.length){
        index = 0;
    }
    bigImage.setAttribute("src", smallImage[index].getAttribute("src"));
    smallImage[index].classList.add("selected");

}, 1500)

