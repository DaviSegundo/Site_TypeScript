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
    margin-right: 5px;
    padding: 5px;
    background-color: ${({active})=>active?'red':'green'};
`;