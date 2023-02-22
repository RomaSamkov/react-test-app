const arr = ['apple', 'mango', 'apple', 'orange', 'mango', 'mango'];

function uniqueEl(arr) {
  let unique = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return unique;
}
console.log(uniqueEl(arr));
