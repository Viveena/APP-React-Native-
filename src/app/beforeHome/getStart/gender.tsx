import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import ProgressBar from '@/src/components/atmos/progressBar';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';


const GenderScreen = () => {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState('');

  const handleContinue = () => {
    if (selectedGender) {
      console.log('Selected Gender:', selectedGender);
      router.push('/beforeHome/getStart/birthday');
    } else {
      alert('Please select a gender');
    }
  };

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <View>
            <BackButton />
            </View>
            <ProgressBar currentStep={2} totalSteps={6} />
          <View style={{ width: wp('6%') }} />
        </View>

        {/* Question */}
        <Text style={styles.label}>What's your gender?</Text>

        {/* Gender Selection */}
        <View style={styles.genderCircleRow}>
          {/* Male */}
          <TouchableOpacity
            style={[
              styles.genderCircle,
              selectedGender === 'Male' && styles.selectedCircle,
            ]}
            onPress={() => setSelectedGender('Male')}
          >
            <Image
              source={require('@/src/assets/images/maleLogo.png')}
              style={styles.genderImage}
            />
          </TouchableOpacity>

          {/* Female */}
          <TouchableOpacity
            style={[
              styles.genderCircle,
              selectedGender === 'Female' && styles.selectedCircle,
            ]}
            onPress={() => setSelectedGender('Female')}
          >
            <Image
              source={require('@/src/assets/images/femaleLogo.png')}
              style={styles.genderImage}
            />
          </TouchableOpacity>
        </View>

        {/* Prefer not to say */}
        <TouchableOpacity
          style={[
            styles.smallCircle,
            selectedGender === 'Other' && styles.selectedSmallCircle,
          ]}
          onPress={() => setSelectedGender('Other')}
        >
          <Text style={styles.smallCircleText}>Prefer not to say</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton title="Continue" type="primary" onPress={handleContinue} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? hp('5%') : hp('7%'),
    paddingHorizontal: wp('6%'),
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: wp('1%'),
  },
  
  label: {
    fontSize:40,
    fontFamily:Fonts.regular,
    fontWeight: 'bold',
    textAlign: 'center',
    color:Colors.primary,
    marginVertical: hp('4%'),
  },
  genderCircleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
  },
  genderCircle: {
    width: wp('36%'),
    height: wp('36%'),
    borderRadius: wp('18%'),
    backgroundColor:Colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  genderImage: {
    width: wp('23%'),
    height: wp('23%'),
    resizeMode: 'contain',
    marginBottom: hp('1%'),
  },
  selectedCircle: {
    borderColor:Colors.primary,
    backgroundColor:Colors.text,
  },
  smallCircle: {
    alignSelf: 'center',
    marginBottom: hp('3%'),
    borderWidth: 2,
    borderColor:'#666',
    borderRadius: wp('15%'),
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#fff',
  },
  selectedSmallCircle: {
    backgroundColor:Colors.subPrimary,
    borderColor: Colors.primary,
  },
  smallCircleText: {
    fontSize: wp('3.6%'),
    color:Colors.secondary,
    fontFamily:Fonts.regular
  },
  buttonWrapper: {
    marginBottom: hp('7%'),
  },
});
