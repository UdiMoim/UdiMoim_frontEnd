import { css, keyframes } from '@emotion/react';

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
    height: calc(100vh - 110px);
    
    h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
    }

    h2 {
        text-align: center;
    }

    p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }

    span {
        font-size: 12px;
    }

    a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    button {
        border-radius: 20px;
        border: 1px solid #75c32c;
        background-color: #75c32c;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
        &:active {
            transform: scale(0.95);
        }
        &:focus {
            outline: none;
        }
    }

    form {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }

    input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }
`;

export const SContainer = css`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0px 28px rgba(0,0,0,0.25), 0 0px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
`;

export const formContainer = css`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
`;

export const SSigninContainer = (isRightPanelActive) => css`
    ${formContainer}
    left: 0;
    width: 50%;
    z-index: 2;
    transform: ${isRightPanelActive ? 'translateX(100%)' : 'translateX(0)'};
`;

// Keyframes 애니메이션 정의
export const show = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const SSignupContainer = (isRightPanelActive) => css`
    ${formContainer}
    left: 0;
    width: 50%;
    opacity: ${isRightPanelActive ? '1' : '0'};
    z-index: ${isRightPanelActive ? '5' : '1'};
    transform: ${isRightPanelActive ? 'translateX(100%)' : 'translateX(0)'};
    animation: ${isRightPanelActive ? `${show} 0.6s` : 'none'};
`;

export const SOverlayContainer = (isRightPanelActive) => css`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    transform: ${isRightPanelActive ? 'translateX(-100%)' : 'translateX(0)'};
`;

export const SOverlay = (isRightPanelActive) => css`
    background: rgb(117,195,44);
    background: linear-gradient(90deg, rgba(117,195,44,1) 0%, rgba(196,215,178,1) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: ${isRightPanelActive ? 'translateX(50%)' : 'translateX(0)'};
    transition: transform 0.6s ease-in-out;
    
    & * {
        color: #FFFFFF;
        button {
            background-color: transparent;
            border-color: #FFFFFF;
        }
    }
`;

// Panel 공통 스타일
export const panelBase = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const SOverlayPanelLeft = (isRightPanelActive) => css`
    ${panelBase};
    transform: ${isRightPanelActive ? 'translateX(0)' : 'translateX(-20%)'};
`;

export const SOverlayPanelRight = (isRightPanelActive) => css`
    ${panelBase};
    right: 0;
    transform: ${isRightPanelActive ? 'translateX(20%)' : 'translateX(0)'};
`;

export const SSocialContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    & a {
        border: 1px solid #DDDDDD;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
    }
`;