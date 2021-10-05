import React from 'react';
import { Container, Infos, Proficiency, Skill, Image } from './styles';

interface Props {
    proficiency : string;
    skill : string;
}

export function SkillCard({proficiency, skill}:Props){
    return (
        <Container>
            <Infos>
                <Proficiency>
                    Proficiency: {proficiency}
                </Proficiency>
                <Image src={'https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg'} width={100} height={100}/>
                <Skill>
                    {skill}
                </Skill>
            </Infos>
        </Container>
    );
}