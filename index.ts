const marigoldBorderTop = document.getElementsByClassName("marigolds");
const sourceMarigolds = document.getElementsByClassName("src-marigold");

window.onresize = () => fillMarigolds();

function fillMarigolds() {
  for (let div of marigoldBorderTop) {
    const width = div.clientWidth;

    const numFlowers = width / 40;

    const currentLength = div.childNodes.length;

    const needed = numFlowers - currentLength;

    for (let i = 0; i < needed; i++) {
      let flower = document.createElement("img");
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
}

fillMarigolds();

const slides: any = document.getElementsByClassName("slide");
const captions: any = document.getElementsByClassName("caption-slide");

let index = 0;

setInterval(() => {
  (captions.item(index) as ElementCSSInlineStyle).style.opacity = "0";
  (slides.item(index) as ElementCSSInlineStyle).style.opacity = "0";
  index = (index + 1) % slides.length;
  (slides.item(index) as ElementCSSInlineStyle).style.opacity = "1";
  (captions.item(index) as ElementCSSInlineStyle).style.opacity = "1";
}, 5000);

Array.from(document.getElementsByClassName("retablo")).forEach((el) => {
  el.addEventListener("mouseover", () => {
    openRetabloById(el.id);
    // el.classList.add('active')
  });

  el.addEventListener("click", () => {
    openRetabloById(el.id);
  });

  el.addEventListener("mouseout", () => {
    openRetabloById(null);
    // el.classList.remove('active')
  });
});

Array.from(document.getElementsByClassName("retablo-link")).forEach((el) => {
  el.addEventListener("click", () => {
    openRetabloById(
      (el as HTMLAnchorElement).href.split("/").slice(-1).pop().replace("#", "")
    );
  });
});

function openRetabloById(id: string) {
  Array.from(document.getElementsByClassName("flexi")).forEach((el) => {
    el.classList.remove("active");
  });

  document.getElementById(id)?.classList.add("active");
  return true;
}
