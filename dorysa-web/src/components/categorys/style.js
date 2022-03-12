import styled from "styled-components";


const Section = styled.div `

    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

const Title = styled.h2 `
    margin-top: 24px;
    font-size: 3em;
    color: #141325;
`;

const ContentsCategory = styled.div `
    width: 100%;
    height: 70%;
    margin-top: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


const CategorysInCards = styled.div `

    width: 200px;
    height: 300px;
    border-radius: 30px;
    border: solid 1px #141325;
    text-align: center;
`

export {
    Section,
    ContentsCategory,
    Title,
    SubSection,
    CategorysInCards
}