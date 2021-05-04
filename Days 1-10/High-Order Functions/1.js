// element.addEventListener("change",() => {
// 	console.log("our evidence is updated");
// });

const ifElse =  (condition, isTrue, isFalse) => {
	return condition ? isTrue() : isFalse();   //? ternary operator,
};
ifElse(true,
	()=> { console.log(true);},  //console.log not happening because  it is not invoked, for invoking add ()
	()=> { console.log(false);}
);