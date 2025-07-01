import { Colors } from '@/src/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AddStatCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.plus}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('42%'),          // approx 162dp on 390dp width screens
    height: hp('28%'),         // approx 227dp on 800dp height screens
    borderRadius: wp('5.5%'),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:wp('2.2%'),
    backgroundColor: '#F0FAF9',
  },
  plus: {
    fontSize: wp('12%'),
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default AddStatCard;
