import React from "react";
import styled from "styled-components";

import logo from "./logo.png";

const Main = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;

const Title = styled.h1`
    margin-left: 20px;
`;

const Logo = styled.img`
    max-width: 80px;
    float: left;
`;

function Header ()
{
    return (
        <Main>
            
            <Title> <Logo src={logo}/> Cinemaxx</Title>
        </Main>
    );
};

export default Header;