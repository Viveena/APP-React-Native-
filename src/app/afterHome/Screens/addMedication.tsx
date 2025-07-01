import BackButton from '@/src/components/atmos/backButton';
import Dropdown from '@/src/components/atmos/dropDown';
import PillButton from '@/src/components/atmos/pillsButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';

import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useMedication } from '@/src/context/medicationContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AddMedicationScreen = () => {
  const [instruction, setInstruction] = useState('');
  const [frequency, setFrequency] = useState('');
  const [medType, setMedType] = useState('');
  const [durationUnit, setDurationUnit] = useState('');
  const [take,setTake]=useState('');

  const instructions = ['Before Food', 'After food'];
  const takeOptions = ['Take', 'Apply', 'Inhale','Inject','Other'];
  const frequencyOptions = ['if required','immediately','Once a day', 'Twice a day', 
    'Thrice a day','Four times a day','Every hour','Every night a bedtime','Every day',
    'Every other day','Every 4 hours','Once a week','Three times a week','Twice a week',
    'Thrice a week'];
  const typeOptions = ['Capsule','Liquid','Tablet','Cream','Lotion','Injection','Other'];
  const durationUnitOptions = ['Days', 'Weeks', 'Months'];

  const { addMedication } = useMedication();

  const handleSubmit = () => {
    const title = `Medication: ${take} ${medType}`;
    const description = `Frequency: ${frequency}\nDuration: ${durationUnit}`;
    addMedication({ title, description });
    router.push('/afterHome/Screens/viewAddedMedication');
  };

  return (
    <ImageBackground
              source={BackgroundImage.profileOptions_bg}
              style={styles.background}
              resizeMode="cover"
            >
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <BackButton />

      {/* Title */}
      <Text style={styles.title}>Add{'\n'}new medication</Text>
      <Text style={styles.subtext}>
        Enter details for your new medication,{'\n'}including dosage and instructions
      </Text>

      {/* Inputs */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#444" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Medications"
          placeholderTextColor="#999"
        />
      </View>
      <Dropdown
        label="How to take"
        selected={take}
        onSelect={setTake}
        options={takeOptions}
      />

      <Dropdown
        label="Select Frequency"
        selected={frequency}
        onSelect={setFrequency}
        options={frequencyOptions}
      />

      <Dropdown
        label="Select Type"
        selected={medType}
        onSelect={setMedType}
        options={typeOptions}
      />

      {/* Time of the day */}
      <Text style={styles.sectionTitle}>Time of the day</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Morning"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Afternoon"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Evening"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Night"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
      </View>

      {/* Count & Duration */}
      <TextInput
        style={styles.input}
        placeholder="Enter Count"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      <View style={styles.row}>
      <TextInput
        style={[styles.input, styles.smallInput]}
        placeholder="Enter Duration"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      <Dropdown
        label="Select"
        selected={durationUnit}
        onSelect={setDurationUnit}
        options={durationUnitOptions}
        customStyle={styles.smallInput}
      />
    </View>



      {/* Medical Instructions */}
      <Text style={styles.sectionTitle}>Medical Instructions</Text>
      <Text style={styles.subtexttitle}>Select or add instructions for the medication</Text>
      <View style={styles.pillrow}>
        {instructions.map((item, idx) => (
          <PillButton key={idx} label={item} selected={instruction === item} onPress={() => setInstruction(item)} />
        ))}
      </View>

      {/* <TouchableOpacity style={styles.addInstructionBtn}>
        <Text style={styles.addInstructionText}>+ Add Instructions</Text>
      </TouchableOpacity> */}

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>ADD MEDICATION</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
    paddingBottom: hp('5%'),
  },
  title: {
    fontSize: wp('8%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },
  subtext: {
    fontSize: wp('3.5%'),
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: hp('2.5%'),
  },
  subtexttitle: {
    fontSize: wp('3.5%'),
    color: Colors.secondary,
    marginBottom: hp('2%'),
  },
  sectionTitle: {
    fontSize: wp('4%'),
    fontFamily: Fonts.bold,
    marginVertical: hp('1.2%'),
    color: Colors.secondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D2F0ED',
    borderRadius: 22,
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    height: hp('6.5%'),
  },
  searchIcon: {
    marginRight: wp('2%'),
  },
  searchInput: {
    flex: 1,
    fontSize: wp('3.5%'),
    fontFamily: Fonts.regular,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#0546468C',
    borderRadius: 22,
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.2%'),
    fontSize: wp('3.5%'),
    marginBottom: hp('2%'),
    fontFamily: Fonts.regular,
    color: '#333',
    height: hp('6.5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('3%'),
    marginBottom: hp('1%'),
  },
  smallInput: {
    width: '48%',
  },
  pillrow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp('3%'),
    marginTop: hp('1%'),
    marginBottom: hp('2.5%'),
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: hp('2%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('5%'),
  },
  submitText: {
    color: Colors.text,
    fontSize: wp('4%'),
    fontWeight: '700',
  },
});


export default AddMedicationScreen;
