// 编辑器左侧组件列表
import { componentsType, SettingType } from '@/type'
import { ButtonType } from 'react-vant'
import { ImageProps } from 'react-vant'
const list: componentsType[] = [
  {
    component: 'TyButton',
    label: '按钮',
    icon: 'icon-24gf-stopCircle',
    id: 2,
    setting: {
      props: {
        value: '',
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
    } as SettingType<ButtonType>,
  },
  {
    component: 'TyImage',
    label: '图片',
    icon: 'icon-tupiantianchong',
    id: 3,
    setting: {
      props: {
        value: [], //多张图片
        fit: 'fill',
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
