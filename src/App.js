import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main'
import FindMoim from './pages/FindMoim/FindMoim'
import MyMoim from './pages/MyMoim/MyMoim'
import Notice from './pages/Notice/Notice'
import Signin from './pages/Signin/Signin'
import Footer from './components/Footer/Footer';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

const wrapper = css`
  width: 100%;
  height: 100vh;
`

const content = css`
  min-height: calc(100vh - 110px);
`;

function App() {
  return (
    <div css={wrapper}>
      <Header/>
      <div css={content}>
        <Routes>
          <Route path='/' element={ <Main /> }/>
          <Route path='/moim/create' element={ <></> }/>
          <Route path='/moim/find' element={ <FindMoim /> }/>
          <Route path='/moim/mymoim' element={ <MyMoim /> }/>
          <Route path='/moim/notice' element={ <Notice /> }/>
          <Route path='/signin' element={ <Signin /> }/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
