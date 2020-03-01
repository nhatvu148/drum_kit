let numberOfDrums = document.querySelectorAll(".drum").length;

//let soundArray = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

let soundObj = {
  "w": "crash.mp3",
  "a": "kick-bass.mp3",
  "s": "snare.mp3",
  "d": "tom-1.mp3",
  "j": "tom-2.mp3",
  "k": "tom-3.mp3",
  "l":"tom-4.mp3"
};

for (let i = 0; i < numberOfDrums; i++) {
  let audio;
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
    let key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  audio = new Audio("sounds/" + soundObj[key]);
  audio.play();
}

function buttonAnimation(key) {
  let btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
  }, 100);
}
