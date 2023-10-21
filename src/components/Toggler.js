import React from "react";
import { func, string } from 'prop-types';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import { lightTheme } from "./styles/GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: right;
  margin-top: 4%;
  cursor: pointer;
`;
const Icon = styled(FontAwesomeIcon)`
icon: ${faMoon};
size="lg";
padding: 0 1em;
`;

const Toggle = (props) => {
    return (
        <Container onClick={props.toggleTheme}>
            <span><Icon icon={faMoon} />{props.theme === "light"? "Dark Mode":"Light Mode"}</span>
        </Container>
        
    );
  };

  Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
  export default Toggle;