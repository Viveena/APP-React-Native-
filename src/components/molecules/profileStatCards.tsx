// src/components/molecules/profileStatCards.tsx
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const profileStats = [
  {
    value: '75kg',
    label: 'Weight',
    icon: require('@/src/assets/images/weight_icon.png'),
    backgroundColor: '#FEF8E8A1',
  },
  {
    value: '151cm',
    label: 'Height',
    icon: require('@/src/assets/images/height_icon.png'),
    backgroundColor: '#ECFFF7',
  },
  {
    value: '69kg',
    label: 'BMI',
    icon: require('@/src/assets/images/bmi_icon.png'),
    backgroundColor: '#F9E6FF',
  },
  {
    value: 'O+',
    label: 'Blood Group',
    icon: require('@/src/assets/images/blood_icon.png'),
    backgroundColor: '#FFE5E5',
  },
];

const ProfileStatCards = () => {
  return (
    <View style={styles.container}>
      {profileStats.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: item.backgroundColor }]}>
          <Image source={item.icon} style={styles.icon} resizeMode="contain" />
          <View style={styles.textWrapper}>
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: hp('2%'),
    marginBottom: hp('3%'),
  },
  card: {
    width: 162,
    height: 82,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    gap: wp('3%'),
  },
  icon: {
    width: wp('10%'),
    height: wp('10%'),
  },
  textWrapper: {
    flexDirection: 'column',
  },
  value: {
    fontFamily: Fonts.bold,
    fontSize:25,
    color:Colors.secondary,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize:10,
    color:Colors.secondary,
  },
});

export default ProfileStatCards;
