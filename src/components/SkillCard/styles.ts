import styled from "styled-components";

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const Skill = styled.h2`
    margin-top: 20px;
    font-size: 25px;
    text-align: center;
    color: white;
`;

export const Image = styled.img`
    align-self: center;
    margin-top: 50px;
`;

export const DiagonalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 250px;
    background-color: #1c2533;
    overflow: hidden;
    margin: 5px 5px;
    border-radius: 10px;
    z-index: -1;
    box-shadow: 0px 3px 6px #00000029;
    min-width: 180px;
`;

export const DiagonalText = styled.div`
    white-space: nowrap;
    padding: 7px 7px;
    min-width: 100px;
    margin-top: -42px;
    margin-right: -22px;
    transform: rotate(45deg) translate(37%,0);
    color: white;
    text-align: center;
    top: -20px;
    background:linear-gradient(black, purple);
`;