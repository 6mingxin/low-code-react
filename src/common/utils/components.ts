// 编辑器左侧组件列表
const list = [
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
        position: 'relative',
        transform: 'none',
        top: '0',
        left: '0',
        zIndex: '1',
      },
    },
  },
  {
    component: 'TyImage',
    label: '图片',
    icon: 'icon-tupiantianchong',
    id: 3,
    setting: {
      props: {
        value: [], //多张图片
        fit: 'widthFix',
        sticky: false,
        uuid: '',
        onGoto: '', //点击跳转的路径，目前只有navigateTo的跳转
      },
      style: {
        width: '100%',
        height: '',
        borderRadius: '0',
        position: 'relative',
        transform: 'none',
        top: '0',
        left: '0',
        zIndex: '1',
      },
    },
  },
]

export default list
