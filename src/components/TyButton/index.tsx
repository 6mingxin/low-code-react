import React from 'react'
import Button from 'react-vant/es/button/Button'
import { ButtonType } from 'react-vant'
import { SettingType } from '@/type'

export default function TyButton(props: SettingType<ButtonType>) {
  return (
    <div>
      <Button disabled={true} {...props}></Button>
    </div>
  )
}
