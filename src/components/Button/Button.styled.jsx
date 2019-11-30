import styled from "styled-components";

export const StyledButton = styled.button`
    width: 13.5rem;
    height: 3rem;
    border: 2px solid ${props => props.blue ? "#215F68" : "white"};
    color: ${props => props.blue ? "#215F68" : "white"};
    font-size: 14px;
    font-weight: 600;
    background: none;
    text-transform: uppercase;
    letter-spacing: 3px
    cursor: pointer;
    transition: .5s;
    font-size: .9rem;

    :hover {
        background: rgba(255, 255, 255, 0.15);
    }
`