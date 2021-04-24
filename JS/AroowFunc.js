const realNumArray = [42,-5,-5,5,6,-7,32,7,-7];

const SqaureList = (arr) => {
	const squaredIntegers= arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squaredIntegers;
}

const squaredIntegers = SqaureList(realNumArray);
console.log(squaredIntegers);

