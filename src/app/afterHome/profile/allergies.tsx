import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import HealthPills from '@/src/components/atmos/healthPills';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Allergies } from '@/src/constants/serach_profile';
import { Ionicons } from '@expo/vector-icons';

const AllergiesScreen = () => {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSave = () => {
    router.push('/afterHome/profile_tab');
  };

  const toggleSelect = (label: string) => {
    setSelectedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        {/* Header */}
        <BackButton />

        {/* Title */}
        <Text style={styles.heading}>Allergies you have</Text>
        <Text style={styles.subheading}>
          Select the allergies you have, it will help us to make you healthy.
        </Text>

        {/* Search Box (UI only) */}
        <View style={styles.searchWrapper}>
          <Ionicons
            name="search"
            size={wp('5.5%')}
            color="#0000004D"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for Allergies"
            placeholderTextColor="#0000004D"
            style={styles.searchInput}
          />
        </View>

        {/* Pills */}
        <FlatList
          data={Allergies}
          numColumns={3}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <HealthPills
              label={item}
              selected={selectedItems.includes(item)}
              onPress={() => toggleSelect(item)}
            />
          )}
          contentContainerStyle={styles.pillsContainer}
          showsVerticalScrollIndicator={false}
        />

        {/* Save Button */}
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
    width: wp('100%'),
    height: hp('100%'),
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
    marginBottom: hp('1.5%'),
    textAlign: 'center',
  },
  subheading: {
    fontSize: wp('4%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    marginBottom: hp('2.5%'),
    textAlign: 'center',
    paddingHorizontal: wp('4%'),
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: wp('50%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    height: hp('6.5%'),
  },
  searchIcon: {
    marginRight: wp('2%'),
  },
  searchInput: {
    flex: 1,
    fontSize: wp('4%'),
    color: Colors.secondary,
  },
  pillsContainer: {
    paddingBottom: hp('15%'),
    gap: hp('1.5%'),
  },
  saveButton: {
    marginBottom: hp('7%'),
  },
});

export default AllergiesScreen;
