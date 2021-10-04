import React from 'react';
import { NavBar } from '../../components/NavBar';
import { Container, Title } from './styles';

export function Home(){
    return (
        <Container>
            <NavBar/>
            <Title>Site do Davi</Title>
        </Container>
    );
}