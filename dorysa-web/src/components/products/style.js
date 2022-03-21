import styled from "styled-components";


const Section = styled.div `

    margin-top: 50px;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;\
`;

const SubSection = styled.div`
    width: 80%;
    height: 100%;
    border: solid 2px #67b588;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardProduct = styled.div `
width: 200px;
height: 300px;
border-radius: 30px;
border: solid 1px #141325;
text-align: center;

`

const CardContent = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export {
    Section,
    SubSection,
    CardProduct,
    CardContent
}