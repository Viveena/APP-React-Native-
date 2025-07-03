import { BackgroundImage } from '@/src/constants/backgroundImage';
import { usePreloadAssets } from '@/src/hooks/background_load';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SplashScreen = () => {
  const router = useRouter();
  const ready = usePreloadAssets();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (ready) {
      // Start parallel animations
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Navigate after animation completes
        router.push('/beforeHome/onBoarding/onBoardingScreen01');
      });
    }
  }, [ready]);

  if (!ready) return null;

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_green}
      style={styles.background}
      resizeMode="stretch"
    >
      <Animated.Image
        source={BackgroundImage.splash_logo}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
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
  },
  logo: {
    width: wp('90%'),
    height: hp('50%'),
  },
});

export default SplashScreen;
