import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
  { title: 'Stay Hydrated'},
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

        <Text style={styles.heading}>What is your{'\n'}health goal?</Text>

         <SelectableCardList
            data={healthGoals}
            selectedItem={selectedGoal}
            onSelect={handleSelect}
            />

        <TouchableOpacity style={styles.saveButton}>
        <PrimaryButton title="SAVE" type="primary" onPress={handleSave}/>
      </TouchableOpacity>
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
    paddingHorizontal: wp('7%'),
  },
  heading: {
    fontSize: 36,
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: hp('4%'),
  },
  card: {
    backgroundColor: '#07AE9C29',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
    height:91,
    width:335
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  cardTitle: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  saveButton: {
    marginBottom: hp('5%'),
  },
});

export default HealthGoalScreen;
