import styled from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    width: 10em;
    height: 10em;
    font-size: 25px;
    box-sizing: border-box;
    border-top: 0.3em solid hotpink;
    border-radius: 50%;
    position: relative;
    animation: rotating 2s ease-in-out infinite;
    --direction: 1;

}

.loader::before,
.loader::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-sizing: border-box;
    top: -0.2em;
}

.loader::before {
    border-top: 0.3em solid dodgerblue;
    transform: rotate(120deg);
}

.loader::after {
    border-top: 0.3em solid gold;
    transform: rotate(240deg);
}

.loader span {
    position: absolute;
    color: var(--fancyClr);
    width: inherit;
    height: inherit;
    text-align: center;
    line-height: 10em;
    font-family: sans-serif;
    animation: rotating 2s linear infinite;
    --direction: -1;
}

@keyframes rotating {
    50% {
        transform: rotate(calc(180deg * var(--direction)));
    }

    100% {
        transform: rotate(calc(360deg * var(--direction)));
    }
}
`

export default StyledLoader