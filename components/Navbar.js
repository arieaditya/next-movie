import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import {
    Grid,
    useMediaQuery
} from '@mui/material'
import DrawerComponent from './Drawer'

const NavbarWrapper = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    padding: 12px;
    box-shadow: 0px 1px 10px rgb(0 0 0 / 5%);
    background-color: white;
    height: 50px;
    align-items: center;
    display: flex;
    @media (min-width: 768px) {
        padding: 18px 20px;
        height: 63px;
    }
`;

const GridContainer = styled(Grid)`
    @media (min-width: 1280px) {
        max-width: 1060px;
        margin: 0 auto;
    }
`;

const GridCenter = styled(Grid)`
    text-align: center;
    margin-top: 10px;
`;

const GridRight = styled(Grid)`
    text-align: right;
`;

const WrapperLogo = styled.div`
    cursor: pointer;
    span {
        font-weight: 700;
    }
`;

const NavbarLinkDesktop = styled.div`
    a {
        cursor: pointer;
        margin-top: 5px;
        margin-right: 30px;
        &:last-of-type {
            margin-right: 20px;
        }
    }
`;

const Navbar = () => {

    const isMobile = useMediaQuery('(max-width:425px)')

    return (
        <NavbarWrapper>
            {isMobile ? (
                <Grid container>
                    <Grid item xs={3} md={4}>
                        <DrawerComponent/>
                    </Grid>
                    <GridCenter item xs={6} md={4}>
                        <Link href="/" passHref>
                            <a>📽&nbsp;&nbsp;<b>Next Movies</b></a>
                        </Link>
                    </GridCenter>
                    <Grid item xs={3}></Grid>
                </Grid>
            ) : (
                <GridContainer container>
                    <Grid item xs={6} md={6} lg={6}>
                        <Link href="/">
                            <WrapperLogo>
                                <span>📽&nbsp;&nbsp;Next Movies</span>
                            </WrapperLogo>
                        </Link>
                    </Grid>
                    <GridRight item xs={6} md={6} lg={6}>
                        <NavbarLinkDesktop>
                            <Link href="/movie/mylist" passHref>My List Movie</Link>
                        </NavbarLinkDesktop>
                    </GridRight>
                </GridContainer>
            )}
        </NavbarWrapper>
    );

}

export default Navbar;
