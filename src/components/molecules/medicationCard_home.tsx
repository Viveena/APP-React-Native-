// src/components/molecules/medicationCard_home.tsx

import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type Props = {
  name: string;
  dose: string;
  onPress?: () => void;
};

const MedicationCardHome = ({ name, dose, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.contentWrapper}>
        {/* Capsule Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@/src/assets/images/drugs.png')}
            style={styles.capsuleImage}
          />
        </View>

        {/* Text */}
        <View style={styles.textContainer}>
          <Text style={styles.medicineName}>{name}</Text>
          <Text style={styles.dosage}>{dose}</Text>
        </View>

        {/* Tick Icon */}
        <Ionicons
          name="checkmark-circle"
          size={24}
          color={Colors.primary}
          style={styles.checkIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#07AE9C29',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('3%'),
    height: 59,
    width: 244,
    justifyContent: 'center',
    marginTop: hp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('3.5%'),
  },
  capsuleImage: {
    width: 58,
    height: 58,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: wp('2%'),
  },
  medicineName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#003366',
    marginBottom: hp('0.4%'),
  },
  dosage: {
    fontSize: 12,
    color: '#333',
  },
  checkIcon: {
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
  },
});

export default MedicationCardHome;
