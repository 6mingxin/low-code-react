import { ImageFit } from 'react-vant'

interface componentsType {
  component: string
  icon: string
  label: string
  id: number
  status: boolean
  setting: SettingType
}
interface SettingType<T> {
  style: StyleType
  attr: PropsType & T
}
interface StyleType {
  transform?: string
  borderRadius?: string
  top?: string
  left?: string
  width: string
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'
  height?: string
  zIndex?: string
}
interface PropsType {
  sticky: boolean
  onGoto: string
  value: string | []
  uuid: string
}
