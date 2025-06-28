import BackButton from '@/src/components/atmos/backButton';
import SelectableCardList from '@/src/components/molecules/selectedCardList';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useMedication } from '@/src/context/medicationContext';
import React, { useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ViewAddedMedicationScreen = () => {
  const { medications, removeMedication } = useMedication();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.contentWrapper}>
        <BackButton />
        <Text style={styles.title}>Your Medications</Text>

        <SelectableCardList
          data={medications}
          selectedItem={selected}
          onSelect={setSelected}
          onDelete={removeMedication}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingTop: hp('6%'),
    paddingHorizontal: wp('6%'),
  },
  title: {
    fontSize: 26,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: hp('3%'),
    marginTop: hp('1%'),
  },
});

export default ViewAddedMedicationScreen;
