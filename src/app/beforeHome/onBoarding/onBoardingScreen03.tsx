import ArrowButton from '@/src/components/atmos/arrowButton';
import SkipButton from '@/src/components/atmos/skipButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const OnBoardingScreen03 = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_green}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Skip */}
      <SkipButton onPress={() => router.push('/beforeHome/screens/signUpScreen01')} />

      <View style={styles.content}>
        {/* Title */}
        <View style={styles.textContainer}>
          <Text style={styles.textLine}>
            <Text style={styles.regular}>Smart{'\n'}Tracking, </Text>
            <Text style={styles.bold}>Real{'\n'}Insights, {'\n'}</Text>
            <Text style={styles.regular}>better health</Text>
          </Text>
        </View>

        {/* Image */}
        <Image
          source={require('@/src/assets/images/onBoardingScreen03_image.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Progress & Arrow */}
        <View style={styles.bottomRow}>
          <View style={styles.dotsContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>
          <ArrowButton onPress={() => router.push('/beforeHome/screens/signUpScreen01')} 
            style={{marginLeft:20}}/>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: hp('6%'),
    paddingHorizontal: wp('6%'),
  },
  skipButton: {
    position: 'absolute',
    top: hp('6%'),
    right: wp('6%'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.8%'),
    borderRadius: 20,
    zIndex: 10,
  },
  skipText: {
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    fontSize: wp('3.5%'),
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: hp('4%'),
  },
  textContainer: {
    marginTop: hp('5%'),
  },
  textLine: {
    fontSize: wp('10%'),
    lineHeight: hp('7.2%'),
  },
  regular: {
    color: Colors.subText,
    fontFamily: Fonts.thin_regular,
  },
  bold: {
    color: Colors.text,
    fontFamily: Fonts.bold,
  },
  image: {
    width: wp('95%'),
    height: hp('35%'),
    marginTop:hp('5%'),
    alignSelf: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('8%'),
    marginBottom: hp('2%'), 
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: wp('2.5%'),
  },
  dot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: wp('1.25%'),
    backgroundColor: '#fff',
    opacity: 0.5,
  },
  activeDot: {
    width: wp('5%'),
    opacity: 1,
  },
});


export default OnBoardingScreen03;
