import { useState } from "react";
import styled from "@emotion/styled";

const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
    border-radian: 100px;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-redius: 100px;
    padding: 60px 100px;
    background-color: white;
`;
const H1 = styled.h1`
    font-weight: bold;
    font-size: 50px;
`;
const Button = styled.button`
    padding: 10px 20px;
    margin: 20px;
    border-radius: 100px;
    font-weight: bold;
    font-size: 25px;
    cursor: pointer;
`;

export default function App () {
    const [count, setCount] = useState(0);
    return (
        <Outer>
            <Inner>
                <h1><i>- Counter -</i></h1>
                <H1>{count}</H1>
                <div>
                    <Button onClick={() => setCount(count + 1)}>+</Button>
                    <Button onClick={() => setCount(count - 1)}>-</Button>
                </div>
            </Inner>
        </Outer>
    );
};
