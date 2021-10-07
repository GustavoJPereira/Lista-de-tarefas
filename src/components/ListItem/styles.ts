import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) =>( `
display: flex;
background-color: #B0B6BA;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

input {
 width: 25px;
 height: 25px;   
 margin-right: 5px;
 color: #191919;
}

label {
    color: #191919;
    text-decoration: ${done ? 'line-through' : 'initial'};
}
`));