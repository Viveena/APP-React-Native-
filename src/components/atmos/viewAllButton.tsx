import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  onPress: () => void;
  label?: string;
}

const ViewAllButton = ({ onPress, label = 'View All →' }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    backgroundColor: Colors.primary,
    borderRadius: wp('3%'),
    marginRight:hp('1%')
  },
  text: {
    color: '#fff',
    fontSize: wp('3.8%'),
    fontFamily: Fonts.bold,
  },
});

export default ViewAllButton;
