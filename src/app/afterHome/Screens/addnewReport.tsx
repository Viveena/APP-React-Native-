import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import PrimaryButton from '@/src/components/atmos/primaryButton';
import ReadingPicker from '@/src/components/molecules/readingPicker';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const AddNewReport = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [readingModalVisible, setReadingModalVisible] = useState(false);
  const [selectedReading, setSelectedReading] = useState<number | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const router = useRouter();

  return (
    <ImageBackground source={BackgroundImage.profileOptions_bg} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Open Modal Button */}
          <PrimaryButton
            title="ADD NEW ENTRY"
            type="primary"
            onPress={() => setModalVisible(true)}
          />
        </View>

        {/* Add New Entry Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Add New Entry</Text>

              {/* Date Picker Trigger */}
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateTrigger}>
                <Ionicons name="calendar" size={20} color={Colors.primary} />
                <Text style={styles.dateText}>
                  {selectedDate?.toLocaleDateString('en-GB')}
                </Text>
              </TouchableOpacity>

              {/* Reading Picker Trigger */}
              <TouchableOpacity
                onPress={() => setReadingModalVisible(true)}
                style={styles.readingTrigger}
              >
                <Text style={styles.readingText}>
                  {selectedReading ? `Reading: ${selectedReading}` : 'Select Reading'}
                </Text>
              </TouchableOpacity>

              <PrimaryButton
                title="Confirm"
                type="primary"
                onPress={() => {
                  console.log('Reading:', selectedReading);
                  console.log('Date:', selectedDate);
                  setModalVisible(false);
                }}
              />
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
            </View>
          </View>

          {/* Native Date Picker */}
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) setSelectedDate(date);
              }}
            />
          )}
        </Modal>

        {/* Reading Picker Modal */}
        <ReadingPicker
          visible={readingModalVisible}
          onClose={() => setReadingModalVisible(false)}
          onSelect={(value) => setSelectedReading(value)}
          defaultValue={120}
          min={60}
          max={200}
          label="Systolic"
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    paddingTop: hp('8%'),
    paddingHorizontal: wp('4.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    marginBottom: hp('2%'),
    color: Colors.primary,
  },
  dateTrigger: {
    marginBottom: 16,
    alignItems: 'center',
  },
  dateText: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginTop: 5,
  },
  readingTrigger: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },
  readingText: {
    color: '#fff',
    fontFamily: Fonts.bold,
  },
  cancelText: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
});

export default AddNewReport;
