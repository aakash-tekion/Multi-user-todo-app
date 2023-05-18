import React,{ useState,useCallback,memo} from 'react'
import { View,Text, Image,TouchableOpacity } from 'react-native'
import drawerStyles from '../../styles/Drawer.styles.js'
import { EditSvg,CameraSvg } from 'ServiceApp/assets/svg'
import { withNavigation } from 'react-navigation'
import { useSelector } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'

function Header({username,customStyle,navigation}) {
  const state = useSelector(state=>state.appData)
  const [avatarImage,setAvatarImage] = useState({
    uri:''
  })
  const profile = state.currentUser ? state.users[state.currentUser].profile:{}
  const navigateToEditProfile = useCallback(() => {
    navigation.navigate('EditProfile',{
      profileInfo:profile
    })
  },[])
  const uploadAvatar = useCallback(() => {
    ImagePicker.openPicker({}).then(image=>{
      setAvatarImage({
        uri:image.path
      })
    })
  },[])
  return (
    <View style={[customStyle,drawerStyles.headerContent]}>
      <View style={drawerStyles.avatarContainer}>
        <Image style={drawerStyles.avatarImage} source={avatarImage.uri?avatarImage:require('../../assets/Images/profile.png')}/>
        <TouchableOpacity style={drawerStyles.cameraSvg} onPress={uploadAvatar}>
          <CameraSvg/>
        </TouchableOpacity>
      </View>
       

        <View style={drawerStyles.textWithIconContainer}>
          <Text style={drawerStyles.username}>{username?username:'Edit Profile'}</Text>
          <TouchableOpacity onPress={navigateToEditProfile}>
            <EditSvg width={26} height={26}/>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}
export default withNavigation(memo(Header))
