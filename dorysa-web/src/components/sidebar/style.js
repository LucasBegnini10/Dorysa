import styled  from "styled-components"

const Bars = styled.div `
    position: fixed;
    left: 0;
    width: 5vw;
    height: 100%;
    background-color: #65a675;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const IconsCenter = styled.div `

    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    font-size: 2.5em;
    color: #141325;
    cursor: pointer;

    svg:hover{
        color: #000
    }
`



export {
    Bars,
    IconsCenter,
}