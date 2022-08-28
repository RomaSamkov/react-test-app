import GlobalFonts from '../fonts/fonts.styled';
import AwesomeHeadline from './App.styled';

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

export const App = () => {
  return (
    <>
      <GlobalFonts />
      <AwesomeHeadline>Fonts</AwesomeHeadline>
      <div>
        <button type="button">Open</button>
      </div>
    </>
  );
};
