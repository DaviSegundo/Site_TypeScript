import React from 'react';
import { Infos, Skill, Image, DiagonalContainer, DiagonalText } from './styles';

interface Props {
    proficiency : string;
    skill : string;
}

export function SkillCard({proficiency, skill}:Props){
    return (
        <DiagonalContainer>
            <DiagonalText>
                    {proficiency}
            </DiagonalText>
            <Infos>
                <Image src={require('../../assets/python.svg').default} width={100} height={100}/>
                <Skill>
                    {skill}
                </Skill>
            </Infos>
        </DiagonalContainer>
    );
}