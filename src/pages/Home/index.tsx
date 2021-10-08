import React from 'react';
import { NavBar } from '../../components/NavBar';
import { SkillCard } from '../../components/SkillCard';
import { SideBar } from '../../components/SideBar'
import { Container, InfoArea } from './styles';

export function Home(){
    return (
        <>
        <NavBar/>
        <Container>
            <SideBar/>
            <InfoArea>
                <SkillCard proficiency='High' skill='Python' icon='python'/>
                <SkillCard proficiency='Low' skill='TypeScript' icon='type'/>
            </InfoArea>
        </Container>
        </>
    );
}