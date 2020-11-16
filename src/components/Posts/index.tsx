import React, {useState} from 'react'

import {
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions
} from 'react-native'

import user02 from '../../assets/user02.png'

import heart from '../../assets/heart.png'
import bookmark from '../../assets/bookmark.png'
import comment from '../../assets/comment.png'
import union from '../../assets/union.png'
import more from '../../assets/more.png'

import post from '../../assets/post.png'
import post02 from '../../assets/post02.jpg'


interface PostProps {
  item: {
    username: string;
    place: string;
    imgs: Array<any>;
    userImg: any
  }
}

const data = [
  {username: "Yasmin Braga", place: "Santarém, PA", imgs: [post, post02], userImg: user02},
  {username: "Yasmin Braga", place: "Santarém, PA", imgs: [post, post02], userImg: user02},
  {username: "Yasmin Braga", place: "Santarém, PA", imgs: [post, post02], userImg: user02},
  {username: "Yasmin Braga", place: "Santarém, PA", imgs: [post, post02], userImg: user02},
  {username: "Yasmin Braga", place: "Santarém, PA", imgs: [post, post02], userImg: user02},
]

const Post = ({ item}: PostProps ) => {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <View>

      <View>

        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Image style={styles.userImg} source={item.userImg}/>

            <View>
              <Text style={styles.postUserName}>{item.username}</Text>
              <Text style={styles.postPlace}>{item.place}</Text>
            </View>
          </View>

          <Image source={more}/>

        </View>

        <ScrollView 
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(ev) => {
            const width = Dimensions.get("window").width
            const offsetX = ev.nativeEvent.contentOffset.x

            const offsetType = typeof offsetX
            if (offsetType === "number") {
              const w = Math.round(width)
              const o = Math.round(offsetX)

              const index = Math.floor(o / w)
              setCurrentImage(index)
            }
            
            console.log(offsetX)
          }}
        >
          {item.imgs.map((img, index) => (
            <Image key={index.toString()} style={styles.postImage} source={img}/>
          ))}
        </ScrollView>


        <View style={styles.postActions}>
          <View style={ {flexDirection: "row", alignItems: "center"}}> 
            <Image style={{marginRight: 10}}source={heart}/>
            <Image style={{marginRight: 10}} source={comment}/>
            <Image source={union}/>
          </View>

          <View style={styles.postIndicators}>
            {item.imgs.map((_, index) => (
              <View 
                key={index.toString()} 
                style={[
                  styles.postIndicator, 
                  currentImage === index ? styles.active : {},
                ]}
              />
            ))}
          </View>

          <View style={{flexDirection: "row"}}>
            <View style={{width: 27}}/>
            <View style={{width: 27}}/>
            <Image source={bookmark}/>
          </View>


        </View>

      </View>
    </View>
  )
}

export default function Posts() {
  return (
    <ScrollView>
      {data.map((post, index) => (
        <Post key={index.toString()} item={post}/>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }, 

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center"
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center"
  },

  postUserName: {
    fontSize: 13.5,
    fontWeight: "bold",
  },

  postPlace: {
    fontSize: 13.5,
  },

  userImg: {
    width: 36,
    height: 36,
    marginRight: 5
  },

  postImage: {
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: 375,
  },

  postActions: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
  },

  postIndicators: {
    flexDirection: "row",
  },

  postIndicator: {
    backgroundColor: "#dbdbdb",
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5
  },
  
  active: {
    backgroundColor: "#3898f3",
  }
})