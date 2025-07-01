import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleReset = () => {
    if (newPassword.length < 8) {
      Alert.alert('Password must be at least 8 characters');
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
        <BackButton/>
        <Text style={styles.title}>Reset Password</Text>

        {/* New Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showNewPassword}
              placeholder="Enter new password"
              placeholderTextColor="#888"
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowNewPassword(prev => !prev)}
            >
              <FontAwesome
                name={setNewPassword ? 'eye' : 'eye-slash'}
                size={wp('4.5%')}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showConfirmPassword}
              placeholder="Confirm new password"
              placeholderTextColor="#888"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(prev => !prev)}
            >
              <FontAwesome
                name={showConfirmPassword ? 'eye' : 'eye-slash'}
                size={wp('4.5%')}
                color="black"
              />
            </TouchableOpacity>
          </View>
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
    justifyContent: 'flex-start',
    paddingHorizontal:wp('5%'),
    marginBottom: hp('10%'),
    marginTop:hp('7%')
  },
  title: {
    fontSize: wp('6.5%'),
    fontFamily: Fonts.bold,
    marginBottom: hp('5%'),
    textAlign: 'center',
    color: Colors.primary,

  },
  inputGroup: {
    marginBottom: hp('2.5%'),
  },
  label: {
    fontSize: wp('4.2%'),
    fontFamily: Fonts.regular,
    marginBottom: hp('0.5%'),
    color: Colors.primary,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp('5%'),
    backgroundColor: Colors.text,
    paddingHorizontal: wp('3%'),
    marginBottom: hp('2.5%'),
    height: hp('6%'),
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: wp('4%'),
    fontFamily: Fonts.regular,
    paddingVertical: hp('1.2%'),
  },
  eyeIcon: {
    paddingLeft: wp('2%'),
  },
});
