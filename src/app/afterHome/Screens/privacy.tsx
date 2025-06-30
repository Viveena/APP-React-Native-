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
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PrivacyPolicy = () => {
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
          <Text style={styles.headerTitle}>Privacy Policy</Text>
        </View>

        {/* Content */}
        <View style={styles.contentBox}>
          <Text style={styles.paragraph}>
            This Privacy Policy outlines how MediiTrack collects, uses, and protects your personal information.
          </Text>

          <Text style={styles.subTitle}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect data you provide directly, such as name, contact info, and health records, to improve your experience.
          </Text>

          <Text style={styles.subTitle}>2. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use your data to personalize features, provide insights, and enhance health tracking functionalities.
          </Text>

          <Text style={styles.subTitle}>3. Sharing of Data</Text>
          <Text style={styles.paragraph}>
            Your data is never sold. We only share it with trusted service providers to operate and maintain the app.
          </Text>

          <Text style={styles.subTitle}>4. Data Security</Text>
          <Text style={styles.paragraph}>
            We implement strict security measures to protect your information from unauthorized access or misuse.
          </Text>

          <Text style={styles.subTitle}>5. Your Rights</Text>
          <Text style={styles.paragraph}>
            You can access, modify, or delete your personal data anytime by contacting our support team.
          </Text>

          <Text style={styles.subTitle}>6. Changes to This Policy</Text>
          <Text style={styles.paragraph}>
            This policy may be updated. Changes will be reflected here with the updated effective date.
          </Text>

          <Text style={styles.subTitle}>7. Contact Us</Text>
          <Text style={styles.paragraph}>
            For questions or concerns, reach out to support@mediitrack.com.
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
    marginBottom: hp('2.5%'),
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
    marginTop: hp('2%'),
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

export default PrivacyPolicy;
