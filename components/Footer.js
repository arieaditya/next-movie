import React from 'react'
import styled from '@emotion/styled'

const CopyrightWrapper = styled.div`
    bottom: 0;
    position: absolute;
    display: block;
    left: 0;
    right: 0;
`;

const Copyright = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #2D2D2D;
    padding: 15px 0px;
    display: block;
`;

const Footer = () => {
    return (
        <CopyrightWrapper>
            <Copyright>Copyright © {new Date().getFullYear()} Arie Aditya Nugraha. All right reserved</Copyright>
        </CopyrightWrapper>
    )
}

export default Footer