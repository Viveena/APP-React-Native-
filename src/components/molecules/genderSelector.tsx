// src/components/atoms/GenderSelector.tsx
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  value: string;
  onSelect: (gender: string) => void;
};

const GenderSelector = ({ value, onSelect }: Props) => {
  const genders = ['Male', 'Female', 'Other'];

  return (
    <View style={styles.row}>
      {genders.map((gender) => (
        <TouchableOpacity
          key={gender}
          onPress={() => onSelect(gender)}
          style={[
            styles.button,
            value === gender && styles.buttonSelected,
          ]}
        >
          <Text style={[
            styles.text,
            value === gender && styles.textSelected,
          ]}>
            {gender}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
    marginTop:hp('0.5%')
  },
  button: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: hp('6%'),
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonSelected: {
    backgroundColor: Colors.primary + '22',
  },
  text: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  textSelected: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
});

export default GenderSelector;
