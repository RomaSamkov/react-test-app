const arr = ['apple', 'mango', 'apple', 'orange', 'mango', 'mango'];

function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}

console.log(removeDuplicates(arr));

export const App = () => {
  return (
    <div>
      <button type="button">Open</button>
    </div>
  );
};
