
const daysCount = document.getElementById("days")
const hoursCount = document.getElementById("hours")
const minutesCount = document.getElementById("minutes")
const secondsCount = document.getElementById("seconds")

const eid = "19 July 2021"

function countDown() {

	const eidDate = new Date(eid);
	const currentDate = new Date();
	const totalSeconds = new Date( eidDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 /24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;


	daysCount.innerHTML = days;
	hoursCount.innerHTML = formatTime(hours);
 	minutesCount.innerHTML =formatTime(mins);
 	secondsCount.innerHTML =formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; //if time less than 10 return  
}

countDown();

setInterval(countDown, 1000)