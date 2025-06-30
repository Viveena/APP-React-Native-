import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const OtpVerify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);

  const inputs = useRef<TextInput[]>([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);


  const handleResend = () => {
    setTimer(60);
    setOtp(['', '', '', '', '', '']);
    inputs.current[0].focus();
  };

  const handleChange = (value: string, index: number) => {
  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  // Move to next input automatically
  if (value && index < 5) {
    inputs.current[index + 1].focus();
  }

  // Check if all 6 digits are filled
  const filledOtp = newOtp.join('');
  if (filledOtp.length === 6 && !newOtp.includes('')) {
    router.push('/beforeHome/afterSignupScreens/resetPassword_setting'); 
  }
};


  return (
    <ImageBackground source={BackgroundImage.bg_image_white} style={styles.background}>
      <View style={styles.backWrapper}>
        <BackButton />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Enter OTP Code 🔐</Text>
        <Text style={styles.subtext}>
          We’ve sent an OTP code to your email. Please enter it below to verify your account.
        </Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref!)}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              style={styles.otpBox}
              onChangeText={(val) => handleChange(val, index)}
            />
          ))}
        </View>

        <Text style={styles.timerText}>
          You can resend the code in <Text style={styles.timer}>{timer}s</Text>
        </Text>

        <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
          <Text style={[styles.resend, { opacity: timer === 0 ? 1 : 0.5 }]}>Resend code</Text>
        </TouchableOpacity>
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
    marginTop: hp('4%'),
  },
  title: {
    fontSize: wp('7%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('1%'),
  },
  subtext: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginBottom: hp('4%'),
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  otpBox: {
    width: wp('12%'),
    height: wp('14%'),
    borderRadius: wp('2%'),
    borderWidth: 1.5,
    borderColor: Colors.primary,
    textAlign: 'center',
    fontSize: wp('5%'),
    fontFamily: Fonts.bold,
    backgroundColor: Colors.text,
  },
  timerText: {
    fontSize: wp('3.8%'),
    color: Colors.secondary,
    fontFamily: Fonts.regular,
     textAlign: 'center',
  },
  timer: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resend: {
    fontSize: wp('3.5%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginTop: hp('1.5%'),
    textAlign: 'center',
  },
});

export default OtpVerify;
