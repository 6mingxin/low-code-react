import React from 'react'
import styled from '@emotion/styled'
import ContainerHeader from '@/components/ContainerHeader'
import ContainerContent from '@/components/ContainerContent'
import ContainerConfig from '@/components/ContainerConfig'
import ContainerWarehouse from '@/components/ContainerWarehouse'

export default () => {
  return (
    <Container>
      <ContainerHeader />
      <Content>
        <ContainerWarehouse />
        <ContainerContent />
        <ContainerConfig />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f4f4;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`
