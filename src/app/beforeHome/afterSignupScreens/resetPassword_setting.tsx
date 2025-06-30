import PrimaryButton from '@/src/components/atmos/primaryButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleReset = () => {
    if (newPassword.length < 6) {
      Alert.alert('Password must be at least 6 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    // TODO: API call to reset password
    Alert.alert('Password reset successfully');
    router.push('/afterHome/profile/settings'); 
  };

  return (
    <ImageBackground source={BackgroundImage.bg_image_white} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      
        <PrimaryButton title="Update Password" type="primary" onPress={handleReset} />
    </View>
    </ImageBackground>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    background: {
    flex: 1,
    padding: wp('4%'),
  },
  container: {
    flex: 1,
    padding: wp('5%'),
    justifyContent: 'center',
    marginBottom:hp('40%')
  },
  title: {
    fontSize: wp('6.5%'),
    fontFamily: Fonts.bold,
    marginBottom: hp('4%'),
    textAlign: 'center',
    color: Colors.primary,
  },
  inputGroup: {
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: wp('4.2%'),
    fontFamily: Fonts.regular,
    marginBottom: 8,
    color:Colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('4%'),
    fontFamily: Fonts.regular,
    backgroundColor: '#fff',
  },
  
});
