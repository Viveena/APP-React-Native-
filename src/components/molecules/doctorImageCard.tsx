import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  image: any;
  title: string;
  subtitle: string;
}

const DoctorImageCard = ({ image, title, subtitle }: Props) => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#0D5756', '#1CBDBB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Text section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </LinearGradient>

      {/* Doctor Image OUTSIDE the card visually */}
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginVertical: hp('2%'),
    width: '100%',
  },
  card: {
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    height: 167,
    width: '100%',
    paddingLeft: wp('42%'),
    paddingRight: wp('5%'),
    paddingVertical: hp('2%'),
  },
  image: {
    position: 'absolute',
    top: -hp('10.5%'), // ⬅️ Push out from top
    left: wp('1%'),
     width: wp('45%'),
    height: hp('33%'),
    zIndex: 1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 19,
    color: Colors.text,
    fontFamily: Fonts.bold,
    marginBottom: hp('1%'),
  },
  subtitle: {
    fontSize: 13,
    color: Colors.text,
    fontFamily: Fonts.semi_bold,
    lineHeight:18
  },
});

export default DoctorImageCard;
