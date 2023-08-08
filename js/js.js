//Sette opp canvas

const canvas = document.getElementById("canvasarea");
canvas.width = 900;
canvas.height = 580;
const ctx = canvas.getContext("2d");

//introskjerm
const introScreen = new Image();
introScreen.src = "images/intro.png";

window.onload = function intro() {
	ctx.drawImage(introScreen, 0, 0);
	meow.play();
};
document.getElementById("reloadBtn").style.visibility = "hidden";

let gameOver = false;
let gameWin = false;
let countdown = 30;
let points = 0;
let annoyance = 0;

//tilstand
let canBeCute = true;

//Laste inn katt
const cat = {};
let catLoaded = false;

//laste inn objekter
let enemy1 = {};
let lamp = {};
let bigTable = {};
let sofa = {};
let bunny = {};
let redTable = {};
let chair1 = {};
let chair2 = {};
let armchair = {};
let bookshelf = {};
let dresser = {};
let plant = {};
let tree = {};
let bed = {};
let nightstand = {};
let tank = {};

let enemy1Loaded = false;
let lampLoaded = false;
let bigTableLoaded = false;
let sofaLoaded = false;
let bunnyLoaded = false;
let redTableLoaded = false;
let chair1Loaded = false;
let chair2Loaded = false;
let armchairLoaded = false;
let bookshelfLoaded = false;
let dresserLoaded = false;
let plantLoaded = false;
let treeLoaded = false;
let bedLoaded = false;
let nightstandLoaded = false;
let tankLoaded = false;

//tegne game over
var gameOverImage = new Image();
gameOverImage.src = "images/gameover.png";
// https://www.pinterest.co.uk/pin/630222541586367483/

let gameWinImage = new Image();
gameWinImage.src = "images/win.png";

//tegne katt
const playerImage = new Image();
playerImage.onload = () => {
	catLoaded = true;
};
//katter: https://www.spriters-resource.com/fullview/124812/
playerImage.src = "images/cat.png";

//lyder
const crash1 = new Audio();
crash1.src = "audio/crash.mp3";
const thud = new Audio();
thud.src = "audio/thud.mp3";
const rip = new Audio();
rip.src = "audio/rip.mp3";
const meow = new Audio();
meow.src = "audio/meow.mp3";
const door = new Audio();
door.src = "audio/door.mp3";
const stuff = new Audio();
stuff.src = "audio/stuff.mp3";
const crash2 = new Audio();
crash2.src = "audio/crash2.mp3";
/********************************************** */
//tegne objekter
const enemy1Image = new Image();
enemy1Image.src = "images/table-upright.png";
//tilstand
let enemy1active = true;

const lampImage = new Image();
lampImage.src = "images/lamp1.png";
let lampActive = true;

const bigTableImage = new Image();
bigTableImage.src = "images/bigtable1.png";
let bigTableActive = true;

const sofaImage = new Image();
sofaImage.src = "images/sofa1.png";
let sofaActive = true;

const bunnyImage = new Image();
bunnyImage.src = "images/bunny1.png";
let bunnyActive = true;

const redTableImage = new Image();
redTableImage.src = "images/redtable1.png";
let redTableActive = true;

const chair1Image = new Image();
chair1Image.src = "images/chair1.png";
let chair1Active = true;

const chair2Image = new Image();
chair2Image.src = "images/chair21.png";
let chair2Active = true;

const armchairImage = new Image();
armchairImage.src = "images/armchair1.png";
let armchairActive = true;

const bookshelfImage = new Image();
bookshelfImage.src = "images/bookshelf1.png";
let bookshelfActive = true;

const dresserImage = new Image();
dresserImage.src = "images/dresser1.png";
let dresserActive = true;

const plantImage = new Image();
plantImage.src = "images/plant1.png";
let plantActive = true;

const treeImage = new Image();
treeImage.src = "images/tree1.png";
let treeActive = true;

const bedImage = new Image();
bedImage.src = "images/bed1.png";
let bedActive = true;

const nightstandImage = new Image();
nightstandImage.src = "images/nightstand1.png";
let nightstandActive = true;

const tankImage = new Image();
tankImage.src = "images/tank1.png";
let tankActive = true;
/************************************* */

//plassere katt
function drawCat() {
	cat.x = canvas.width / 2;
	cat.y = 15;
}
//plassere objekter
function drawObjects() {
	enemy1.x = 460;
	enemy1.y = 300;

	lamp.x = 300;
	lamp.y = 300;

	bigTable.x = 740;
	bigTable.y = 250;

	sofa.x = canvas.width / 2 - 100;
	sofa.y = canvas.height - 64;

	bunny.x = 510;
	bunny.y = canvas.height - 128;

	redTable.x = 260;
	redTable.y = canvas.height - 128;

	chair1.x = 730;
	chair1.y = 125;

	chair2.x = 740;
	chair2.y = 330;

	armchair.x = 370;
	armchair.y = 300;

	bookshelf.x = 190;
	bookshelf.y = 0;

	dresser.x = 80;
	dresser.y = 10;

	plant.x = 700;
	plant.y = 50;

	tree.x = 80;
	tree.y = 450;

	bed.x = 70;
	bed.y = 200;

	nightstand.x = 70;
	nightstand.y = 300;

	tank.x = 580;
	tank.y = 0;
}

//bevegelse
document.addEventListener("keydown", buttonPressed);
document.addEventListener("keyup", buttonReleased);

let left = false;
let right = false;
let up = false;
let down = false;

function buttonPressed(event) {
	if (event.key === "a") {
		left = true;
		playerImage.src = "images/catl.png";
	}
	if (event.key === "d") {
		right = true;
		playerImage.src = "images/catr.png";
	}
	if (event.key === "w") {
		up = true;
		playerImage.src = "images/catu.png";
	}

	if (event.key === "s") {
		down = true;
		playerImage.src = "images/catf.png";
	}
	if (event.key === "q" && annoyance >= 10 && canBeCute === true) {
		meow.play();
		playerImage.src = "images/catq.png";
		annoyance -= 5;
		canBeCute = false;
	}
	console.log(annoyance);
}
function buttonReleased(event) {
	if (event.key === "a") {
		left = false;
	}
	if (event.key === "d") {
		right = false;
	}
	if (event.key === "w") {
		up = false;
	}
	if (event.key === "s") {
		down = false;
	}
}
//bevegelse
function playerMovement() {
	left ? (cat.x -= 3) : null;
	right ? (cat.x += 3) : null;
	up ? (cat.y -= 3) : null;
	down ? (cat.y += 3) : null;

	//FIENDER
	if (
		//bord m blomst
		enemy1active === true &&
		cat.x <= enemy1.x + 128 / 2 &&
		cat.y <= enemy1.y + 128 / 2 &&
		enemy1.x <= cat.x + 64 / 2 &&
		enemy1.y <= cat.y + 64 / 2
	) {
		crash1.play();
		points += 1;
		annoyance += 10;
		enemy1Image.src = "images/table-fallen.png";
		enemy1active = false;
		canBeCute = true;
	}
	if (
		//lampe
		lampActive === true &&
		cat.x <= lamp.x + 128 / 2 &&
		cat.y <= lamp.y + 128 / 2 &&
		lamp.x <= cat.x + 64 / 2 &&
		lamp.y <= cat.y + 64 / 2
	) {
		thud.play();
		points += 1;
		annoyance += 10;
		lampImage.src = "images/lamp2.png";
		lampActive = false;
		canBeCute = true;
	}
	if (
		//bigTable
		bigTableActive === true &&
		cat.x <= bigTable.x + 128 / 2 &&
		cat.y <= bigTable.y + 128 / 2 &&
		bigTable.x <= cat.x + 64 / 2 &&
		bigTable.y <= cat.y + 64 / 2
	) {
		rip.play();
		points += 1;
		annoyance += 10;
		bigTableImage.src = "images/bigtable2.png";
		bigTableActive = false;
		canBeCute = true;
	}
	if (
		//sofa
		sofaActive === true &&
		cat.x <= sofa.x + 128 / 2 &&
		cat.y <= sofa.y + 64 / 2 &&
		sofa.x <= cat.x + 64 / 2 &&
		sofa.y <= cat.y + 64 / 2
	) {
		rip.play();
		points += 1;
		annoyance += 10;
		sofaImage.src = "images/sofa2.png";
		sofaActive = false;
		canBeCute = true;
	}
	if (
		//bunny
		bunnyActive === true &&
		cat.x <= bunny.x + 64 / 2 &&
		cat.y <= bunny.y + 64 / 2 &&
		bunny.x <= cat.x + 64 / 2 &&
		bunny.y <= cat.y + 64 / 2
	) {
		rip.play();
		points += 1;
		annoyance += 10;
		bunnyImage.src = "images/bunny2.png";
		bunnyActive = false;
		canBeCute = true;
	}

	if (
		//redTable
		redTableActive === true &&
		cat.x <= redTable.x + 128 / 2 &&
		cat.y <= redTable.y + 128 / 2 &&
		redTable.x <= cat.x + 64 / 2 &&
		redTable.y <= cat.y + 64 / 2
	) {
		crash1.play();
		points += 1;
		annoyance += 10;
		redTableImage.src = "images/redtable2.png";
		redTableActive = false;
		canBeCute = true;
	}

	if (
		//chair1
		chair1Active === true &&
		cat.x <= chair1.x + 128 / 2 &&
		cat.y <= chair1.y + 128 / 2 &&
		chair1.x <= cat.x + 64 / 2 &&
		chair1.y <= cat.y + 64 / 2
	) {
		thud.play();
		points += 1;
		annoyance += 10;
		chair1Image.src = "images/chair2.png";
		chair1Active = false;
		canBeCute = true;
	}

	if (
		//chair2
		chair2Active === true &&
		cat.x <= chair2.x + 128 / 2 &&
		cat.y <= chair2.y + 128 / 2 &&
		chair2.x <= cat.x + 64 / 2 &&
		chair2.y <= cat.y + 64 / 2
	) {
		thud.play();
		points += 1;
		annoyance += 10;
		chair2Image.src = "images/chair22.png";
		chair2Active = false;
		canBeCute = true;
	}

	if (
		//armchair
		armchairActive === true &&
		cat.x <= armchair.x + 128 / 2 &&
		cat.y <= armchair.y + 128 / 2 &&
		armchair.x <= cat.x + 64 / 2 &&
		armchair.y <= cat.y + 64 / 2
	) {
		rip.play();
		points += 1;
		annoyance += 10;
		armchairImage.src = "images/armchair2.png";
		armchairActive = false;
		canBeCute = true;
	}
	if (
		//bookshelf
		bookshelfActive === true &&
		cat.x <= bookshelf.x + 128 / 2 &&
		cat.y <= bookshelf.y + 128 / 2 &&
		bookshelf.x <= cat.x + 64 / 2 &&
		bookshelf.y <= cat.y + 64 / 2
	) {
		stuff.play();
		points += 1;
		annoyance += 10;
		bookshelfImage.src = "images/bookshelf2.png";
		bookshelfActive = false;
		canBeCute = true;
	}

	if (
		//dresser
		dresserActive === true &&
		cat.x <= dresser.x + 128 / 2 &&
		cat.y <= dresser.y + 128 / 2 &&
		dresser.x <= cat.x + 64 / 2 &&
		dresser.y <= cat.y + 64 / 2
	) {
		crash2.play();
		points += 1;
		annoyance += 10;
		dresserImage.src = "images/dresser2.png";
		dresserActive = false;
		canBeCute = true;
	}

	if (
		//plant
		plantActive === true &&
		cat.x <= plant.x + 128 / 2 &&
		cat.y <= plant.y + 128 / 2 &&
		plant.x <= cat.x + 64 / 2 &&
		plant.y <= cat.y + 64 / 2
	) {
		crash1.play();
		points += 1;
		annoyance += 10;
		plantImage.src = "images/plant2.png";
		plantActive = false;
		canBeCute = true;
	}
	if (
		//tree
		treeActive === true &&
		cat.x <= tree.x + 128 / 2 &&
		cat.y <= tree.y + 128 / 2 &&
		tree.x <= cat.x + 64 / 2 &&
		tree.y <= cat.y + 64 / 2
	) {
		crash1.play();
		points += 1;
		annoyance += 10;
		treeImage.src = "images/tree2.png";
		treeActive = false;
		canBeCute = true;
	}

	if (
		//bed
		bedActive === true &&
		cat.x <= bed.x + 128 / 2 &&
		cat.y <= bed.y + 128 / 2 &&
		bed.x <= cat.x + 64 / 2 &&
		bed.y <= cat.y + 64 / 2
	) {
		rip.play();
		points += 1;
		annoyance += 10;
		bedImage.src = "images/bed2.png";
		bedActive = false;
		canBeCute = true;
	}

	if (
		//nightstand
		nightstandActive === true &&
		cat.x <= nightstand.x + 128 / 2 &&
		cat.y <= nightstand.y + 128 / 2 &&
		nightstand.x <= cat.x + 64 / 2 &&
		nightstand.y <= cat.y + 64 / 2
	) {
		crash1.play();
		points += 1;
		annoyance += 10;
		nightstandImage.src = "images/nightstand2.png";
		nightstandActive = false;
		canBeCute = true;
	}

	if (
		//tank
		tankActive === true &&
		cat.x <= tank.x + 128 / 2 &&
		cat.y <= tank.y + 128 / 2 &&
		tank.x <= cat.x + 64 / 2 &&
		tank.y <= cat.y + 64 / 2
	) {
		crash1.play();
		points += 1;
		annoyance += 10;
		tankImage.src = "images/tank2.png";
		tankActive = false;
		canBeCute = true;
	}

	//annoyance portrait
	var img = document.getElementById("portrait");
	if (annoyance < 5) {
		img.src = "images/portrait1.png";
	}
	if (annoyance >= 10) {
		img.src = "images/10.png";
	}
	if (annoyance >= 20) {
		img.src = "images/portrait2.png";
	}
	if (annoyance >= 30) {
		img.src = "images/30.png";
	}
	if (annoyance >= 40) {
		img.src = "images/portrait3.png";
	}
	if (annoyance >= 50) {
		img.src = "images/50.png";
	}
	if (annoyance >= 60) {
		img.src = "images/portrait4.png";
	}
	if (annoyance >= 70) {
		img.src = "images/70.png";
	}
	if (annoyance >= 80) {
		img.src = "images/portrait5.png";
	}

	if (annoyance >= 86) {
		gameOver = true;
		document.getElementById("reloadBtn").style.visibility = "visible";
	}

	// boundaries
	if (cat.x < 50) {
		cat.x = 50;
	}
	if (cat.x > canvas.width - 64) {
		cat.x = canvas.width - 64;
	}
	if (cat.y < 47) {
		cat.y = 47;
	}
	if (cat.y > canvas.height - 64) {
		cat.y = canvas.height - 64;
	}
}

//countdown
function countdownFunction() {
	if (gameOver) return;
	countdown--;
	if (countdown <= 0) {
		clearInterval(countdownFunction);
		gameWin = true;
		countdown = 0;
		catLoaded = false;
		enemy1Loaded = false;
		lampLoaded = false;
		bigTableLoaded = false;
		sofaLoaded = false;
		bunnyLoaded = false;
		redTableLoaded = false;
		chair1Loaded = false;
		chair2Loaded = false;
		armchairLoaded = false;
		bookshelfLoaded = false;
		dresserLoaded = false;
		plantLoaded = false;
		treeLoaded = false;
		bedLoaded = false;
		nightstandLoaded = false;
		tankLoaded = false;

		document.getElementById("reloadBtn").style.visibility = "visible";
	}
}
//timer
setInterval(countdownFunction, 1000);

//tegne spillelementer
function drawGameElements() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	catLoaded ? ctx.drawImage(playerImage, cat.x, cat.y) : null;
	enemy1Loaded ? ctx.drawImage(enemy1Image, enemy1.x, enemy1.y) : null;
	lampLoaded ? ctx.drawImage(lampImage, lamp.x, lamp.y) : null;
	bigTableLoaded ? ctx.drawImage(bigTableImage, bigTable.x, bigTable.y) : null;
	sofaLoaded ? ctx.drawImage(sofaImage, sofa.x, sofa.y) : null;
	bunnyLoaded ? ctx.drawImage(bunnyImage, bunny.x, bunny.y) : null;
	redTableLoaded ? ctx.drawImage(redTableImage, redTable.x, redTable.y) : null;
	chair1Loaded ? ctx.drawImage(chair1Image, chair1.x, chair1.y) : null;
	chair2Loaded ? ctx.drawImage(chair2Image, chair2.x, chair2.y) : null;
	armchairLoaded ? ctx.drawImage(armchairImage, armchair.x, armchair.y) : null;
	bookshelfLoaded
		? ctx.drawImage(bookshelfImage, bookshelf.x, bookshelf.y)
		: null;
	dresserLoaded ? ctx.drawImage(dresserImage, dresser.x, dresser.y) : null;
	plantLoaded ? ctx.drawImage(plantImage, plant.x, plant.y) : null;
	treeLoaded ? ctx.drawImage(treeImage, tree.x, tree.y) : null;
	bedLoaded ? ctx.drawImage(bedImage, bed.x, bed.y) : null;
	nightstandLoaded
		? ctx.drawImage(nightstandImage, nightstand.x, nightstand.y)
		: null;
	tankLoaded ? ctx.drawImage(tankImage, tank.x, tank.y) : null;

	gameOver ? ctx.drawImage(gameOverImage, 0, 0) : null;
	document.getElementById("time").innerHTML = countdown;
	document.getElementById("points").innerHTML = points;
	gameWin
		? ctx.drawImage(gameWinImage, 0, 0) +
		  ctx.fillText(
				`Havoc Wreaked: ${points} out of 16`,
				canvas.width / 2,
				canvas.height / 2
		  )
		: null;

	ctx.font = "60px Meow";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
}

function renderGame() {
	playerMovement();
	drawGameElements();
	requestAnimationFrame(renderGame);
}
requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.mozRequestAnimationFrame;

//kjøre spillet
function playGame() {
	gameOver = false;
	gameWin = false;
	countdown = 30;
	catLoaded = true;
	enemy1Loaded = true;
	lampLoaded = true;
	bigTableLoaded = true;
	sofaLoaded = true;
	bunnyLoaded = true;
	redTableLoaded = true;
	chair1Loaded = true;
	chair2Loaded = true;
	armchairLoaded = true;
	bookshelfLoaded = true;
	dresserLoaded = true;
	plantLoaded = true;
	treeLoaded = true;
	bedLoaded = true;
	nightstandLoaded = true;
	tankLoaded = true;

	document.getElementById("playBtn").style.visibility = "hidden";

	drawCat();
	drawObjects();
	renderGame();
}
