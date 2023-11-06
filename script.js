let stopBtn = document.getElementById('stopButton');
let slowBtn = document.getElementById('slowButton');
let goBtn = document.getElementById('goButton');

let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');

stopBtn.addEventListener('click', function stopFun() {
	stopLight.style.backgroundColor = 'red';
	slowLight.style.backgroundColor = 'black';
	goLight.style.backgroundColor = 'black';
});

slowBtn.addEventListener('click', function slowFun() {
	stopLight.style.backgroundColor = 'black';
	slowLight.style.backgroundColor = 'yellow';
	goLight.style.backgroundColor = 'black';
});

goBtn.addEventListener('click', function goFun() {
	stopLight.style.backgroundColor = 'black';
	slowLight.style.backgroundColor = 'black';
	goLight.style.backgroundColor = 'green';
});
