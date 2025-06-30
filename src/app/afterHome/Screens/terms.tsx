import BackButton from '@/src/components/atmos/backButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const TermsAndConditions = () => {
  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="stretch"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>Terms & Conditions</Text>
        </View>

        {/* Content */}
        <View style={styles.contentBox}>
          <Text style={styles.paragraph}>
            Welcome to MediiTrack. By accessing or using our app, you agree to be bound by the terms outlined below. Please read them carefully.
          </Text>

          <Text style={styles.subTitle}>1. Use of Service</Text>
          <Text style={styles.paragraph}>
            You may use our services only as permitted by law. You must not misuse or interfere with our services.
          </Text>

          <Text style={styles.subTitle}>2. Privacy</Text>
          <Text style={styles.paragraph}>
            We value your privacy. All personal data is handled according to our Privacy Policy.
          </Text>

          <Text style={styles.subTitle}>3. Account Security</Text>
          <Text style={styles.paragraph}>
            You are responsible for maintaining the confidentiality of your account information.
          </Text>

          <Text style={styles.subTitle}>4. Changes to Terms</Text>
          <Text style={styles.paragraph}>
            We may update these terms occasionally. Continued use of the app after changes means you agree to the new terms.
          </Text>

          <Text style={styles.subTitle}>5. Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have any questions, feel free to contact our support team.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('6%'),
    paddingBottom: hp('4%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:hp('1%'),
    marginBottom: hp('2%'),
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginLeft: wp('3%'),

  },
  // contentBox: {
  //   backgroundColor:Colors.text,
  //   padding: wp('5%'),
  //   borderRadius: 16,
  //   elevation: 3,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  // },
  subTitle: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.bold,
    marginTop: hp('2.5%'),
    color: Colors.primary,
  },
  paragraph: {
    fontSize: wp('3.8%'),
    fontFamily: Fonts.regular,
    color:Colors.secondary,
    marginTop: hp('1%'),
    lineHeight: hp('2.8%'),
  },
});

export default TermsAndConditions;
