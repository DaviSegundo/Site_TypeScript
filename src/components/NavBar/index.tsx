import React from "react";
import {Container, Page1} from "./styles";

export function NavBar(){
    const [pageActive, setPageActive] = React.useState(0)

    return(
        <Container>
            <Page1 active={pageActive === 0} onClick={() => setPageActive(0)}>Home</Page1>
            <Page1 active={pageActive === 1} onClick={() => setPageActive(1)}>About</Page1>
            <Page1 active={pageActive === 2} onClick={() => setPageActive(2)}>Projects</Page1>
        </Container>
    )
}