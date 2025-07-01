import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      Alert.alert('Please enter your email address');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    // TODO: API call for sending OTP
    router.push('/beforeHome/afterSignupScreens/otpVerify');
  };

  return (
    <ImageBackground source={BackgroundImage.bg_image_white} style={styles.background}>
      <View style={styles.backWrapper}>
        <BackButton />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password? 🔑</Text>
        <Text style={styles.subtext}>
          Don’t worry, we’ve got you covered. Enter your registered email address, and we’ll send you an OTP code to reset your password.
        </Text>

        <Text style={styles.label}>Registered email address</Text>
        <View style={styles.emailBox}>
          <TextInput
            placeholder="andrew.ainsley@yourdomain.com"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.emailText}
          />
        </View>

        <PrimaryButton
          title="Send OTP Code"
          type="primary"
          onPress={handleSendOTP}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: wp('6%'),
  },
  backWrapper: {
    marginTop: hp('6%'),
  },
  container: {
    marginTop: hp('2%'),
  },
  title: {
    fontSize: wp('6.5%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('1.5%'),
  },
  subtext: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginBottom: hp('4%'),
  },
  label: {
    fontSize: wp('3.8%'),
    fontFamily: Fonts.bold,
    marginBottom: hp('0.8%'),
    color: Colors.primary,
  },
  emailBox: {
    backgroundColor: Colors.text,
    padding: wp('4%'),
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: Colors.primary,
    marginBottom: hp('35%'),
  },
  emailText: {
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    fontSize: wp('4%'),
  },
});

export default ForgotPasswordScreen;
