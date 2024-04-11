import styled from "@emotion/styled";

type ButtonProps = {
    color?: string
}

const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    min-width: 100px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    background-color: ${props => props.color || "red"};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s;

    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        opacity: 0.8;
    }
`;

Button.defaultProps = {
    color: "red"
};

export default Button;
