import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/my-books',
    text: 'My books',
  },
];

export default items;
