import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import SelectableCardList from '@/src/components/molecules/selectedCardList';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

// Sample health goal data
const healthGoals = [
  { title: 'Prioritize Sleep' },
  { title: 'Maintain a nourishing diet' },
  { title: 'Stay Hydrated' },
  { title: 'Exercise Regularly' },
];

const HealthGoalScreen = () => {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleSelect = (title: string) => {
    setSelectedGoal(title);
  };

  const handleSave = () => {
    router.push('/afterHome/profile_tab');
  };

  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <BackButton />

        <Text style={styles.heading}>
          What is your{'\n'}health goal?
        </Text>

        <SelectableCardList
          data={healthGoals}
          selectedItem={selectedGoal}
          onSelect={handleSelect}
        />

        <View style={styles.saveButton}>
          <PrimaryButton title="SAVE" type="primary" onPress={handleSave} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: hp('6%'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    fontSize: wp('8.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: hp('4%'),
    lineHeight: hp('5%'),
  },
  saveButton: {
    marginTop: hp('4%'),
    marginBottom: hp('7%'),
  },
});

export default HealthGoalScreen;
