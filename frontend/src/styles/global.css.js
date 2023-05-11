import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
    margin: 0;
    /* height: 100%; */
}

.gradient-bg {
    display: flex;
    align-items: flex-start;
    background: linear-gradient(to bottom right, blue, pink);
    position: relative;
}

.custom-container {
    max-width: 500px;
}

.vertical-tabs {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
 }`;