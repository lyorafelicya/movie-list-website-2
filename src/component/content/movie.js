import React, { useState } from "react";
import styled from "styled-components";


const Main = styled.div`
    color: white;
    width: 300px;
    text-align: center;
`;

const Poster = styled.img`
    width: 75%;
    border-radius: 20px;
`;

const Title = styled.h2`
    font-size: 20px;
`;

const Summary = styled.p`
    display: ${(props) => {
        if(props.display)
        {
            return "inline-block";
        } else 
        {
            return "none";
        }
    }};
`;

const AddToWishList = styled.button`
    padding: 10px;
    margin-top: 10px;
    background-color: #E50914;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
`;

function MovieObject(props){
    const[showSummary, setShowSummary] = useState(false);


    function alternateShowSummary(){
        setShowSummary((prevShowSummary) => !prevShowSummary);
    }

    console.log(props);
    return(
        <Main>
            <Poster onClick={alternateShowSummary} src={`${props.posterPath}`}/>
            <Title>{props.title}</Title>
            <Summary display = {showSummary}>{props.summary}</Summary>
            <AddToWishList onClick={() => {props.addToWishList(props.title)}}> Add to Wishlist </AddToWishList>
        </Main>
    )

}

export default MovieObject;