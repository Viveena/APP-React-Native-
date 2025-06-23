import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.progressText}>{`${currentStep} / ${totalSteps}`}</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: wp('4%'),
  },
  progressText: {
    fontSize: wp('3.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: hp('0.5%'),
  },
  progressBarBackground: {
    height: hp('0.8%'),
    backgroundColor: '#eee',
    borderRadius: wp('5%'),
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: wp('5%'),
  },
});
