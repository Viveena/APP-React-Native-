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
  const handleSave = () => {
    router.push('/afterHome/profile_tab');
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [remindInWeek, setRemindInWeek] = useState(false);
  const [isFamilyDoctor, setIsFamilyDoctor] = useState(false);

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

      {/* Back Button */}
      <BackButton />

      {/* Title */}
      <Text style={styles.title}>
        Add New{'\n'}Doctor
      </Text>

      {/* Input Fields */}
      <IconInput placeholder="Enter Your Name" icon="person-outline" />
      <IconInput placeholder="Post" icon="person-outline" />
      <IconInput placeholder="Enter Mobile Number" icon="call-outline" />
      <IconInput placeholder="Number of visit" icon="person-outline" />

      {/* Checkboxes */}
      <View style={styles.checkboxGroup}>
  <TouchableOpacity
    style={styles.checkboxContainer}
    onPress={() => setIsFavorite(!isFavorite)}
  >
    <View style={[styles.checkbox, isFavorite && styles.checkedBox]}>
      {isFavorite && (
        <Ionicons name="checkmark" size={14} color="#fff" />
      )}
    </View>
    <Text style={styles.checkboxLabel}>Favorite Doctor</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.checkboxContainer}
    onPress={() => setRemindInWeek(!remindInWeek)}
  >
    <View style={[styles.checkbox, remindInWeek && styles.checkedBox]}>
      {remindInWeek && (
        <Ionicons name="checkmark" size={14} color="#fff" />
      )}
    </View>
    <Text style={styles.checkboxLabel}>Reminder within 1 week</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.checkboxContainer}
    onPress={() => setIsFamilyDoctor(!isFamilyDoctor)}
  >
    <View style={[styles.checkbox, isFamilyDoctor && styles.checkedBox]}>
      {isFamilyDoctor && (
        <Ionicons name="checkmark" size={14} color="#fff" />
      )}
    </View>
    <Text style={styles.checkboxLabel}>Family Doctor</Text>
  </TouchableOpacity>
</View>


      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <PrimaryButton title="SAVE" type="primary" onPress={handleSave} />
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    padding: wp('6%'),
    paddingTop: hp('6%'),
    flexGrow: 1,
  },
  title: {
    fontSize: 40,
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    marginBottom: hp('4%'),
    textAlign: 'center',
  },
  checkboxGroup: {
    marginTop: hp('3%'),
    marginBottom: hp('4%'),
    marginLeft:hp('1%')
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  checkbox: {
  width: 20,
  height: 20,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: Colors.primary,
  marginRight: wp('2.5%'),
  justifyContent: 'center',
  alignItems: 'center', // 🟢 important for icon centering
},

  checkedBox: {
    backgroundColor: Colors.primary,
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#333',
  },
  saveButton: {
    marginTop: hp('7%'),
    marginBottom: hp('5%'),
  },
});

export default AddDoctorScreen;
