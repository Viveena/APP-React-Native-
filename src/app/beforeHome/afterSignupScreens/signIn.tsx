import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import SocialButton from '@/src/components/atmos/socialButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);


  const router = useRouter();

  const onSignin = () => {
      router.push('/beforeHome/afterSignupScreens/setToGo');
      if(agree){
         console.log('Email:', email);
        console.log('Password:', password);
      }
  };

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
    
        {/* Back Arrow */}
         <View style={styles.backWrapper}>
          <BackButton />
        </View>

        {/* Main Content */}
        <View style={styles.container}>
        <View>
          {/* Logo */}
            <Image
                source={require('@/src/assets/images/greenLogo.png')}
                style={styles.logo}
                />

          {/* Heading */}
          <Text style={styles.heading}>Welcome back! 👋</Text>
          <Text style={styles.subtext}>
            Login to continue your health journey
          </Text>

          {/* Email Field */}
          <Text style={styles.fieldname}>Email</Text>
          <View style={styles.inputWrapper}>
            <FontAwesome name="envelope" size={wp('4%')} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Field */}
          <Text style={styles.fieldname}>Password</Text>
          <View style={styles.inputWrapper}>
            <FontAwesome name="lock" size={wp('4%')} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <FontAwesome
                name={passwordVisible ? 'eye' : 'eye-slash'}
                size={wp('4.5%')}
                color="black"
              />
            </TouchableOpacity>
          </View>


          {/* Terms & Conditions */}
          <View style={styles.checkboxRow}>
            <TouchableOpacity
                onPress={() => setAgree(!agree)}
                style={[
                styles.customCheckbox,
                {
                    backgroundColor: agree ? Colors.primary : 'transparent',
                    borderColor: Colors.primary,
                },
                ]}
            >
                {agree && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            <Text style={styles.remember}>
                Remember me{'\t\t\t\t'}
                <Text
                style={styles.link}
                onPress={() => router.push('/beforeHome/afterSignupScreens/forgotPasswordScreen')} 
                >
                Forgot Password?
                </Text>
            </Text>
            </View>


          {/* Already have an account */}
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Don't have an account?   </Text>
            <TouchableOpacity onPress={() => router.push('/beforeHome/screens/signUpScreen02')}>
                <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
            </View>


          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>


          {/* Social Buttons */}
          <View style={styles.socialRow}>
            <SocialButton
              icon={require('@/src/assets/images/google.jpg')}
              onPress={() => console.log('Google Login')}
            />
            <SocialButton
              icon={require('@/src/assets/images/apple.png')}
              onPress={() => console.log('Apple Login')}
            />
            <SocialButton
              icon={require('@/src/assets/images/facebook.png')}
              onPress={() => console.log('Facebook Login')}
            />
          </View>

          {/* Sign Up Button */}
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              title="Sign in"
              type="primary"
              onPress={onSignin}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backWrapper: {
  position: 'absolute',
  top: hp('7%'),
  left: wp('6%'),
},
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('7.5%'),
    paddingHorizontal: wp('6%'),
  },
  header: {
    position: 'absolute',
    top: hp('6%'),
    left: wp('5%'),
    zIndex: 10,
  },
  logoContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: hp('2.5%'),
 },
  logo: {
  width: wp('25%'),
  height: wp('25%'),
  resizeMode: 'contain',
  alignSelf: 'center', 
  marginBottom: hp('2%'), 
},
  heading: {
    fontSize: wp('6.5%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('1%'),
  },
  subtext: {
    fontSize: wp('4%'),
    color: Colors.secondary,
    fontFamily: Fonts.regular,
    marginBottom: hp('3%'),
  },
  fieldname: {
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: hp('1.5%'),
    marginLeft: hp('1%'),
    marginBottom: hp('0.5%'),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp('5%'),
    backgroundColor: Colors.text,
    paddingHorizontal: wp('3%'),
    marginBottom: hp('2.5%'),
    height: hp('6%'),
    borderColor: Colors.primary,
    borderWidth: 1,
  },
    loginRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('1%'),
    },
  icon: {
    marginRight: wp('2%'),
  },
  input: {
    flex: 1,
    color: Colors.secondary,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginTop: hp('1.5%'),
  },
  customCheckbox: {
    width: wp('5.5%'),
    height: wp('5.5%'),
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'),
  },
  checkmark: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
  },
  remember: {
    color: Colors.secondary,
    flexShrink: 1,
    fontSize: wp('3.2%'),
    fontFamily: Fonts.regular,
  },
  loginText: {
    marginTop: hp('1%'),
    textAlign: 'center',
    color: Colors.secondary,
  },
  link: {
    color: Colors.primary,
    fontFamily:Fonts.bold,
    marginTop:hp('0.9%'),
  },
  dividerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: hp('3%'),
  },
    dividerLine: {  
    flex: 1,
    height: 1,
    backgroundColor: '#9999',
    marginHorizontal: wp('2.5%'),
    },

    dividerText: {
    color: Colors.secondary,
    fontSize: wp('3.5%'),
    fontFamily: Fonts.regular,
    },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp('2.2%'),
  },
  buttonWrapper: {
    marginBottom: hp('5%'),
    width:wp('89%')
  },
});

export default SignIn;
