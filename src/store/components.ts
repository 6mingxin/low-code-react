import { useSelector } from 'react-redux'
import { componentsType } from '@/type'

type actionType = {
  type: 'CHANGE'
  components: componentsType[]
}
export type StateType = componentsType[]

const initialState: StateType = []

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'CHANGE': {
      return action.components
    }
    default: {
      return state
    }
  }
}

const addComponent = (component: componentsType, components: componentsType[]) => {
  console.log(components, component)
  components.push(component)
  return {
    type: 'CHANGE',
    components,
  } as actionType
}
const updateComponent = (component: componentsType, components: componentsType[]) => {
  components = components.map(e => {
    if (e.setting.props.uuid === component.setting.props.uuid) {
      e = component
    }
    return e
  })
  return {
    type: 'CHANGE',
    components,
  } as actionType
}
export const useChangeComponent = () => {
  const { components } = useSelector<StateType>(state => state) as { components: componentsType[] }
  // const add = (component:componentsType) => addComponent(component, components)
  return {
    addComponent: (component: componentsType) => addComponent(component, components),
    updateComponent,
  }
}
