import React from 'react';
import { Container, Media } from './styles';

export function SideBar(){
    return (
        <Container>
            <Media src={require('../../assets/python.svg').default} width={40} height={40}/>
        </Container>
    );
}