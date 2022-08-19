import React, { DragEvent } from 'react'
import styled from '@emotion/styled'
import components from '@/common/utils/components'
import { componentsType } from '@/type'
import { selectComActionType } from '@/store/selectCom'
import { useDispatch, useSelector } from 'react-redux'
import { storeType } from '@/store'
import { guid } from '@/common/utils'

export default () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state) as storeType
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    if (event !== null && event.target instanceof HTMLElement) {
      // console.log(event.target.dataset.index)
      // event.dataTransfer.setData('index', event.target.dataset.index || '')
      const index = Number(event.target.dataset.index)
      console.log(index)
      const temporary = JSON.parse(JSON.stringify(components[index]))

      temporary.setting.attr.uuid = guid(8)

      dispatch<selectComActionType>({ type: 'SELECT_CHANGE', component: temporary, index: 0 })
    }
  }
  // const handlerSelectCom = (uuid: string, coms: componentsType[]) => {
  //   coms.forEach((e, i) => {
  //     if (e.setting.attr.uuid === uuid) {
  //       dispatch<selectComActionType>({ type: 'SELECT_CHANGE', component: e, index: i })
  //     }
  //   })
  // }
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
  height: 100%;
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
  cursor: pointer;
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
