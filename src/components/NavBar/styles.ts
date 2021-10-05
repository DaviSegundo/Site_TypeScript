import styled from "styled-components";

interface buttonprops {
    active: boolean;
}

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: var(--black);
    justify-content: center;
`;

export const Page1 = styled.button <buttonprops>`
    color: var(--white);
    margin-right: 30px;
    padding: 5px;
    background-color: transparent;
    border-width: 0;
    font-size: 15px;
    /* background-color: ${({active})=>active?'red':'green'}; */

`;

export const Select = styled.div`
    margin-top: 13px;
    border-bottom: 2px solid #E4E4E4;
`;