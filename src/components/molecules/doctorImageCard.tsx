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
      {/* Floating Doctor Image */}
      <Image source={image} style={styles.image} resizeMode="contain" />

      {/* Card Content */}
      <LinearGradient
        colors={['#0D5756', '#1CBDBB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginVertical: hp('2%'),
    width: '100%',
    height: hp('22%'), // Reserve height for floating image
  },
  card: {
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: wp('38%'), // Leaves space for the floating image
    paddingRight: wp('5%'),
    paddingVertical: hp('2%'),
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: -hp('7.5%'),
    left: wp('0.5%'),
    width: wp('45%'),
    height: hp('32%'),
    zIndex: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: wp('4.8%'),
    color: Colors.text,
    fontFamily: Fonts.bold,
    marginBottom: hp('1%'),
  },
  subtitle: {
    fontSize: wp('3.6%'),
    color: Colors.text,
    fontFamily: Fonts.semi_bold,
    lineHeight: hp('2.6%'),
  },
});

export default DoctorImageCard;
