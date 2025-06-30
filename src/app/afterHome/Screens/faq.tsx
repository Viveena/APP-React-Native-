import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const faqData = [
  {
    question: 'How to use the app?',
    answer: 'Navigate through tabs to access features like profile, doctors, and settings.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use secure data handling protocols and encryption.',
  },
  {
    question: 'Can I delete my account?',
    answer: 'Yes, go to Settings > Delete Account and confirm your action.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'Use the reset option in Settings > Reset Password.',
  },
];

const FAQScreen = () => {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <ImageBackground source={BackgroundImage.profileOptions_bg} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button + Title */}
        <View style={styles.headerRow}>
          <BackButton/>
          <Text style={styles.heading}>FAQs</Text>
        </View>

        {/* FAQ List */}
        {faqData.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => setExpandedIndex(index === expandedIndex ? null : index)}
              style={styles.faqHeader}
            >
              <Text style={styles.question}>{item.question}</Text>
              <Ionicons
                name={index === expandedIndex ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
            {index === expandedIndex && <Text style={styles.answer}>{item.answer}</Text>}
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: wp('5%'),
    paddingTop: hp('8%'),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  heading: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.secondary,
    textAlign: 'center',
    flex: 1,
    right:wp('28%')
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
  },
  question: {
    fontSize: wp('4.2%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    flex: 1,
    marginRight: wp('2%'),
  },
  answer: {
    fontSize: wp('3.8%'),
    fontFamily: Fonts.regular,
    color: '#555',
    paddingLeft: wp('2%'),
    paddingBottom: hp('1%'),
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default FAQScreen;
