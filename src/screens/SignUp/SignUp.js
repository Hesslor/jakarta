import React,{useEffect, useState} from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import { validateEmail, validatePhoneNumber } from '../../components/Validation';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SignUp = () => {

  // AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4
    const Navigation = useNavigation();

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");
    const [error,setError] = useState(null);

    useEffect(() => {
      GoogleSignin.configure({
        webClientId: "669481951159-f8v66o73v8n82m3f3ek6bi740ob8i8an.apps.googleusercontent.com",
      })
    },[])

    const handleButtonPress = async () => {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})
    }

    const handleSignIn = async () => {
      if ( username.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && password.trim() !== "" && cpassword.trim() !== "") 
        {
          if(password.trim() === cpassword.trim()){

            await firestore().collection("Users")
              .where("username", "==", username.trim())
              .where("email", "==", email.trim())
              .get()
              .then( async SnapShot => {
                if(SnapShot.empty){
                  if(validateEmail(email.trim())){
                    if(validatePhoneNumber(phone.trim())){
                      setError(null)
                      const userData = {
                        active: true,
                        username: username.trim(),
                        email: email.trim(),
                        password: password.trim(),
                        mobilenumber: phone.trim(),
                        created: String(new Date()),
                        updated: String(new Date()),
                      }
                
                      await firestore().collection("Users")
                        .add(userData)
                        .then(resp => {
                          setError(null)
                          Snackbar.show({
                            text: 'New Account Created',
                            duration: Snackbar.LENGTH_SHORT,
                            textColor: Colors.white,
                            fontFamily: "Poppins-SemiBold",
                            backgroundColor: Colors.primaryColor,
                          });
                        })
                        .catch(err => console.warn(err))
                        Navigation.navigate("Login")
                    } else {setError("Invalid Phone number")}
                  } else {setError("Invalid email")}
                } else{
                  Snackbar.show({
                    text: 'This Email is already Existing',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: "yellow",
                    fontFamily: "Poppins-SemiBold",
                    backgroundColor: Colors.black,
                  });
                }
              })

          } else{setError("Given passwords are not matching")}
        }
      else{
        setError("Fill up all the fields to continue");
      }
    };
    
    const goToLogin = () => {
        Navigation.navigate("Login")
    }

  return (
    <View style={style.container}>
        <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
            <Image source={require("../../assets/images/logo.png")} style={style.logo} />
            <Text style={style.loginText} >SignUp</Text>
            { error !== null ?
            <View style={style.errorView}>
              <Text style={style.errorText}>{error}</Text>
            </View>
            : false}
            <CommonTextInput type="default" placeholder="User name" handleText= {text => setUsername(text)}/>
            <CommonTextInput type="email" placeholder="Email Address" handleText= {text => setEmail(text)}/>
            <CommonTextInput type="phone" placeholder="Phone Number" handleText= {text => setPhone(text)}/>
            <CommonTextInput type="password" placeholder="Password" handleText= {text => setPassword(text)} />
            <CommonTextInput type="password" placeholder="Confirm Password" handleText= {text => setCpassword(text)} />
            <CustomBtn type="primary" buttonText="Sign Up" handleButtonPress={handleSignIn} />

            <View style={style.orLoginContainer}>
              <View style={style.dottedLine} />
              <View>
                <Text style={style.orLoginText}>or Sign Up with</Text>
              </View>
              <View style={style.dottedLine} />
            </View>

            <CustomBtn type="" buttonText="Sign Up with Google" handleButtonPress={handleButtonPress} icon={require("../../assets/images/google.png")} />
            <Text style={style.NavigateTo} onPress={goToLogin}>Go to Login</Text>

        </ScrollView>
    </View>
  )
}

export default SignUp;