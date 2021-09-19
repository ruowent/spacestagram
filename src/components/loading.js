import React from 'react'

// styles
import {
  Layout,
  Title,
  SubTitle,
} from './loading.styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = ({ title, subTitle }) => {
  return (
    <Layout>
      <CircularProgress size={40} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Layout>
  )
}

export default Loading
