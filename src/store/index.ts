//reducer.js文件，集合各个子数据仓库
import components from '@/store/components'
import zoom from '@/store/zoom'
import { combineReducers } from 'redux'

export interface stoer {
  components: componentsType[]
  zoom: number
}

export default combineReducers({
  components,
  zoom,
})
