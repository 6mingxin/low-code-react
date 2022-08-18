import React from 'react'
import Image from 'react-vant/es/image/Image'
import { ImageProps } from 'react-vant'
import { SettingType } from '@/type'

export default function TyImage(props: SettingType<ImageProps>) {
  return (
    <div>
      <Image {...props}></Image>
    </div>
  )
}
