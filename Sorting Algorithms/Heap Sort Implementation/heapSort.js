//creating a program that sorts an array input using Heap Sort
//Heap sort is a comparison sort that has a time complexity of O(n log n) for all cases and a space complexity of O(1)
//while Heap sort is better in terms of space but it is known to be a bit slower than Merge and Quick sorts in most cases, overall (Quick Sort's worst case being exception)

//heap sort function takes an array and sorts it
function heapSort(arr){
    
	let length = arr.length,
		   mid = Math.floor(length/2) - 1;

	//call heapify to create a max heap
	for(let i=mid; i>=0; i--){
		heapify(arr, length, i);
	}

	//swap root with lowest node and remove the lowest node from max heap and heapify whats left to create a new max heap
	for(let i=length-1; i>=0; i--){
		[arr[0], arr[i]] = [arr[i], arr[0]];
		heapify(arr, i, 0);
	}

	return arr;
}

//creating a max heap
function heapify(arr, length, root){

	let largest = root,
		left    = root * 2 + 1,
		right   = left + 1;


	//make sure  parent is bigger than their left child
	if(left < length && arr[left] > arr[largest]){
		largest = left;
	}

	//make sure  parent is bigger than their right child
	if(right < length && arr[right] > arr[largest]){
		largest = right;
	}

	//if any child is bigger than their parent, swap their values and send the new child to heapify as a parent to balance max heap
	if(largest !== root){
		[arr[root], arr[largest]] = [arr[largest], arr[root]];
		heapify(arr, length, largest);
	}

	return arr;
}

let nums = [5,2,88,8,45,4,11,0,3,2,36];
heapSort(nums);