import { createGlobalStyle } from 'styled-components';
import BigFish from './BigFish/BigFish.woff';
import BigFish2 from './BigFish/BigFish.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'BigFish';
        src: local('BigFish'), local('BigFish'),
        url(${BigFish}) format('woff'),
        url(${BigFish2}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    
`;
