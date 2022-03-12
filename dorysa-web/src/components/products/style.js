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

export {
    Section,
    SubSection
}