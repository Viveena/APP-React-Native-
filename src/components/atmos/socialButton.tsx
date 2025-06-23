import { Colors } from '@/src/constants/colors';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  icon: any;
  onPress: () => void;
}

const SocialButton: React.FC<Props> = ({ icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp('20%'),
    height: wp('15%'),
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: wp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
    backgroundColor: Colors.text,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: wp('6%'),
    height: wp('6%'),
  },
});

export default SocialButton;
