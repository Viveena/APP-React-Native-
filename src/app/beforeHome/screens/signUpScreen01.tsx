import PrimaryButton from '@/src/components/atmos/primaryButton';
import SocialLoginButton from '@/src/components/atmos/socialLoginButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image, ImageBackground, StyleSheet, Text, View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';

const SignUpScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white} // Use correct extension
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('@/src/assets/images/greenLogo.png')}
          style={styles.logo}
        />

        {/* Title */}
        <Text style={styles.heading}>Let's Get Started!</Text>
        <Text style={styles.subHeading}>Let's dive into your account</Text>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <SocialLoginButton
            icon={require('@/src/assets/images/google.jpg')}
            text="Continue with Google"
            onPress={() => console.log('Google Login')}
          />
          <SocialLoginButton
            icon={require('@/src/assets/images/apple.png')}
            text="Continue with Apple"
            onPress={() => console.log('Apple Login')}
          />
          <SocialLoginButton
            icon={require('@/src/assets/images/facebook.png')}
            text="Continue with Facebook"
            onPress={() => console.log('Facebook Login')}
          />
        </View>

        {/* Sign Up / Sign In Buttons */}
        <View style={styles.authButtons}>
          <PrimaryButton
            title="Sign up"
            type="primary"
            onPress={() => router.push('/beforeHome/screens/signUpScreen02')}
          />
          <PrimaryButton
            title="Sign in"
            type="secondary"
            onPress={() => router.push('/beforeHome/afterSignupScreens/signIn')}
          />
        </View>

        {/* Terms & Conditions */}
        <View style={styles.terms}>
          <Text style={styles.termsText}>
            <Text style={styles.link}>Privacy Policy</Text> {'   '}and{'   '}
            <Text style={styles.link}>Terms & Conditions</Text>.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('9%'),
    paddingHorizontal: wp('6%'),
  },
  logo: {
    width: wp('25%'),
    height: wp('25%'),
    marginBottom: hp('3%'),
  },
  heading: {
    fontSize: wp('8.5%'),
    marginBottom: hp('1%'),
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  subHeading: {
    fontSize: wp('4.5%'),
    color: Colors.secondary,
    marginBottom: hp('4%'),
    fontFamily: Fonts.regular,
  },
  socialContainer: {
    width: '100%',
    marginBottom: hp('4%'),
  },
  authButtons: {
    alignItems: 'center',
    width: '100%',
    marginBottom: hp('5%'),
  },
  terms: {
    marginTop: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  termsText: {
    textAlign: 'center',
    fontSize: wp('3.5%'),
    color: '#666',
    fontFamily: Fonts.thin_regular,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
