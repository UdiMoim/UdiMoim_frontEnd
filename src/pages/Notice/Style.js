import { css } from '@emotion/react';

/** 전체 레이아웃 */
export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 110px);
    padding: 20px;
    font-family: 'Arial', sans-serif;
`;

export const Container = css`
    width: 900px;
`;

export const Title = css`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const NoticeList = css`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NoticeItem = css`
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    margin-bottom: 20px;
`;

export const NoticeHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NoticeTitle = css`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

export const NoticeDate = css`
    font-size: 14px;
    color: #888;
`;

export const ToggleButton = css`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #007BFF;

    &:hover {
        color: #0056b3;
    }
`;

export const NoticeContent = css`
    margin-top: 10px;
    font-size: 14px;
    color: #555;
    line-height: 1.5;
    white-space: pre-wrap; /* 개행 유지 */
`;
