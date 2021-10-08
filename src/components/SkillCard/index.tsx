import React from 'react';
import { Infos, Skill, DiagonalContainer, DiagonalText } from './styles';
import { IconChoice } from '../../utils/IconChoice'

interface Props {
    proficiency : string;
    skill : string;
    icon : string;
}

export function SkillCard({proficiency, skill, icon}:Props){
    return (
        <DiagonalContainer>
            <DiagonalText>
                    {proficiency}
            </DiagonalText>
            <Infos>
                <IconChoice icon={icon} color="white" size={100}/>
                <Skill>
                    {skill}
                </Skill>
            </Infos>
        </DiagonalContainer>
    );
}