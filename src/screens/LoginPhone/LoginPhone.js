import React,{useState} from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';
import { phoneValidation } from './validation';

const LoginPhone = () => {

    const [phone, setPhone] = useState("");
    const [error,setError] = useState("");
    const [showOtp,setShowOtp] = useState("");
    const [otp,setOtp] = useState("");
    const [confirm,setConfirm] = useState(null)

    const Navigation = useNavigation();

    const handleButtonPress = async () => {
      if (phone !== ""){
        try {
          setError(null)
          if(phoneValidation(phone.trim())) {
            const Confirmation  = await auth().signInWithPhoneNumber(phone);
            if(Confirmation){
              setShowOtp(true)
              setConfirm(Confirmation)
              Snackbar.show({
                text: 'OTP has been send to the Entered Number',
                duration: Snackbar.LENGTH_SHORT,
                textColor: Colors.white,
                fontFamily: "Poppins-SemiBold",
                backgroundColor: Colors.primaryColor,
              });
          }
          } else {
            setError("Invalid number.")
          }
        } catch (error) {
          setError("Invalid number")
          setShowOtp(false)
        }
      } else { setError("Enter the Phone number")}
      };

    const VerifyOtp = async () => {
      try {
        setError(null)
        if(otp.trim() !== "") {
          const res = await confirm.confirm(otp)
          console.log(res)
            if(res) {
              Snackbar.show({
                text: 'Logged in',
                duration: Snackbar.LENGTH_SHORT,
                textColor: Colors.white,
                fontFamily: "Poppins-SemiBold",
                backgroundColor: Colors.primaryColor,
              });
              Navigation.navigate("Home")
            }
          }
      } catch(error) {setError("Incorrect OTP")}
    }
    
    const goToLogin = () => {
        Navigation.navigate("Login")
    }

  return (
    <View style={style.container}>
        <ScrollView style={style.scrollView}>
            <Image source={require("../../assets/images/logo.png")} style={style.logo} />
            <Text style={style.loginText} >Login With Phone</Text>

            {error !== "" ? <Text style={style.errorText}>{error}</Text>: null}
            <CommonTextInput type="phone" placeholder="Phone Number" handleText= {text => setPhone(text)}/>
            {showOtp && 
            <CommonTextInput type="phone" placeholder="Enter OTP" handleText= {text => setOtp(text)}/>
            }
            <CustomBtn type="primary" buttonText={showOtp ? "Verify OTP" : "Sign Up With Phone"} handleButtonPress={showOtp ? VerifyOtp : handleButtonPress} />
  
            <Text style={style.NavigateTo} onPress={goToLogin}>Go to Login</Text>

        </ScrollView>
    </View>
  )
}

export default LoginPhone