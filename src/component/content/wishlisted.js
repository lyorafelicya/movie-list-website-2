import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
`;

const Title = styled.p`
    padding: 0 10px;
    font-size: 20px;
`;

const DeleteButton = styled.button`
    padding: 5px;
    background-color:darkgrey;
    margin-left:10px ;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
`;

function WishListed(props) {
    return(
        <Main>
            <Title>{props.title}</Title>
            <DeleteButton onClick={() => {props.removeFromWishlist(props.title)}}> Delete </DeleteButton>
        </Main>
    )

}

export default WishListed;