import React, { Fragment } from 'react'
import {FlatList, Image, ListRenderItem, Text, StyleSheet, View} from 'react-native'

import user01 from '../../assets/user01.png'
import user02 from '../../assets/user02.png'
import user03 from '../../assets/user03.png'
import user05 from '../../assets/user05.png'
import user06 from '../../assets/user06.png'

const data = [
  {
    img: user01,
    username: "Yasmin"
  },

  {
    img: user02,
    username: "Dalton"
  },

  {
    img: user03,
    username: "Daniel"
  },
  {
    img: user05,
    username: "Rosa"
  },
  {
    img: user06,
    username: "Arnaldo"
  },
  {
    img: user06,
    username: "Grilo"
  },
]

interface DataProps {
  img: any;
  username: string;
}

const Storie: ListRenderItem<DataProps> = ({ item }) => {
  return(
    <View style={styles.container}>
      <Image source={item.img} style={styles.storieImage}/>
      <Text style={styles.storieText}>{item.username}</Text>
    </View>
  )
}

export default function Stories() {
  return (
    <View style={styles.storiesContainer}>
      <FlatList 
        data={data} 
        keyExtractor={(_, index) => index.toString()} 
        renderItem={Storie}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 18,
  },

  storieImage: {
    width: 56,
    height: 56
  },

  storieText: {
    fontSize: 12,
    marginTop: 6,
  },

  storiesContainer: {
    padding: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#b3b3b3',
  }
})