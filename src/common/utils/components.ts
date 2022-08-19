// 编辑器左侧组件列表
import { componentsType, SettingType } from '@/type'
import { ButtonType } from 'react-vant'
import { ImageProps } from 'react-vant'
import { ButtonProps } from 'react-vant/es/button/PropsType'
const list: componentsType[] = [
  {
    component: 'TyButton',
    label: '按钮',
    icon: 'icon-24gf-stopCircle',
    id: 2,
    status: false,
    setting: {
      attr: {
        value: '',
        sticky: false,
        uuid: '',
        onGoto: '', //点击跳转的路径，目前只有navigateTo的跳转
        type: 'primary',
      },
      style: {
        width: '100%',
        height: '',
        borderRadius: '0',
        position: 'static',
        transform: 'none',
        top: '0',
        left: '0',
        zIndex: '1',
      },
    } as SettingType<ButtonProps>,
  },
  {
    component: 'TyImage',
    label: '图片',
    icon: 'icon-tupiantianchong',
    id: 3,
    status: false,
    setting: {
      attr: {
        value: [], //多张图片
        sticky: false,
        uuid: '',
        onGoto: '', //点击跳转的路径，目前只有navigateTo的跳转
      },
      style: {
        width: '100%',
        height: '',
        borderRadius: '0',
        position: 'static',
        transform: 'none',
        top: '0',
        left: '0',
        zIndex: '1',
      },
    } as SettingType<ImageProps>,
  },
]

export default list
