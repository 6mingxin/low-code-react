//reducer.js文件，集合各个子数据仓库
import components from '@/store/components'
import zoom from '@/store/zoom'
import selectCom, { StateType } from '@/store/selectCom'
import { combineReducers } from 'redux'
import { componentsType } from '@/type'

export interface storeType {
  components: componentsType[]
  zoom: number
  selectCom: StateType
}

export default combineReducers({
  components,
  zoom,
  selectCom,
})
