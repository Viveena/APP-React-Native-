import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type Props = {
  name: string;
  dose: string;
  time?: string;
};

const MedicationCard = ({ name, dose, time }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentWrapper}>
        {/* Capsule Image (slightly above the card) */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@/src/assets/images/drugs.png')}
            style={styles.capsuleImage}
            accessibilityLabel="Medication icon"
          />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.medicineName}>{name}</Text>
          <Text style={styles.dosage}>{dose}</Text>
          {time && <Text style={styles.time}>{time}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#07AE9C29', // Light green with transparency
    borderRadius: wp('4%'),
    paddingHorizontal: wp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    height: 59,
    width: 244,
    //marginRight: wp('1%'),
    justifyContent: 'center',
    marginTop:hp('2%'),
    marginLeft:hp('2%')
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: wp('3%'),
    marginLeft: wp('2%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -hp('3.5%'), // 👈 Pops image above the card
  },
  capsuleImage: {
    width: 58,
    height:58,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft:hp('2.5%')
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
  time: {
    // fontSize: wp('3.3%'),
    // color: '#00000080',
    // marginTop: hp('1%'),
  },
});

export default MedicationCard;
