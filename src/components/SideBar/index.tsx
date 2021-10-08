import React from 'react';
import { Container } from './styles';
import { SideBarItem } from '../SideBarItem'

export function SideBar(){
    const medias = [
        {
            link: 'https://github.com/DaviSegundo',
            icon: 'github'
        },
        {
            link: 'https://www.linkedin.com/in/davi-segundo-881401210/',
            icon: 'linkedin'
        },
        {
            link: 'https://www.instagram.com/davisp.exe/',
            icon: 'instagram'
        }
    ]

    return (
        <Container>
            {
                medias.map((media) => (
                    <SideBarItem link={media.link} icon={media.icon}/>
                ))
            }
        </Container>
    );
}