 const bubbleSort = (nums) => {
 	do{
 		var swapped=false
 		for (let i=0; i < nums.length; i++) {
 			snapshot(nums);

 			if (nums[i] > nums[i+1]) {
 				const temp = nums[i];
 				nums[i] = nums[i+1];
 				nums[i+1]=  temp;
 				swapped=true;
 			}
 		}
 	} while(swapped)
 	snapshot(nums)
 }

xdescribe('bubble sort', function(){
	it('should sort correctly', () => {
		var nums= [10,5,8,4,9,]
	})
})