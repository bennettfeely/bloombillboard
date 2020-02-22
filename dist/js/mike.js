console.log('hi');

const canvas = document.querySelector('.live-canvas');
const ctx = canvas.getContext('2d');
// const img = document.querySelector('.cyan-img');
const live_img = document.querySelector('.live-img');

const input = document.querySelector('input')
const top_line = document.querySelector('.top-line-input')
const bottom_line = document.querySelector('.bottom-line-input')

const download_link = document.querySelector('.download-link')

var img = new Image();

img.addEventListener('load', function(e) {
	console.log('img drawn')

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.drawImage(img, 0, 0, 1200, 800);

	init();
	draw();
});

img.src = 'img/cyan.jpg';


function init() {
	console.log("init()");

	top_line.addEventListener('keyup', draw);
	bottom_line.addEventListener('keyup', draw);
}

function draw() {
	console.log('draw();');
	var top_text = document.querySelector('.top-line-input').value;
	var bottom_text = document.querySelector('.bottom-line-input').value;

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.drawImage(img, 0, 0, 1200, 800);

	// Top Text
	ctx.font = '800 60px Montserrat';
	ctx.color = 'black';
	ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#06275b"
	ctx.setTransform(1, -0.08, 0, 1, 0, 0);
	ctx.fillText(top_text.toUpperCase(), 550, 330, 720);

	// Bottom Text
	ctx.font = '800 30px Montserrat';
	ctx.color = 'white';
	ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff"
	ctx.fillText(bottom_text.toUpperCase(), 550, 390, 720);

	var new_src = canvas.toDataURL("image/jpeg");

	live_img.src = canvas.toDataURL("image/jpeg");

	download_link.download = 'bloombergbillboard.jpg';
	download_link.href = new_src;
}






