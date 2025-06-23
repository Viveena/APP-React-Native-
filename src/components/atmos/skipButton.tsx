import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface SkipButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.skipButton}>
      <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skipButton: {
    position: 'absolute',
    top: hp('6%'),
    right: wp('6%'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.8%'),
    borderRadius: 20,
    zIndex: 10,
  },
  skipText: {
    color: Colors.text,
    fontFamily: Fonts.thin_regular,
    fontSize: wp('3.5%'),
  },
});

export default SkipButton;
