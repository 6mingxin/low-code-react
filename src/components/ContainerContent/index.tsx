import React, { MouseEvent, DragEvent, useState } from 'react'
import styled from '@emotion/styled'
import NavBar from '@/components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { useChangeComponent } from '@/store/components'
import { guid } from '@/common/utils'
import Editer from '@/components/Editer'

import components from '@/common/utils/components'

import { storeType } from '@/store'
import { componentsType } from '@/type'
import { selectComActionType } from '@/store/selectCom'

export default () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state) as storeType
  const { addComponent, updateComponent } = useChangeComponent()
  const [isPush, setIsPush] = useState(false)

  const handleDrop = (event: DragEvent<HTMLElement>) => {
    console.log(event.dataTransfer.getData('index'))
    event.preventDefault()
    event.stopPropagation()
    setIsPush(false)

    const { selectCom } = store
    selectCom.component.status = true
    dispatch(updateComponent(selectCom.component as componentsType))
    dispatch<selectComActionType>({ type: 'SELECT_CHANGE', ...selectCom })
  }
  const HandleDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    if (isPush) return
    setIsPush(true)
    console.log(store)
    dispatch(addComponent(store.selectCom.component as componentsType))
    // handlerSelectCom(temporary.setting.attr.uuid, store.components)
  }

  const editContextmenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <Content style={{ zoom: store.zoom }}>
      <NavBar title={'测试'} />
      <Main onDrop={handleDrop} onDragOver={HandleDragOver} onContextMenu={editContextmenu}>
        <Editer />
      </Main>
    </Content>
  )
}

const Content = styled.div`
  width: 375px;
  height: 812px;
  background-color: #fff;
  border-radius: 32px;
  position: relative;
  z-index: 9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px 0;
`
const Main = styled.div`
  height: calc(100% - 88px);
  width: 100%;
  //overflow-y: scroll;
  //position: relative;
`
