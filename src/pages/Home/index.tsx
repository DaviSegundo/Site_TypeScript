import React from 'react';
import { NavBar } from '../../components/NavBar';
import { SkillCard } from '../../components/SkillCard';
import { Container, Title } from './styles';

export function Home(){
    return (
        <Container>
            <NavBar/>
            <SkillCard proficiency='High' skill='Python'/>
            <SkillCard proficiency='Low' skill='TypeScript'/>
            <Title>Site do Davi</Title>
        </Container>
    );
}