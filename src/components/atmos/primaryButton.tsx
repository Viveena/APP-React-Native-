import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  style?: ViewStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, type = 'primary', style }) => {
  const isPrimary = type === 'primary';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        style,
      ]}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: hp('0.5%'),
    borderRadius: wp('10%'),
    alignItems: 'center',
    width: '100%',
    marginTop:hp('2%'),
    marginBottom: hp('0.5%'),
  },
  primary: {
    backgroundColor: Colors.primary, 
  },
    secondary: {
    backgroundColor: Colors.text,
    borderColor: Colors.primary,
    borderWidth: 2,
  },

  text: {
    fontSize: 17,
    fontFamily:Fonts.bold,
    lineHeight:48,
  },
  primaryText: {
    color: Colors.text,
  },
  secondaryText: {
    color:Colors.primary,
  },
});

export default PrimaryButton;
