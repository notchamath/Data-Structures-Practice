function heapSort(arr){
    
	let length = arr.length,
			mid = Math.floor(length/2) - 1;

	for(let i=mid; i>=0; i--){
		heapify(arr, length, i);
	}

	for(let i=length-1; i>=0; i--){
		[arr[0], arr[i]] = [arr[i], arr[0]];
		heapify(arr, i, 0);
	}

	return arr;
}

function heapify(arr, length, root){

	let largest = root,
			left    = root * 2 + 1,
			right   = left + 1;

	if(left < length && arr[left] > arr[largest]){
		largest = left;
	}

	if(right < length && arr[right] > arr[largest]){
		largest = right;
	}

	if(largest !== root){
		[arr[root], arr[largest]] = [arr[largest], arr[root]];
		heapify(arr, length, largest);
	}

	return arr;
}

let nums = [5,2,88,8,45,4,11,0,3,2,36];
heapSort(nums);