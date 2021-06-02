var nums= [10,5,8,4,9,]

if (nums.length < 2 ) {
	return nums;
}

const length = nums.length;
const middle = Math.floor(length/2);
const left = nums.slice(0, middle);
const right = nums.slice(middle,length);

const sortedLeft = mergeSort(left)
const sortedRight = mergeSort(right)



return stich(sortedLeft, sortedRight);


const stich = (left,right) => {
	const results = [];

	while(left.length && right.length) {
		if (left[0]  <=right[0] ){
			result.push(left.shift());
		}

		else {
			results.unshift(right.shift());
		}

	}

	while(left.length) {
		results.push(left.shift());
	}
	while(right.length) {
		results.push(right.shift());
	}

	return  [...results, ...left, ...right];
}