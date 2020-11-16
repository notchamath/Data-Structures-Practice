//creating a program that sorts an array input using Quick Sort
//Quick Sort has a space complexity of O(log n)
//if the input is already sorted, Quick sort could expeience a time complexity(worst) of O(n^2) due to pivot being the biggest value in array
//but in most cases Quick Sort will have a time complexity of O(n log n)


//run quick sort
function quickSort(arr){
    return runQuickSort(arr, 0, arr.length-1);
}

function runQuickSort(arr, left, right){

	let partIndx; //partition index

    //if there are atleast 2 items in the array, sort it
	if(left < right){
        pivot = right;
        
        //finding where to partition the array and sorting it partially, one partition at a time
		partIndx = partition(arr, pivot, left);

		runQuickSort(arr, left, partIndx-1);
		runQuickSort(arr, partIndx+1, right);
	}

	return arr;
}

//sorts the array one partition at a time
function partition(arr, pivot, left){
	let partIndx = left;

	for(let i=left; i<pivot; i++){

        //if value at i is smaller than the pivot value, make sure i is to the left of partIndx
        //if value at i is bigger than the pivot value, make sure i is to right of partIndx
		if(arr[i] < arr[pivot]){

			swap(arr, partIndx, i);
			partIndx++;

		}
	}

    //swap partIndx with pivot(creating new partition)
	swap(arr, partIndx, pivot);
	return partIndx;
}

//swapping 2 values in an array
function swap(arr, i, j){
	let value = arr[i];
	arr[i] = arr[j];
	arr[j] = value; 
}

let nums = [5,2,88,8,45,4,11,0,3,2,36];
quickSort(nums);