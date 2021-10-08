import styled from "styled-components";

interface buttonprops {
    active: boolean;
}

export const Container = styled.div`
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

export const Logo = styled.button`
    width: 70px;
    font-size: 30px;
    color: white;
    border-width: 0px;
    background-color: transparent;
`;

export const Logo2 = styled.div`
    width: 70px;
    background-color: black;
`;

export const Geral = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 50px;
    background-color: var(--black);
    position: sticky;
    top: 0;
`;