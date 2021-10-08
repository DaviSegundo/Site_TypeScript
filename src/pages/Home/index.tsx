import React from 'react';
import { NavBar } from '../../components/NavBar';
import { SkillCard } from '../../components/SkillCard';
import { SideBar } from '../../components/SideBar'
import { Container, Title, InfoArea } from './styles';

export function Home(){
    return (
        <>
        <NavBar/>
        <Container>
            <SideBar/>
            <InfoArea>
                <SkillCard proficiency='High' skill='Python'/>
                <SkillCard proficiency='Low' skill='TypeScript'/>
                <SkillCard proficiency='High' skill='Python'/>
                <SkillCard proficiency='Low' skill='TypeScript'/>
                <SkillCard proficiency='High' skill='Python'/>
                <SkillCard proficiency='Low' skill='TypeScript'/>
                <SkillCard proficiency='High' skill='Python'/>
                <SkillCard proficiency='Low' skill='TypeScript'/>
                <Title>Site do Davi</Title>
            </InfoArea>
        </Container>
        </>
    );
}