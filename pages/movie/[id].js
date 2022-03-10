import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Grid } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Section = styled.section`
    min-height: 100vh;
`;

const Main = styled.main`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 75px;
    @media (min-width: 768px) {
        padding-top: 85px;
    }
    @media (min-width: 1280px) {
        max-width: 1060px;
        margin: 0 auto;
    }
`;

const WrapperImage = styled.div`
    display: block;
    padding: 10px 30px;
    img {
        margin: 0 auto;
        display: block;
    }
`;

const WrapperDetail = styled.div`
    padding: 10px 30px;
`;

const MovieTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
    display: block;
`;

const Genres = styled.span`
    color: #1a1d20;
    font-size: 12px;
    display: block;
    margin-top: 10px;
`;

const Description = styled.p`
    margin: 20px 0px;
    color: #757575;
    line-height: 1.5;
    font-size: 12px;
    display: block;
`;

const Awards = styled.p`
    font-weight: 400;
    color: #757575;
    line-height: 1.5;
    font-size: 12px;
    display: block;
`;

const Actors = styled.p`
    font-weight: 400;
    color: #757575;
    line-height: 1.5;
    font-size: 12px;
    display: block;
`;

const AddFavourite = styled.button`
    background-color: #405cf5;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    color: #fff;
    cursor: pointer;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    display: block;
    margin-top: 50px;
    &:focus {
        box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
    }
`;

const GoBack = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-bottom: 10px;
    span {
        margin-left: 5px;
        font-size: 14px;
        line-height: 16px;
    }
`;

const MovieDetail = ({ data }) => {

    const movieData = data
    const router = useRouter()
    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('next-movie-favourites')
		);

        if (movieFavourites.filter(e => e.imdbID === movieData.imdbID).length > 0) {
            setIsFavourite(false)
        } else {
            setIsFavourite(true)
        }
	}, [isFavourite]);

	const addFavouriteMovie = () => {
        setIsFavourite(false)
		let newFavourite,
            Title = movieData.Title,
            Poster = movieData.Poster,
            Year = movieData.Year,
            imdbID = movieData.imdbID;

        if (localStorage.getItem('next-movie-favourites') === null) {
            newFavourite = [];
        } else {
            // Parse the serialized data back into an array of objects
            newFavourite = JSON.parse(localStorage.getItem('next-movie-favourites'));
            // Check if movie is exist on localStorage
            if (newFavourite.filter(e => e.imdbID === imdbID).length > 0) {
                console.log('true')
                // setIsFavourite(false)
            } else {
                console.log('false')
                // Push the new data onto the array
                newFavourite.push({imdbID, Title, Poster, Year})
                localStorage.setItem('next-movie-favourites', JSON.stringify(newFavourite))
                // setIsFavourite(true)
            }
           
        }
        
	};

    const removeFavouriteMovie = () => {
        setIsFavourite(true)
        let movieID = movieData.imdbID
        console.log(movieID)
		let items = JSON.parse(localStorage.getItem('next-movie-favourites'))
        console.log(items);

        const newFavouriteList = items.filter((item) => item.imdbID !== movieID)
        console.log(newFavouriteList)
        localStorage.setItem('next-movie-favourites', JSON.stringify(newFavouriteList))
        
	};

    return (
        <>
            <Head>
				<title>{data.Title}</title>
				<meta name="description" content="Detail Movie" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Navbar />

            <Section>
                <Main>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <WrapperImage>
                                <img src={data.Poster} alt={data.Title} width="300" height="450"/>
                            </WrapperImage>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <WrapperDetail>
                                <GoBack onClick={() => router.back()}>
                                    <Image src="/icons/back.svg" width={10} height={10} alt="back-button"/>
                                    <span>Back</span>
                                </GoBack>
                                <MovieTitle>{data.Title}</MovieTitle>
                                <Genres>Genres : {data.Genre}</Genres>
                                <Description>Plot: {data.Plot}</Description>
                                <Awards><b>Awards: </b><br/> {data.Awards}</Awards>
                                <Actors><b>Actors:</b> <br/> {data.Actors}</Actors>
                            
                                {isFavourite ? (
                                    <AddFavourite onClick={addFavouriteMovie}>Add to My List</AddFavourite>
                                ) : (
                                    <AddFavourite onClick={removeFavouriteMovie}>Remove from My List</AddFavourite>
                                )}

                            </WrapperDetail>
                        </Grid>
                    </Grid>
                </Main>

                <Footer />
            </Section>
        </>
    )
}

export async function getServerSideProps(context) { 
    const { id } = context.query

    const res = await fetch(`https://www.omdbapi.com?i=${id}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await res.json()

    return { props: { data } }
}

export default MovieDetail