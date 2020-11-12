//creating a fuction that uses Insertion Sort to sort an array
//Insertion Sort could have a best case of O(n) so good for sorting 'nearly sorted' inputs.
//Time Complexity(worst): O(n^2), Space Complexity: O(1)

function insertionSort(arr){

	const length = arr.length;

	//for each element find where they belong, move it there
	for(let i=1; i<length; i++){

		//if i is smaller than first element, unshift
		if(arr[i] < arr[0]){
			arr.unshift(arr.splice(i,1)[0]);
		} else {

			//only checking to the left of current element i, exclude first element to skip unnecessary iteration
			if(arr[i] < arr[i-1]){

				for(let j=1; j<i; j++){

					//find where it belongs, add to the correct spot
					if(arr[i] >= arr[j-1] && arr[i] < arr[j]){
						arr.splice(j,0,arr.splice(i,1)[0]);
					}
				
				}

			}

		}
	}

	return arr;
}

let nums = [5,2,88,2,45,4,11,0,3,2,36];
insertionSort(nums);