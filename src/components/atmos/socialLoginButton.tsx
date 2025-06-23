import { Colors } from '@/src/constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  icon: any;
  text: string;
  onPress: () => void;
}

const SocialLoginButton: React.FC<Props> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp('85%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: hp('1.5%'),
    marginVertical: hp('1.5%'),
    backgroundColor: Colors.text,
    marginHorizontal: wp('1.5%')
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('7%'),
  },
  icon: {
    width: wp('5%'),
    height: wp('5%'),
    marginRight: wp('13%'),
  },
  text: {
    fontSize: wp('4%'),
    color: Colors.secondary,
  },
});

export default SocialLoginButton;
