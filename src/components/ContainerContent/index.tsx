import React, { MouseEvent, DragEvent } from 'react'
import styled from '@emotion/styled'
import NavBar from '@/components/NavBar'

const ContainerContent = () => {
  const handleDrop = (event: DragEvent<HTMLElement>) => {
    const index = Number(event.dataTransfer.getData('index'))
    console.log(index)
  }
  const handleDragOver = (event: DragEvent<HTMLElement>) => {
    console.log('移动', event)
    event.preventDefault()
  }
  const editContextmenu = (e: MouseEvent<HTMLElement>) => {
    console.log('右击', e)
    e.preventDefault()
  }
  return (
    <Content>
      <NavBar title={'测试'} />
      <Main onDrop={handleDrop} onDragOver={handleDragOver} onContextMenu={editContextmenu}></Main>
    </Content>
  )
}
export default ContainerContent

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
