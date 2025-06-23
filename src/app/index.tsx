import SplashScreen from '@/src/app/beforeHome/screens/splashScreen';
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_300Light,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return <SplashScreen />; //start with splashscreen
}
