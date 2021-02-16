const marigoldBorderTop = document.getElementsByClassName("marigolds");
const sourceMarigolds = document.getElementsByClassName("src-marigold");

for (let div of marigoldBorderTop) {
  const width = div.clientWidth;

  const numFlowers = width / 40;
  for (let i = 0; i < numFlowers; i++) {
    let flower = document.createElement("img");
    sourceMarigolds.item(Math.floor(Math.random() * sourceMarigolds.length));
    flower.src = sourceMarigolds
      .item(Math.floor(Math.random() * sourceMarigolds.length))
      .getAttribute("src");
    flower.style.transform = `translateY(${
      (Math.random() - 0.5) * 10
    }px) rotate(${Math.random() * 360}deg) scale(${
      Math.random() * 0.25 + 0.875
    })`;

    div.appendChild(flower);
  }
}
