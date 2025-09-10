const cardImage = [ "src/Image/card/1.png", "src/Image/card/2.png", "src/Image/card/3.png", "src/Image/card/4.png", "src/Image/card/5.png", "src/Image/card/6.png", "src/Image/card/7.png", "src/Image/card/8.png", "src/Image/card/9.png", "src/Image/card/10.png", "src/Image/card/11.png", "src/Image/card/12.png", "src/Image/card/13.png", "src/Image/card/14.png", "src/Image/card/15.png", "src/Image/card/16.png", "src/Image/card/17.png", "src/Image/card/18.png", "src/Image/card/19.png", "src/Image/card/20.png", "src/Image/card/21.png", "src/Image/card/22.png", "src/Image/card/23.png", "src/Image/card/24.png", "src/Image/card/25.png", "src/Image/card/26.png", "src/Image/card/27.png"];

const cardDiv = document.querySelector("#card-image");

cardImage.map(src => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "Recipe image";
    cardDiv.appendChild(image);
});