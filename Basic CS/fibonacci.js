// let  wr = (mssg='-----------') => document.write(`<br>$(msg)`);

function wr (msg) {
	if (!msg) {
		msg= '------------';
	}
	return document.write('<br>' + msg);
}

function fibonacci(n) {
	if(n <=2) {
		return  1;
	}
	else{
		return fibonacci(n-1) + fibonacci(n-2);
	}
}

for (var i=1; i <=28;  i++) {
	wr(`${i}. ${fibonacci(i)}`);
}



