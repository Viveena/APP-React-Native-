import PrimaryButton from '@/src/components/atmos/primaryButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo + Text Block */}
        <View style={styles.contentWrapper}>
          <Image
            source={require('@/src/assets/images/greenLogo.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to MediiTrack! 👋</Text>
            <Text style={styles.subtitle}>
              Before we begin, please provide us with some general information
              to ensure accurate monitoring.
            </Text>
          </View>
        </View>

        {/* Bottom Button */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            title="OK, Let's Start"
            type="primary"
            onPress={() => router.push('/beforeHome/getStart/name')}
          />
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
  container: {
    flex: 1,
    width: '100%',
    marginTop:hp('17%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('7%'),
    justifyContent: 'space-between',
  },
  contentWrapper: {
    alignItems: 'center',
  },
  image: {
    width: wp('45%'),
    height: hp('25%'),
  },
  textContainer: {
    marginTop: hp('2%'),
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
  },
  title: {
    fontSize: wp('6%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('1.5%'),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#666',
    textAlign: 'center',
    lineHeight: hp('2.8%'),
  },
  buttonWrapper: {
    width: '100%',
    //marginBottom:hp('-2%')
  },
});

export default WelcomeScreen;
