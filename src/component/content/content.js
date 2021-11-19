import React, { useEffect, useState } from "react";
import styled from "styled-components";

import movieData, { IMAGE_URL } from "./movieData";
import MovieObject from "./movie";
import WishListed from "./wishlisted";

const Main = styled.div`
    color: white;
    padding: 10px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;

const WishlistButton = styled.button`
    background-color: white;
    position: fixed;
    padding: 10px;
    bottom: 0%;
    border-radius: 10px;
    outline: none;
    border: none;
    margin-left:20px ;
    margin-bottom:20px ;
    
`;

const ListButton = styled.button`
    background-color: white;
    position: fixed;
    padding: 10px;
    bottom: 0%;
    border-radius: 10px;
    outline: none;
    border: none;
    margin-left:20px ;
    margin-bottom:20px ;
`;


function Content(){
    const[isMovieList, setIsMovieList] = useState(true);
    const[wishlist, setWishlist] = useState([]);

    function alternateList (){
        setIsMovieList((prevIsMovieList) => !prevIsMovieList)
    };

    useEffect(() => {
        const WishlistCandidate = localStorage.getItem("wishlist");
    
        if (WishlistCandidate !== null && WishlistCandidate !== undefined) {
          setWishlist(JSON.parse(WishlistCandidate));
        }
    
    }, [])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    function addToWishList (addedMovieTitle){
        setWishlist((prevWishList) => {
            let isInWishlist = false;
            for (const wishlistedMovie of prevWishList){
                if(addedMovieTitle === wishlistedMovie){
                    isInWishlist = true;
                    break
                }
            }
            if(isInWishlist){
                return prevWishList;
            } else {
                return prevWishList.concat(addedMovieTitle);
            }
        })
    };

    function removeFromWishlist(removedMovieTitle) {
        setWishlist((prevWishList) => {
          return prevWishList.filter((value, index, arr) => {
            return value !== removedMovieTitle;
          });
        })
    };

    function movieMaker(){
        let movieList = [];
        for (const movie of movieData){
           movieList.push(<MovieObject title={movie.title} posterPath={`${IMAGE_URL}${movie.poster_path}`} summary = {movie.overview} addToWishList={addToWishList}/>)
        };
        return movieList;
    };

    function wishlistObjectMaker(){
        let wishlistObjectList = [];
        for (const movieTitle of wishlist){
            wishlistObjectList.push(<WishListed title = {movieTitle} removeFromWishlist={removeFromWishlist} />)
        }

        return wishlistObjectList;
    }

    if(isMovieList) {
        return (
            <Main>
                <WishlistButton onClick={alternateList}> Wishlist </WishlistButton>
                <ListContainer>
                    {movieMaker()}
                </ListContainer>
            </Main>

        )
    } else {
        return (
            <Main>
                <ListButton onClick={alternateList}> Back to List </ListButton>
                {wishlistObjectMaker()}
            </Main>
        )
    }

};

export default Content;