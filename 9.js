let arr = [ 4, 2, 6, 88, 3, 11 ];

function lower(arr) {
	let low = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < low) {
			low = arr[i];
		}
	}
	return low;
}

function higher(arr) {
	let high = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > high) {
			high = arr[i];
		}
	}
	return high;
}

console.log(lower(arr));
console.log(higher(arr));
