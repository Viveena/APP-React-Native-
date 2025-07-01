
import BackButton from '@/src/components/atmos/backButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NotificationDetail = () => {
  const { id } = useLocalSearchParams(); // this can be notification id or title

  return (
    <ImageBackground
              source={BackgroundImage.home_bg}
              style={styles.background}
              resizeMode="stretch"
            >
    <View style={styles.container}>
        <BackButton/>
      <Text style={styles.title}>Notification Detail</Text>
      <Text style={styles.content}>You opened notification: {id}</Text>
      {/* Replace this with actual dynamic content */}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop:hp('7%')
  },
  title: {
    fontSize: 25,
    fontFamily: Fonts.regular,
    color: Colors.secondary,     
    marginBottom: hp('4%'),
    paddingHorizontal:hp('5%'),
    textAlign:"center"
  },
  content: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign:'center'
  },
});

export default NotificationDetail;
