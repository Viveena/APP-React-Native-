
import { Colors } from '@/src/constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const HealthPills = ({ label, selected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.pill, selected && styles.selectedPill]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingVertical: hp('0.8%'),
    paddingHorizontal: wp('3.5%'),
    borderRadius: 20,
    borderColor:"#B1B1B1",
    borderWidth:1,
    margin: wp('1.5%'),
    height:42
  },
  selectedPill: {
    backgroundColor: '#07AE9C',
    borderColor:"#07AE9C",
  },
  text: {
    fontSize: 14,
    color:Colors.secondary,
    textAlign:"center",
    paddingVertical:hp('0.5%')

  },
  selectedText: {
    color:Colors.text,
    
  },
});

export default HealthPills;
