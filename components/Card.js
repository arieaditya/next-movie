import Link from "next/link"
import styled from "@emotion/styled"

const LinkPointer = styled(Link)`
    cursor: pointer;
    z-index: 10;
`;

const MoviePoster = styled.div`
    border-radius: 4px;
    height: 400px;
    overflow: hidden;
    position: relative;
    width: 100%;
    @media (max-width: 425px) {
        margin-bottom: 30px;
    }
`;

const WrapperCard = styled.div`
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
    @media (max-width: 425px) {
        text-align: center;
        width: 100%;
    }
`;

const WrapperMask = styled.div`
    background: linear-gradient(180deg,transparent,#000 85%);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`;

const Label = styled.div`
    bottom: 0;
    padding: 20px 28px;
    position: absolute;
    text-align: left;
    width: 100%;
    small {
        font-size: .75rem;
        font-weight: 400;
        color: white;
        text-transform: Capitalize;
    }
    h2 {
        color: white;
        font-size: 1.1875rem;
        font-weight: 600;
        letter-spacing: .5px;
        line-height: 26px;
        width: 100%;
        word-break: break-word;
        span {
            font-size: .75rem;
            font-weight: 400;
            color: white;
        }
    }
`;

const Card = ({ Title, Year, Poster, imdbID, Type }) => {

    return (
        <>
            <LinkPointer 
                href="/movie/[id]"
                as={`/movie/${imdbID}`}
                passHref
            >
                <a>
                    <WrapperCard>
                        <MoviePoster>
                            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450'} width="300" height="450" alt={Title}/>
                            <WrapperMask>
                                <Label>
                                    <small>{Type}</small>
                                    <h2>{Title} <span>({Year})</span></h2>
                                </Label>
                            </WrapperMask>
                        </MoviePoster>
                    </WrapperCard>
                    
                </a>
            </LinkPointer>
        </>
    );
};

export default Card