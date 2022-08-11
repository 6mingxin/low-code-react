interface componentsType {
  component: string
  icon: string
  label: string
  id: number
  setting: SettingType
}
interface SettingType {
  style: StyleType
  props: PropsType
}
interface StyleType {
  transform: string
  borderRadius: string
  top: string
  left: string
  width: string
  position: string
  height: string
  zIndex: string
}
interface PropsType {
  sticky: boolean
  onGoto: string
  value: string | []
  uuid: string
  fit?: string
}
