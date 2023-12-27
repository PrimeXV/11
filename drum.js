const kits = ["crash", "kick", "snare", "tom"];

const drumContainerE1 = document.querySelector(".drum-container");

kits.forEach((kit) => {
  const btnE1 = document.createElement("button");
  btnE1.classList.add("button");
  btnE1.innerText = kit;
  btnE1.style.backgroundImage = "url(images/" + kit + ".png)";
  drumContainerE1.appendChild(btnE1);

  const audioE1 = document.createElement("audio");
  audioE1.src = "sounds/" + kit + ".mp3";
  drumContainerE1.appendChild(audioE1);
  btnE1.addEventListener("click", () => {
    audioE1.play();
  });

  window.addEventListener("keypress", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioE1.play();
      btnE1.style.transform = "scale(0.9)";
      setTimeout(()=> {
       btnE1.style.transform = "scale(1)";
      }, 100);
    }
  });
});

