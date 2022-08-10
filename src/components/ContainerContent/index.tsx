import React from 'react'
import styled from '@emotion/styled'
import NavBar from '@/components/NavBar'

export default () => {
  return (
    <Content>
      <NavBar title={'测试'} />
      <Main></Main>
    </Content>
  )
}

const Content = styled.div`
  width: 375px;
  height: 812px;
  background-color: #fff;
  border-radius: 32px;
  position: relative;
  z-index: 9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px 0;
`
const Main = styled.div`
  height: calc(100% - 88px);
  width: 100%;
  overflow-y: scroll;
`
