const myArray = [3, 0, 3, 4, 2, 5, -1, 4, 1 ];

/**
 * Quick Sort Function 
 * Version 1 
 * Using the Hoare Partition approach
 * @param {array} (array) 
 * @return {array} (sorted)
 */
const quickSort = (array, left, right) => {

    left = left || 0;
    right = right || array.length - 1;

    let pivot = partition(array, left, right);

    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1);
    }

    if (right > pivot) {
        quickSort(array, pivot, right)
    }

    return array;

}

const partition = (array, left, right) => {
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

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};



console.log(quickSort(myArray));





/**
 * Quick Sort Function
 * Version 2
 * @param {array} (origArray) 
 * @return {array} (sorted)
 */
const quickSort2 = (origArray) => {
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

	return newArray.concat(quickSort2(left), pivot, quickSort2(right));
}

