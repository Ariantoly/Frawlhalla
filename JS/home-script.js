const prev = $('#prevBtn');
const next = $('#nextBtn');
const imageContainer = $('.images');
const images = $('.images div');

let currentImageIndex = 0;
let currentPosition = 0;

function main(){
    setPrevHandler();
    setNextHandler();
}

function setPrevHandler(){
    prev.on('click', () => {
        currentImageIndex--;
        if(currentImageIndex < 0){
            currentImageIndex = images.length - 1;
            currentPosition = -document.getElementById("container-pict").clientWidth * currentImageIndex;
        }
        else{
            currentPosition += document.getElementById("container-pict").clientWidth
        }

        updateImageSlider();
    });
}

function setNextHandler(){
    next.on('click', () => {
        currentImageIndex++;
        if(currentImageIndex >= images.length){
            currentImageIndex = 0;
            currentPosition = 0;
        }
        else{
            currentPosition -= document.getElementById("container-pict").clientWidth
        }

        updateImageSlider();
    });
}

function updateImageSlider(){
    const prevElem = images.eq(0)
    prevElem.animate({ marginLeft: currentPosition })
}

setInterval(function(){ 
    $("#nextBtn").click();
 },7000);

main();