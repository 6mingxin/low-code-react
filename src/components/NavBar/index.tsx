import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
}
export default (props: Props) => {
  return (
    <div>
      <div style={{ height: '44px', backgroundColor: '#fff' }} />
      <NavbarContent>{props.title}</NavbarContent>
    </div>
  )
}

const NavbarContent = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333;
  border-bottom: 1px solid #f4f4f4;
`
