
// Helper Functions

/**
 * Hoare Partition Function
 * @param {array} array 
 * @param {number} left 
 * @param {number} right 
 */
const partitionH = (array, left, right) => {
    let pivot = Math.floor((left + right) / 2);

    while (left < right) {
        while (array[left] < array[pivot]) {
            left++
        }
        while (array[right] > array[pivot]) {
            right--
        }

        if (left <= right) {
            swap(array, left, right);
            left++
            right--
        }
    }
    return left;
};

/**
 * Lomuto Partition Function 
 * @param {array} (array) 
 * @param {number} (left index) 
 * @param {number} (right index) 
 */
const partitionL = (array, left, right) => {
    let pivot = right;
    let i = left;

    for (let j = left; j < right; j++) {
        if (array[j] <= array[pivot]) {
            swap(array, i, j);
            i++
        }
    }
    return i;
}

/**
 * Swap Function 
 * Used by both the Hoare and Lomuto implementations
 * @param {array} (array) 
 * @param {number} (i) 
 * @param {number} (j) 
 */
const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

//---------------------------------------------------------------------------//

/**
 * Quick Sort Function 
 * Version 1 
 * Using a Hoare Partition
 * @param {array} (array) 
 * @return {array} (sorted)
 */
const quickSortH = (array, left, right) => {

    left = left || 0;
    right = right || array.length - 1;

    let pivot = partitionH(array, left, right);
    
    if (left < pivot - 1) {
        quickSortH(array, left, pivot - 1);
    }

    if (right > pivot) {
        quickSortH(array, pivot, right)
    }

    return array;

}

/**
 * Quick Sort Function 
 * Version 2 
 * Using a Lomuto Partition
 * @param {array} (array) 
 * @return {array} (sorted)
 */
const quickSortL = (array, left, right) => {

    left = left || 0;
    right = right || array.length - 1;

    let pivot = partitionL(array, left, right);
    
    if (left < pivot - 1) {
        quickSortL(array, left, pivot - 1);
    }

    if (right > pivot) {
        quickSortL(array, pivot - 1, right)
    }

    return array;

}

/**
 * Quick Sort Function
 * Version 3
 * Basic Implementation
 * @param {array} (origArray) 
 * @return {array} (sorted)
 */
const quickSort3 = (origArray) => {
	if (origArray.length <= 1) { 
		return origArray;
	}

    let left = [];
    let right = [];
    let newArray = [];
    let pivot = origArray.shift();
    let length = origArray.length;

    for (let i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
            left.push(origArray[i]);
        } else {
            right.push(origArray[i]);
        }
    }
    return newArray.concat(quickSort3(left), pivot, quickSort3(right));
}


const myArray = [21,3,4,2,2,1,-1,0,5,4,3];

console.log('quick sort Hoare Partition: ', quickSortH(myArray))
console.log('quick sort Lomuto Partition: ', quickSortL(myArray))
console.log('quick sort Basic: ', quickSort3(myArray))
