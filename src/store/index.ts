//reducer.js文件，集合各个子数据仓库
import components from '@/store/components'
import zoom from '@/store/zoom'
import { combineReducers } from 'redux'
import { componentsType } from '@/type'

export interface storeType {
  components: componentsType[]
  zoom: number
}

export default combineReducers({
  components,
  zoom,
})
