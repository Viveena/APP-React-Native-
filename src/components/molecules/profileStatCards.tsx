import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ProfileStatCards = () => {
  const weight = 75; // in kg
  const height = 151; // in cm
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1); // BMI calculation

  const profileStats = [
    {
      value: `${weight}kg`,
      label: 'Weight',
      icon: require('@/src/assets/images/weight_icon.png'),
      backgroundColor: '#FEF8E8A1',
    },
    {
      value: `${height}cm`,
      label: 'Height',
      icon: require('@/src/assets/images/height_icon.png'),
      backgroundColor: '#ECFFF7',
    },
    {
      value: `${bmi}`,
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

  return (
    <View style={styles.container}>
      {profileStats.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: item.backgroundColor }]}>
          {/* Edit Icon */}
          <TouchableOpacity style={styles.editIcon} onPress={() => console.log(`Edit ${item.label}`)}>
            <Ionicons name="create-outline" size={14} color={Colors.primary} />
          </TouchableOpacity>

          {/* Icon + Text */}
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
    position: 'relative',
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
    fontSize: 25,
    color: Colors.secondary,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    color: Colors.secondary,
  },
  editIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
    elevation: 2,
  },
});

export default ProfileStatCards;
