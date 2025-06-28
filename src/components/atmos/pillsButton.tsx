// src/components/atoms/PillButton.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

const PillButton = ({ label, selected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#7A9E9F',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('5%'),
    marginRight: wp('2%'),
    marginBottom: hp('1%'),
  },
  selected: {
    backgroundColor: '#004B47',
    borderColor: '#004B47',
  },
  text: {
    color: '#004B47',
    fontSize: 14,
  },
  selectedText: {
    color: '#fff',
  },
});

export default PillButton;
