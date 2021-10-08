import React from "react";
import {Container, Select, Page1, Logo, Logo2, Geral} from "./styles";

export function NavBar(){
    const [pageActive, setPageActive] = React.useState(0)

    return(
        <Geral>
            <Logo>
                DS
            </Logo>
            <Container>
                <Page1 active={pageActive === 0} onClick={() => setPageActive(0)}>
                    <span>Home</span>{pageActive === 0 && <Select/>}
                </Page1>
                <Page1 active={pageActive === 1} onClick={() => setPageActive(1)}>
                    <span>About</span>{pageActive === 1 && <Select/>}
                </Page1>
                <Page1 active={pageActive === 2} onClick={() => setPageActive(2)}>
                    <span>Projects</span>{pageActive === 2 && <Select/>}
                </Page1>
            </Container>
            <Logo2>
            </Logo2>
        </Geral>
    )
}