import React from 'react'
import Image from 'react-vant/es/image/Image'
import { ButtonProps, ImageProps } from 'react-vant'
import { PropsType, SettingType, StyleType } from '@/type'
import styled from '@emotion/styled'

export default function TyImage(props: { style: StyleType; attr: PropsType & ImageProps; status: boolean }) {
  const { attr, style, status } = props
  const src = attr.value as []
  return <div>{src.length ? src.map((e: string) => <Image {...attr} style={style} src={e}></Image>) : <ImageEmpty></ImageEmpty>}</div>
}

const ImageEmpty = styled.div`
  height: 40px;
  width: 100%;
  background-color: #f4f4f4;
`
