import React,{useState} from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Snackbar from 'react-native-snackbar';
import { validateEmail } from '../../components/Validation';
import { useDispatch } from 'react-redux';
import { login } from '../../storage/actions';
import Colors from '../../components/Colors';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if(email !== "" & password !== "") {
      if(validateEmail(email.trim())){
        await firestore().collection("Users")
              .where("email", "==", email.trim())
              .get()
              .then( async SnapShot => {
                if(SnapShot.empty){
                  Snackbar.show({
                    text: "This user is not registered",
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: Colors.red,
                    fontFamily: "Poppins-SemiBold",
                    backgroundColor: Colors.black,
                  });
                } else {
                  SnapShot.forEach( SnapShotData => {
                    const respData = SnapShotData.data();
                    if(respData.password == password.trim()) {
                      Snackbar.show({
                        text: "Logged In",
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: Colors.white,
                        fontFamily: "Poppins-SemiBold",
                        backgroundColor: Colors.primaryColor,
                      });

                      dispatch(login({
                        userId: SnapShotData.id,
                        firstName: respData.firstName,
                        lastName: respData.lastName, 
                        email: respData.email,
                        mobileNumber: respData.mobilenumber,
                        profileImage: respData.profileimage,
                      }));
                      //Navigation.navigate("AppDrawer")
                    } else{
                      Snackbar.show({
                        text: "Incorrect password",
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: Colors.red,
                        fontFamily: "Poppins-SemiBold",
                        backgroundColor: Colors.black,
                      });
                    }
                  })
                }
                })
                .catch( err => console.warn(err))
      } else {
        Snackbar.show({
          text: "Invalid Email",
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.red,
          fontFamily: "Poppins-SemiBold",
          backgroundColor: Colors.black,
        });
      }
    } else {
      Snackbar.show({
        text: "Fill up all the fields to continue",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.red,
        fontFamily: "Poppins-SemiBold",
        backgroundColor: Colors.black,
      });
    }
  }

  const goToSignUp = () => {
    Navigation.navigate("SignUp");
  }

  const goToLoginPhone = () => {
    Navigation.navigate("LoginPhone");
  }

  const handleButtonPress = () => {
    Navigation.navigate("AppDrawer")
  };

  return (
    <View style={style.container}>
        <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
            <Image source={require("../../assets/images/logo.png")} style={style.logo} />
            <Text style={style.loginText} >Login Account</Text>
  
            <CommonTextInput type="email" placeholder="Email Address" handleText= {text => setEmail(text)}/>
            <CommonTextInput type="password" placeholder="Password" handleText= {text => setPassword(text)} />
            <CustomBtn type="primary" buttonText="Sign in" handleButtonPress={handleLogin} />
  
            <Text style={style.createNew} onPress={goToSignUp}>If you are new, Create here</Text>

            <View style={style.orLoginContainer}>
              <View style={style.dottedLine} />
              <View>
                <Text style={style.orLoginText}>or Login with</Text>
              </View>
              <View style={style.dottedLine} />
            </View>
            
            <CustomBtn type="" buttonText="Login In with Phone" handleButtonPress={goToLoginPhone} icon={require("../../assets/images/smartphone.png")}/>
            <CustomBtn type="" buttonText="Login In with Google" handleButtonPress={handleButtonPress} icon={require("../../assets/images/google.png")} />
            <View style={style.bottom}></View>
        </ScrollView>
        <View style={style.footer}>
          <Text style={style.footerText}>Login as a guest</Text>
        </View>
    </View>
    
  )
}

export default Login