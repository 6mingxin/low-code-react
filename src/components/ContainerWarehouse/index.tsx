import React, { DragEvent } from 'react'
import styled from '@emotion/styled'
import components from '@/common/utils/components'

export default () => {
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    if (event !== null && event.target instanceof HTMLElement) {
      // console.log(event.target.dataset.index)
      event.dataTransfer.setData('index', event.target.dataset.index || '')
    }
  }
  const dragEnd = (event: DragEvent<HTMLDivElement>) => {
    // console.log(event)
  }
  return (
    <Warehouse onDragStart={handleDragStart} onDragEnd={dragEnd}>
      {components.map((e, i) => (
        <WarehouseItem draggable key={e.component} data-index={i}>
          <WarehouseItemIcon className={'iconfont ' + e.icon} />
          <WarehouseItemTitle>{e.label}</WarehouseItemTitle>
        </WarehouseItem>
      ))}
    </Warehouse>
  )
}

const Warehouse = styled.div`
  width: 400px;
  min-height: calc(100vh - 60px);
  background-color: #fff;
  position: relative;
  z-index: 9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`
const WarehouseItem = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 12px;
  margin-bottom: 12px;
`
const WarehouseItemIcon = styled.div`
  font-size: 24px;
  color: #409eff;
`
const WarehouseItemTitle = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 6px;
`
