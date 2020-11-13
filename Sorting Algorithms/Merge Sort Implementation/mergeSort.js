//creating a function that sorts an array input using Merge Sort
//Merge sort has a time complexity of O(nlogn) and a space complexity of O(n)
//Merge sort uses recursion to sort inputs

function mergeSort(arr){

	//base case, also deals with an empty array input
	if(arr.length <= 1){
		return arr;
	}

	const length = arr.length,
		  middle = Math.floor(length/2), 
		  left 	 = arr.slice(0, middle), //split array into 2 arrays
		  right  = arr.slice(middle);

	//call merge function that sorts and merges 2 arrays into one, while using the mergeSort function to breakdown the original input
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	let result     = [],
		leftIndex  = 0,
		rightIndex = 0;

	//keep adding the smallest items in the 2 arrays to the result array
	while(leftIndex < left.length && rightIndex < right.length ){
		if(left[leftIndex] < right[rightIndex]){
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	//add all the other elements in the 2 arrays to the result array and return
	return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

let nums = [5,2,88,2,45,4,11,0,3,2,36];
mergeSort(nums);