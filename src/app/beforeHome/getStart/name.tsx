import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import ProgressBar from '@/src/components/atmos/progressBar';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';



export default function NameScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (name.trim() !== '') {
      console.log('Name:', name);
      router.push('/beforeHome/getStart/gender');
    } else {
      alert('Please enter your name!');
    }
  };

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        {/* Header + Progress Bar Section */}
        
          <View style={styles.topHeader}>
            <View>
            <BackButton />
            </View>
            <ProgressBar currentStep={1} totalSteps={6} />
            <View style={{ width: wp('6%') }} />
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.label}>What's your name?</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton title="Continue" type="primary" onPress={handleContinue} />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('6%'),
    justifyContent: 'space-between',
    width: '100%',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 48,
    fontFamily: Fonts.regular,
    marginBottom: hp('5%'),
    textAlign: 'center',
    color: Colors.primary,
  },
  input: {
    height: hp('9%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('4.5%'),
    backgroundColor: 'transparent',
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.primary,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    color: Colors.secondary,
    fontFamily: Fonts.regular,
    width: wp('70%'),
    textAlign: 'center',
  },
  buttonWrapper: {
    marginBottom: hp('5%'),
  },
});
