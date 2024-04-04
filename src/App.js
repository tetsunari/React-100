import styled from "@emotion/styled";
import React from "react";

const AppWrapper = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HelloWorld = styled.p`
    font-size: 2rem;
    color: blue;
`;

const App = () => {
    return (
        <AppWrapper>
            <HelloWorld>Hello World!</HelloWorld>
        </AppWrapper>
    );
}

export default App;
