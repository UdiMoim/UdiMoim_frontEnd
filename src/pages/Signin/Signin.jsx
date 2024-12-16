import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

function Signin() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => setIsRightPanelActive(true);
    const handleSignInClick = () => setIsRightPanelActive(false);

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SSigninContainer(isRightPanelActive)}>
                    <form>
                        <h1>로그인</h1>
                        <div css={S.SSocialContainer}>
                            <a href="#"><RiKakaoTalkFill size={24}/></a>
                            <a href="#"><FaGoogle size={22}/></a>
                            <a href="#"><SiNaver size={19}/></a>
                        </div>
                        <span>이메일로 로그인</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>로그인</button>
                    </form>
                </div>

                <div css={S.SSignupContainer(isRightPanelActive)}>
                    <form>
                        <h1>회원가입</h1>
                        <div css={S.SSocialContainer}>
                            <a href="#"><RiKakaoTalkFill size={24}/></a>
                            <a href="#"><FaGoogle size={22}/></a>
                            <a href="#"><SiNaver size={19}/></a>
                        </div>
                        <span>이메일로 회원가입</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>회원가입</button>
                    </form>
                </div>

                <div css={S.SOverlayContainer(isRightPanelActive)}>
                    <div css={S.SOverlay(isRightPanelActive)}>
                        <div css={S.SOverlayPanelLeft(isRightPanelActive)}>
                            <h1>돌아오셨군요!</h1>
                            <p>로그인 후 모임을 즐겨보세요!</p>
                            <button onClick={handleSignInClick}>로그인</button>
                        </div>
                        <div css={S.SOverlayPanelRight(isRightPanelActive)}>
                            <h1>어서오세요!</h1>
                            <p>회원가입 후 나에게 맞는 모임을 찾아보세요!</p>
                            <button onClick={handleSignUpClick}>회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
