import React, { useState } from "react"
import Link from 'next/link'
import styled from "@emotion/styled"

import { Drawer } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const HamburgerMenu = styled(MenuIcon)`
    fill: #FD5F00;
`;

const StyledPaper = styled.div`
    width: 80%;
`;

const Card = styled.div`
    background: #FFFFFF;
    padding: 20px 15px;
`;

const PrimaryMenu = styled.ul`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: #2D2D2D;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        padding: 10px 0px 10px 0px;
        align-items: center;
        display: flex;
    }
`;


const DrawerComponent = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ component : StyledPaper }}
            >
                <Card>
                    <PrimaryMenu>
                        <li>
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/movie/mylist">
                                <span>My List Movie</span>
                            </Link>
                        </li>
                    </PrimaryMenu>
                </Card>
            </Drawer>
            <IconButton
                onClick={() => setOpen(!open)}
            >
                <HamburgerMenu/>
            </IconButton>
        </>
    );
}

export default DrawerComponent