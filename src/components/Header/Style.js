import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    width: 100%;
    height: 90px;
    z-index: 100;
`;

export const SLogo = css`
    height: 90px;
`;

export const SMenuContainer = css`
    display: flex;
    justify-content: start;
    width: 1000px;
    a {
        transition: all 0.1s ease;
        margin-right: 40px;
        padding: 0px 10px;
        height: 45px;
        box-sizing: border-box;
        line-height: 45px;
        /* background-color: #e2ebd8; */
        font-weight: 600;
        color: #aaa;
        font-size: 18px;
        :hover {
            color: #444;
            font-weight: 900;
        }
    }
`;

export const SSigninContainder = css`
    a {
        transition: all 0.1s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding: 10px 40px;
        background-color: #f4f4f4;
        height: 45px;

        :hover {
            background-color: #d7d7d7;
        }
    }
`;