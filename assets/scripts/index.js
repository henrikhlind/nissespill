const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const santaImage = new Image();
santaImage.src = '../img/nisse-.png';

let santaHeight = window.innerHeight / 3;
let santaWidth = window.innerWidth / 5;
let santaX = window.innerWidth / 2.5;
let santaY = window.innerHeight - santaHeight;
let santaSpeed = 200;
let flipped = false;


function drawSanta() {
  ctx.drawImage(santaImage, santaX, santaY, santaWidth, santaHeight);
}

function moveSanta(event) {
  if (event.key === 'ArrowRight') {
    santaX += santaSpeed;
    if(!flipped) {
        santaImage.src = '../img/nisse-flipped.png';
        flipped = true;
    }
  } else if (event.key === 'ArrowLeft') {
    santaX -= santaSpeed;
    if(flipped) {
        santaImage.src = '../img/nisse-.png';
        flipped = false;
    }
  }
}

document.addEventListener('keydown', moveSanta);

function updateGame() {
  // Update game state, such as checking for collisions or moving non-player objects
  // ...

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Santa
  drawSanta();

  // Request next frame
  requestAnimationFrame(updateGame);
}

updateGame();

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}