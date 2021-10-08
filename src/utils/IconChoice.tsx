import {SiInstagram, SiLinkedin, SiGithub, SiPython, SiTypescript} from 'react-icons/si'

// Props: 
// (icon : string) => Represents the name of the icon to render;
// (color : string) => Represents the color of the icon to render;
// (size : number) => Represents the size of the icon to render;
interface Props {
    icon: string,
    color: string,
    size: number,
}

// Renderer (Example of component call: <IconChoice icon="confirm" color="green" size={20}/>)
export function IconChoice({icon, color, size}: Props) {
    switch(icon){
        case 'instagram':
            return <SiInstagram color={color} size={size}/>
        case 'linkedin':
            return <SiLinkedin color={color} size={size}/>
        case 'github':
            return <SiGithub color={color} size={size}/>
        case 'python':
            return <SiPython color={color} size={size}/>
        case 'type':
            return <SiTypescript color={color} size={size}/>
        default:
            return <></>;
    }
}