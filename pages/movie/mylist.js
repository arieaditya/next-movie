import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Head from 'next/head'
import MovieList from '../../components/MovieList'
import Navbar from '../../components/Navbar'

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

const ErrorMessage = styled.span`
    font-size: 14px;
    line-height: 21px;
    color: #2d2d2d;
    a {
        color: blue;
        cursor: pointer;
    }
`;

const MyListMovie = () => {
    const [favourite, setFavourites] = useState([])
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('next-movie-favourites')
		);

		if (movieFavourites) {
            movieFavourites.length > 0 ? (
                setFavourites(movieFavourites)
            ) : (
                setEmpty(true)
            )
		} 
	}, []);

    return (
        <>
            <Head>
				<title>My List Movie</title>
				<meta name="description" content="Next Movie My List" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Navbar />

            <Main>

                {empty ? (
                    <ErrorMessage>Belum ada list movie yang ditambahkan. <br/>Silahkan kembali ke <Link href="/"><a>halaman utama</a></Link></ErrorMessage>
                ) : (
                    <MovieList movies={favourite} />
                )}
                
            </Main>
        </>
    )
}

export default MyListMovie