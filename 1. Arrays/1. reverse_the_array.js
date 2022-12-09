let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverse(array) {
  let reverse = [];

  // Iterate through the aray backwards
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }

  return reverse;
}

// without returning a new array

function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let front = array[start];
    let rear = array[end];

    array[start] = rear;
    array[end] = front;

    start++;
    end--;
  }

  return array;
}

console.log(reverse(numbers));
console.log(reverseArray(numbers));
