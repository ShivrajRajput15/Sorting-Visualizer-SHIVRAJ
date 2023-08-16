const n = 11;
const arr = [];
function newarray() {
    for (let i = 0; i < n; i++) {
        arr[i] = Math.random();
    }
    showbar();
}

function start() {
    const copy = [...arr];
    const swaps = bubblesort(copy);
    animate(swaps);
    // showbar();
}
function start2() {
    const copy = [...arr];
    const swaps = insertionsort(copy);
    // const swaps2 = insertionsort(copy);
    animate(swaps);
    // animate(swaps2);
}
function start3() {
    const copy = [...arr];
    const swaps = selectionsort(copy);
    animate(swaps);
}
function start4() {
    const copy = [...arr];
    swapping = quicksort(copy, 0, copy.length - 1);
    animate(swapping);
}
function animate(swaps) {
    if (swaps.length == 0) {
        return;
    }
    const [i, j] = swaps.shift();
    [arr[i], arr[j]] = [arr[j], arr[i]];
    showbar();
    setTimeout(function () {
        animate(swaps);
    }, 500);
}
function bubblesort(arr) {
    const swaps = [];
    do {
        var swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                swapped = true;
                swaps.push([i - 1, i]);
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
            }
        }
    }
    while (swapped);
    // showbar();
    return swaps;
}
function insertionsort(arr) {
    const swaps = [];
    // const swaps2 = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            swaps.push([i - 1, i]);
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] < arr[j - 1] && (j - 1 >= 0)) {
                    swaps.push(([j - 1, j]));
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
        }
    }
    // showbar();
    return swaps;
    // return swaps2;
}
function selectionsort(arr) {
    const swaps = [];
    // let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i)
            swaps.push([i, min]);
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return swaps;
}

const swapping = [];
function quicksort(arr, left, right) {

    if (left >= right) {
        return;
    }
    let pivot = Math.floor((left + right) / 2);
    let start = left;
    let end = right;
    while (start <= end) {
        if (arr[start] <= arr[pivot]) {
            start++;
        }
        else if (arr[end] >= arr[pivot]) {
            end--;
        }
        else {
            swapping.push([start, end]);
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    // animate(swapping);
    quicksort(arr, left, pivot - 1);
    quicksort(arr, pivot + 1, right);
}
/*
function partition(arr, left, right) {
    let pivotindex = left;
    let pivotvalue = arr[right];
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotvalue) {
            swapping.push([i, pivotindex]);
            [arr[i], arr[pivotindex]] = [arr[pivotindex], arr[i]];
        }
    }
    swapping([pivotindex, end]);
    [arr[pivotindex], arr[end]] = [arr[end], arr[pivotindex]];
    return pivotindex;
}
*/
/*
function quicksortcall(arr) {
    const swaps = [];
    // var left = 0;
    // var right = n - 1;
    // quicksort(arr, left, right, swaps);
    // var pivot = (left + right) / 2;
    // while (left <= right) {
    //     if (arr[left] <= arr[pivot]) {
    //         left++;
    //     }
    //     else if (arr[right] >= arr[pivot]) {
    //         right--;
    //     }
    //     else {
    //         swaps.push([left, right]);
    //         [arr[left], arr[right]] = [arr[right], arr[left]];
    //         left++;
    //         right--;
    //         // setTimeout(animate(swaps), 500);
    //     }
    // }
    quicksort(arr, left, pivot - 1, swaps);
    quicksort(arr, pivot + 1, right, swaps);
    return swaps;
    // return swaps;
}
*/
/*
var left = 0;
var right = arr.length - 1
var p = (left + right) / 2;
function quicksort(arr, left, right) {
    const swaps = [];

    if (arr.length == 1)
        return;

    while (left <= right) {
        if (arr[left] <= arr[p]) {
            left++;
        }
        else if (arr[right] >= arr[p]) {
            right--;
        }
        else {
            swaps.push([left, right]);
            [arr[left], arr[right]] = [arr[right], arr[left]];
            animate(swaps);
            // animate(swaps);
        }
    }
    quicksort(arr, left, p - 1);


    quicksort(arr, p + 1, right);

    return swaps;
}
*/
/*
function partition(arr, left, right, swaps) {
    var pivot = (left + right) / 2;
    var i = left;
    var j = right;

    while (i <= j) {
        if (arr[i] <= arr[pivot]) {
            i++;
        }
        else if (arr[j] >= arr[pivot]) {
            j--;
        }
        else {
            swaps.push([i, j]);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            animate(swaps);
        }
    }
    return pivot;
}
*/

// console.log(arr);
function showbar() {
    container.innerHTML = " ";
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = arr[i] * 100 + "%";
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}
