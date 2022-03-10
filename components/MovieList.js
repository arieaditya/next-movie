
import Card from './Card'
import { Grid } from '@mui/material'
// import styled from '@emotion/styled'

export const MovieList = ({ movies }) => {
    if (!movies === undefined) {
        return null;
    }
    
    return (
        <main>
            <Grid container>
                {movies.map((movie, index) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Card key={index} {...movie} />
                        </Grid>
                    );
                })}
            </Grid>
        </main>
    );
};

export default MovieList
