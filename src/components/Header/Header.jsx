import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import logo from "../../assets/HeaderLogo.png"
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div css={S.SLayout}>
            <div>
                <Link to={'/'}><img src={logo} css={S.SLogo}/></Link>
            </div>
            <div css={S.SMenuContainer}>
                <Link to={'/moim/find'}>모임 찾기</Link>
                <Link to={'/moim/mymoim'}>내 모임</Link>
                <Link to={'/moim/notice'}>공지사항</Link>
            </div>
            <div css={S.SSigninContainder}>
                <Link to={'/signin'}>로그인</Link>
            </div>
        </div>
    );
}

export default Header;