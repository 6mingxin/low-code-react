import React from 'react'
import styled from '@emotion/styled'

export default () => {
  return <Header></Header>
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 10;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
`
