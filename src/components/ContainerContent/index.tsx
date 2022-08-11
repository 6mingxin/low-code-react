import React, { MouseEvent, DragEvent } from 'react'
import styled from '@emotion/styled'
import NavBar from '@/components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { useChangeComponent } from '@/store/components'
import components from '@/common/utils/components'
import { stoer } from '@/store'

export default () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state) as stoer
  const { addComponent } = useChangeComponent()

  const handleDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
    const index = Number(event.dataTransfer.getData('index'))
    dispatch(addComponent(components[index]))
    // console.log(store)
    // dispatch({ type: 'DEL' })
  }

  const editContextmenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }
  return (
    <Content style={{ zoom: store.zoom }}>
      <NavBar title={'测试'} />
      <Main onDrop={handleDrop} onDragOver={e => e.preventDefault()} onContextMenu={editContextmenu}></Main>
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
  overflow-y: scroll;
`
