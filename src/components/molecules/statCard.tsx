import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  icon?: any;
  title: string;
  value: string;
  subtitle: string;
  backgroundColor?: string;
  image?: any;
}

const StatCard = ({
  icon,
  title,
  value,
  subtitle,
  backgroundColor,
  image,
}: Props) => {
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor || '#fff' }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.value}>{value}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {image && (
        <Image
          source={image}
          style={styles.bottomImage}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: wp('4%'),
    width: wp('42%'), // Approx 162 on 390 width screen
    height: hp('28%'), // Approx 227 on 800 height screen
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
    marginHorizontal:wp('2%')
  },
  content: {
    flex: 1,

    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('1%'),
    alignItems: 'center',

    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  icon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
    marginRight: wp('2%'),
  },
  title: {
    fontSize: wp('4.2%'),
    color: '#333',
    fontFamily: Fonts.bold,
  },
  value: {
    fontSize: wp('6.2%'),
    color: Colors.primary,
    fontFamily: Fonts.bold,
    marginVertical: hp('0.5%'),
  },
  subtitle: {
    fontSize: wp('3.2%'),
    color: Colors.secondary,
    fontFamily: Fonts.semi_bold,
    textAlign: 'center',
  },
  bottomImage: {
    width: '100%',
    height: hp('12%'),
    borderBottomLeftRadius: wp('4%'),
    borderBottomRightRadius: wp('4%'),
  },
});

export default StatCard;
