import BackButton from '@/src/components/atmos/backButton';
import IconInput from '@/src/components/atmos/iconInput';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';

import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AddDoctorScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [remindInWeek, setRemindInWeek] = useState(false);
  const [isFamilyDoctor, setIsFamilyDoctor] = useState(false);

  const handleSave = () => {
    router.push('/afterHome/profile_tab');
  };

  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <BackButton />

        <Text style={styles.title}>Add New{'\n'}Doctor</Text>

        <IconInput placeholder="Enter Your Name" icon="person-outline" />
        <IconInput placeholder="Post" icon="person-outline" />
        <IconInput placeholder="Enter Mobile Number" icon="call-outline" />
        <IconInput placeholder="Enter Address" icon="location-outline" />
        <IconInput placeholder="Number of visit" icon="person-outline" />

        {/* Checkboxes */}
        <View style={styles.checkboxGroup}>
          {[
            { label: 'Favorite Doctor', checked: isFavorite, setChecked: setIsFavorite },
            { label: 'Reminder within 1 week', checked: remindInWeek, setChecked: setRemindInWeek },
            { label: 'Family Doctor', checked: isFamilyDoctor, setChecked: setIsFamilyDoctor },
          ].map(({ label, checked, setChecked }) => (
            <TouchableOpacity
              key={label}
              style={styles.checkboxContainer}
              onPress={() => setChecked(!checked)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, checked && styles.checkedBox]}>
                {checked && <Ionicons name="checkmark" size={wp('3.5%')} color="#fff" />}
              </View>
              <Text style={styles.checkboxLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.saveButton}>
          <PrimaryButton title="SAVE" type="primary" onPress={handleSave} />
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
    flexGrow: 1,
    padding: wp('6%'),
    paddingTop: hp('6%'),
  },
  title: {
    fontSize: wp('9.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    marginBottom: hp('4%'),
    textAlign: 'center',
    lineHeight: hp('5%'),
  },
  checkboxGroup: {
    marginTop: hp('3%'),
    marginBottom: hp('4%'),
    paddingHorizontal: wp('1%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  checkbox: {
    width: wp('4.5%'),
    height: wp('4.5%'),
    borderRadius: wp('1%'),
    borderWidth: 1,
    borderColor: Colors.primary,
    marginRight: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: Colors.primary,
  },
  checkboxLabel: {
    fontSize: wp('3.8%'),
    fontFamily: Fonts.regular,
    color: '#333',
  },
  saveButton: {
    marginBottom: hp('7%'),
  },
});

export default AddDoctorScreen;
