// src/components/atoms/IconInput.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = TextInputProps & {
  icon: keyof typeof Ionicons.glyphMap;
};

const IconInput = ({ icon, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#7A9E9F',
    borderRadius: wp('6%'),
    paddingHorizontal: wp('4%'),
    alignItems: 'center',
    height: hp('6.5%'),
    marginBottom: hp('2%'),
  },
  icon: {
    marginRight: wp('3%'),
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default IconInput;
