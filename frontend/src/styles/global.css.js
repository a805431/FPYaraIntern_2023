import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
    margin: 0;
}

.gradient-bg {
    display: flex;
    align-items: flex-start;
    background: linear-gradient(to bottom right, blue, pink);
    position: relative;
}

.custom-container {
    max-width: 500px;
}`
    ;