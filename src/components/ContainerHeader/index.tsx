import React from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { stoer } from '@/store'
import { zoomType } from '@/store/zoom'
import { Dispatch } from 'redux'

export default () => {
  const store = useSelector(state => state) as stoer
  const dispatch = useDispatch<Dispatch<zoomType>>()
  const onReduce = () => dispatch({ type: 'REDUCE' })
  const onIncrease = () => dispatch({ type: 'INCREASE' })

  return (
    <Header>
      <HeaderItem className="iconfont icon-tijiao-shangchuan-02" />
      <HeaderItem className="iconfont icon-cz-blcx" />
      <HeaderZoom>
        <ZoomButton className="iconfont icon-jian" onClick={onReduce} />
        <ZoomText>{store.zoom * 100}%</ZoomText>
        <ZoomButton className="iconfont icon-jia" onClick={onIncrease} />
      </HeaderZoom>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 10;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
`

const HeaderItem = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 20px;
  &:active {
    background-color: #f4f4f4;
  }
`
const ZoomButton = styled(HeaderItem)`
  font-size: 12px;
`

const HeaderZoom = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`
const ZoomText = styled.div`
  margin: 0 10px;
  font-size: 14px;
  color: #333;
`
