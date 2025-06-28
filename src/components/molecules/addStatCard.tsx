// src/components/molecules/AddStatCard.tsx
import { Colors } from '@/src/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const AddStatCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.plus}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 162,
    height: 227,
    borderRadius: wp('6%'),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('5%'),
  },
  plus: {
    fontSize: wp('10%'),
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default AddStatCard;
