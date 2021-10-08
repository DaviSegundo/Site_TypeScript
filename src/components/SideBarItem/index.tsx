import React from 'react';
import { Container, Button } from './styles';
import {IconChoice} from '../../utils/IconChoice'

interface Props {
    link : string;
    icon : string;
}

export function SideBarItem({link, icon}:Props){
    return (
        <Container>
            <Button>
                <a href={link} target="_blank" rel="noreferrer">
                <IconChoice icon={icon} color="white" size={35}/>
                </a>
            </Button>
        </Container>
    );
}