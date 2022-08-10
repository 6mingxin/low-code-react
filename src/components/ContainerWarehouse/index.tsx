import React from 'react'
import styled from '@emotion/styled'

export default () => {
  return <Warehouse>11</Warehouse>
}

const Warehouse = styled.div`
  width: 400px;
  min-height: calc(100vh - 60px);
  background-color: #fff;
  position: relative;
  z-index: 9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
`
