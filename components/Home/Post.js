import React from 'react'
import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native'

const Post = ({post}) => {
    return (
        <View style={{
            padding:5,
            borderTopColor:"#05050538",
            borderTopWidth:1,
            marginTop:10
        }}>
            <PostHeader post={post} />
            <PostCaption post={post} />
            <PostImage post={post} />
            <PostLikes post={post} />
            <PostReacts post={post} />
            <PostComments post={post} />
            <CommentFooter />
        </View> 
    )
}

const PostHeader = ({post}) =>(
    <View style={{flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-between"}}>
        <View style={{
            flexDirection:"row",
        }}>
     <Image source={{uri: post.profile_img}} 
     style={{
         width:30,
         height:30, 
         borderRadius:50,
         borderColor:"#166ada",
         borderWidth:2.5
      }}
     />
        <View>
            <Text>{"  "}{post.username}</Text>
            <View style={{
                flexDirection:"row",
                alignItems:"center"
            }}>
            <Text>{"  "}{post.time}</Text>
            <Image source={require("../../assets/Persona.png")} 
            style={{
                width:12,
                height:12,
                marginLeft:5
            }}
            />
            </View>
        </View>
     </View>

     <View>
         <Text style={{fontWeight:"900"}}>...</Text>
     </View>
    </View>
)

const PostCaption = ({post}) =>(
    <View>
        <Text style={{paddingHorizontal:10}}>{post.caption}</Text>
    </View>
)

const PostImage = ({post}) =>(
    <View style={{
        width:"100%",
        height:400,
        paddingTop:5
    }}>
        <Image source={{uri: post.upload_img}}
        style={{
            width:"100%",
            height:"100%",
            resizeMode:"cover"
        }}
        />
    </View>
)


const PostLikes = ({post}) =>(
    <View style={{
        paddingTop:5,
        flexDirection:"row"
    }}>
       <Image 
        source={require("../../assets/Persona.png")}
        style={{width:20,height:20}}/>
        <Image source={require("../../assets/Persona.png")}
        style={{width:20,height:20 }} />
        <Text>{"  "}{post.likes}</Text>
    </View>
)


const PostReacts =({post}) =>(
    <View style={{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center"
    }}>
      {/* Likes */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/like.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}{post.likes}</Text>
      </View>
      {/* comments */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/comment.png")} 
          style={{
              width:18,
              height:18,
              resizeMode:"contain",
              borderRadius:50,
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}{post.comments.length}</Text>
      </View>
      {/* share */}
     
      <View
      style={{
        flexDirection:"row",
        alignItems:"center",
        width:100,
        height:40,
        borderRadius:30,
        backgroundColor:"#F0F2F5",
        justifyContent:"center",
        marginTop:10,
        marginLeft:5,
     }}>
        <TouchableOpacity>
         <Image source={require("../../assets/reacts/share.png")} 
          style={{
              width:20,
              height:20,
              resizeMode:"contain"
          }}
         />
        </TouchableOpacity>
        <Text>{"  "}{post.share}</Text>
      </View>
    </View>
)

const PostComments =({post}) =>(
    <View>
        {post.comments.map((comment,index) =>(
            <View key={index} style={{
                flexDirection:"row",
                marginTop:5,
                alignItems:"center"
            }}>
            <Image source={{uri: comment.profile_img}}
            style={{
                width:30,
                height:30,
                borderRadius:50,
                marginRight:5
            }} />
            <View style={{
                backgroundColor:"#F0F2F5",
                borderRadius:25,
                minWidth:100,
                height:50,
                paddingHorizontal:15,
                justifyContent:"center"
            }}>
                <Text>{comment.name}</Text>
                <Text>{comment.comment}</Text>
                </View>
            </View>
        ))}
    </View>
)

const CommentFooter = () =>(
    <View style={{
        paddingTop:5,
        flexDirection:"row",
        alignItems:"center"
    }}>
   <Image source={require("../../assets/Persona.png")}
    style={{
        width:30,
        height:30,
        borderRadius:50
    }}/>
    <TextInput 
    placeholder="Write your comment..."
    style={{
        marginLeft:10,
        borderColor:"#f0f2f5",
        height:40,
        borderWidth:1,
        width:"85%",
        paddingLeft:10,
        position:"relative",
        borderRadius:30
    }}
    />
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1829/1829415.png"}}
    style={{
        position:"absolute",
        right:20,
        top:12,
        width:25,
        height:25,
        opacity:.7
    }}
    />
    </View>
)

export default Post