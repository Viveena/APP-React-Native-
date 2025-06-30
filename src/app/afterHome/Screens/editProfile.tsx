import BackButton from '@/src/components/atmos/backButton';
import IconInput from '@/src/components/atmos/iconInput';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import BirthdayInput from '@/src/components/molecules/birthdayInput';
import GenderSelector from '@/src/components/molecules/genderSelector';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const EditProfile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    weight: '',
    height: '',
    gender: '',
  });

  const [birthday, setBirthday] = useState<Date | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleGenderSelect = (value: string) => {
    setForm({ ...form, gender: value });
  };

  const handleSave = () => {
    router.push('/afterHome/profile/settings');
  };

  return (
    <ImageBackground source={BackgroundImage.profileOptions_bg} style={styles.background} resizeMode="stretch">
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>Edit Profile</Text>
        </View>

        {/* Form */}
        <View style={styles.formBox}>
          <IconInput icon="person-outline" placeholder="Name" value={form.name} onChangeText={(value) => handleChange('name', value)} />
          <IconInput icon="mail-outline" placeholder="Email" value={form.email} keyboardType="email-address" onChangeText={(value) => handleChange('email', value)} />
          <IconInput icon="call-outline" placeholder="Phone Number" value={form.phone} keyboardType="phone-pad" onChangeText={(value) => handleChange('phone', value)} />
          <IconInput icon="home-outline" placeholder="Address" value={form.address} onChangeText={(value) => handleChange('address', value)} />
          <IconInput icon="business-outline" placeholder="City" value={form.city} onChangeText={(value) => handleChange('city', value)} />
          <IconInput icon="map-outline" placeholder="State" value={form.state} onChangeText={(value) => handleChange('state', value)} />
          <IconInput icon="pin-outline" placeholder="Pin Code" value={form.pin} keyboardType="number-pad" onChangeText={(value) => handleChange('pin', value)} />
          <IconInput icon="barbell-outline" placeholder="Weight (kg)" value={form.weight} keyboardType="numeric" onChangeText={(value) => handleChange('weight', value)} />
          <IconInput icon="resize-outline" placeholder="Height (cm)" value={form.height} keyboardType="numeric" onChangeText={(value) => handleChange('height', value)} />

          {/* Birthday */}
          <BirthdayInput value={birthday} onChange={setBirthday} />


          {/* Gender */}
          <GenderSelector value={form.gender} onSelect={handleGenderSelect} />


          {/* Save Button */}
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
    paddingHorizontal: wp('5%'),
    paddingTop: hp('6%'),
    paddingBottom: hp('4%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
    marginTop: hp('1%'),
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginLeft: wp('3%'),
  },
  formBox: {
    padding: wp('3%'),
  },
  inputGroup: {
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: wp('4%'),
    fontFamily: Fonts.semi_bold,
    marginBottom: hp('0.5%'),
    color: Colors.primary,
  },
  datePickerStyle: {
    width: '100%',
    marginTop: 10,
  },

});

export default EditProfile;
