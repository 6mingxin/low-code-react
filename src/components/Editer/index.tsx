import React, { ReactDOM, useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { storeType } from '@/store'
import { componentsType } from '@/type'
import { DragDropContext, Droppable, Draggable, DropResult, DraggableLocation } from 'react-beautiful-dnd'
import BScroll from 'better-scroll'
import TyButton from '@/components/TyButton'
import TyImage from '@/components/TyImage'
import { arrayMoveImmutable } from 'array-move'
import { actionType } from '@/store/components'
export default () => {
  const store = useSelector(state => state) as storeType
  const dispatch = useDispatch()
  console.log('执行！！！！！！', store)
  useEffect(() => {
    //选中DOM中定义的 .wrapper 进行初始化
    const scroll = new BScroll('.edite-container', {
      scrollX: false, //开启横向滚动
      click: false, // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动
    })
  }, [])
  const component = {
    TyButton: TyButton,
    TyImage: TyImage,
  }
  const onDragEnd = (result: DropResult) => {
    console.log(result)
    const sourceIndex = result.source.index
    const destination = result.destination as DraggableLocation
    if (sourceIndex === destination.index) {
      return
    }
    const newComponents = arrayMoveImmutable(store.components, sourceIndex, destination.index)
    console.log(newComponents)
    dispatch<actionType>({ type: 'CHANGE', components: newComponents })
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/*<EditeContainer className="edite-container">*/}
      <div>
        <Droppable droppableId="droppable" direction={'vertical'}>
          {provided => {
            return (
              <EditeContainer className="edite-container" ref={provided.innerRef} {...provided.droppableProps}>
                {store.components.map((item, index) => (
                  <Draggable draggableId={item.setting.attr.uuid} index={index} key={item.setting.attr.uuid}>
                    {provided => {
                      const Component = component[item.component as keyof typeof component]
                      return (
                        <div className="modal" key={item.setting.attr.uuid} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Component {...item.setting} status={item.status} />
                        </div>
                      )
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </EditeContainer>
            )
          }}
        </Droppable>
      </div>
      {/*</EditeContainer>*/}
    </DragDropContext>
  )
}

const EditeContainer = styled.div`
  min-height: 100%;
  width: 100%;
  position: relative;
`
