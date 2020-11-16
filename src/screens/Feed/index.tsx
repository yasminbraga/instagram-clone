import React from 'react'

import Header from '../../components/Header'
import Stories from '../../components/Stories'
import Posts from '../../components/Posts'
import { ScrollView } from 'react-native'

export default function Feed() {
  return (
    <React.Fragment>
      <Header />
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </React.Fragment>
  )
}