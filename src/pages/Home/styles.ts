import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 20px;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 70px);
    overflow-x: hidden;
    /* @media (min-width: 1419px) {
        flex-direction: row;
    } */
`;

