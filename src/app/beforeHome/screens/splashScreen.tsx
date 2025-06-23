import { BackgroundImage } from '@/src/constants/backgroundImage';
import { usePreloadAssets } from '@/src/hooks/background_load';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SplashScreen = () => {
  const router = useRouter();
  const ready = usePreloadAssets();

  useEffect(() => {
    if (ready) {
      const timeout = setTimeout(() => {
        router.push('/beforeHome/onBoarding/onBoardingScreen01');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [ready]);

  if (!ready) return null;

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
      <Image
        source={require('@/src/assets/images/01_splash_content.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },
  logo: {
    width: wp('90%'),
    height: hp('50%'),
  },
});

export default SplashScreen;
