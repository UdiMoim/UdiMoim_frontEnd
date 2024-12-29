import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const Title = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 110px 0 20px;
    background-color: #e9f0e2;
    width: 100%;
    span {
        font-size: 24px;
        font-weight: bold;
        width: 1200px;
        color: #242424;
    }
`;

export const NoticeList = css`
    width: 1200px;
    list-style: none;
    padding: 0;
    margin: 0;
    & * {
        color: #575757;
    }
`;

export const NoticeHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 30px 0;
    `;

export const NoticeTitle = css`
    font-weight: 600;
    font-size: 18px;
`;

export const NoticeDate = css`
    margin-right: 20px;
    font-size: 14px;
`;

export const ToggleButton = css`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
`;

export const NoticeContent = css`
    border-bottom: 1px solid #f0f0f0;
    padding: 70px 0;
    font-size: 16px;
    line-height: 1.5;
    white-space: pre-wrap; /* 개행 유지 */
`;
