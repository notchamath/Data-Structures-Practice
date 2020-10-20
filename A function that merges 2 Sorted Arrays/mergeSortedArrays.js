//this program takes 2 sorted arrays of integers and merges them, Time Complexity is O(n)

function merge(mergedArr, arr1, arr2) {
 
    //declare variables
    
    let i = 0,
        j = 0;
    let arr1Item = arr1[j],
        arr2Item = arr2[i];

    while (arr1Item || arr2Item) {
        if (arr1Item > arr2Item || arr1Item === undefined) {

            mergedArr.push(arr2Item);
            i++;
            arr2Item = arr2[i];

        } else {

            mergedArr.push(arr1Item);
            j++;
            arr1Item = arr1[j];

        }
    }
}

function mergeSortedArrays(arr1, arr2) {

    //check if inputs are valid
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return 'The inputs are not arrays';
    }

    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    const mergedArr = [];

    //call function to merge the 2 arrays
    merge(mergedArr, arr1, arr2);

    return mergedArr;
}

mergeSortedArrays([0, 7, 10, 17, 31], [3, 4, 6, 30])