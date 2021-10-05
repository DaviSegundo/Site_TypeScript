import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 200px;
    padding: 10px;
    margin-right: 3px;
    margin-left: 8px;
    margin-bottom: 15px;
    margin-top: 10px;
    @media (max-width: 930px) {
        width: 100%;
        flex-direction: column;
    }
    border-radius: 10px;
    background-color: var(--white);
    justify-content: space-between;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Proficiency = styled.h4`
    margin-right: 8px;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: right;
`;

export const Skill = styled.h2`
    margin-top: 10px;
    font-size: 25px;
    text-align: center;
`;

export const Image = styled.img`
    align-self: center;
`;