import React from 'react'
import { Button } from 'react-vant'
import { ButtonProps } from 'react-vant'
import { PropsType, StyleType } from '@/type'
import styled from '@emotion/styled'

export default function TyButton(props: { style: StyleType; attr: PropsType & ButtonProps; status: boolean }) {
  console.log('Button', props)
  const { attr, style, status } = props
  return (
    <ButtonBox style={{ opacity: status ? '1' : '0.5' }}>
      <Button {...attr} style={style}>
        {attr.value || '按钮'}
      </Button>
    </ButtonBox>
  )
}

const ButtonBox = styled.div`
  height: 40px;
  .rv-button::before {
    content: none;
  }
`
