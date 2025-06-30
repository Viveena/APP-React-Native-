import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import CustomChart from '@/src/components/molecules/customChart_report';
import TabSwitch from '@/src/components/molecules/tabSwitch';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const reportData = [
  { label: '17 Jun', systolic: 104, diastolic: 76 },
  { label: '18 Jun', systolic: 102, diastolic: 72 },
  { label: '19 Jun', systolic: 102, diastolic: 73 },
  { label: '20 Jun', systolic: 102, diastolic: 73 },
  { label: '21 Jun', systolic: 102, diastolic: 73 },
  { label: '22 Jun', systolic: 102, diastolic: 73 },
  { label: '23 Jun', systolic: 102, diastolic: 73 },
];
const ReportScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Statistics');
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reading, setReading] = useState('');
  const [unit, setUnit] = useState('mmHg');

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    setCurrentDateTime(formattedDateTime); // e.g., "27 Jun 2025, 09:35 PM"
  }, []);

  return (
    <ImageBackground
          source={BackgroundImage.profileOptions_bg}
          style={styles.background}
          resizeMode="cover"
        >
    <ScrollView>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton/>
        <Text style={styles.headerText}>Reports</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="send" size={20} color="#fff" />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Summary Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>Blood Pressure</Text>

          <Image source={require('@/src/assets/images/blood_drop.png')} style={styles.dropIcon} />

        </View>
        <Text style={styles.subtitle}>Lifetime average Summary</Text>
        <View style={styles.rowWithIcon}>
          <Ionicons name="calendar" size={18} color={Colors.primary} />
          <Text style={styles.dateText}>{currentDateTime}</Text>

        </View>

        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.label}>Systolic</Text>
            <Text style={styles.statValue}>105</Text>
            <Text style={styles.unit}>mmHg</Text>
            
          </View>

          <View style={styles.statBox}>
             <Text style={styles.label}>Diastolic</Text>
            <Text style={styles.statValue}>73</Text>
            <Text style={styles.unit}>mmHg</Text>
           
          </View>
          <View style={styles.statBox}>
            <Text style={styles.label}>Pulse</Text>
            <Text style={styles.statValue}>76</Text>
            <Text style={styles.unit}>BPM</Text>
          </View>
        </View>
      </View>

      {/* AI Suggestions */}
      <View style={styles.aiBox}>
        <Image source={require('@/src/assets/images/ai_doc.png')} style={styles.docImg} />
        <View style={{ flex: 1 }}>
          <Text style={styles.aiTitle}>AI Suggestions</Text>
          <Text style={styles.aiText}>Preventive care and regular check ups help detect issues early and improve long-term well-being.</Text>
        </View>
      </View>

      {/* Tab and Chart */}
      <TabSwitch
        tabs={['Statistics', 'History']}
        activeTab={selectedTab}
        onTabChange={(tab) => {
          console.log('Selected Tab:', tab);
          setSelectedTab(tab);
        }}
      />

{selectedTab === 'Statistics' ? (
  <CustomChart data={reportData} />
) : (
  reportData.map((item, index) => (
    <View key={index} style={styles.historyCard}>
      {/* Left: Readings */}
      <View style={styles.readingSection}>
        <Text style={styles.readingLabel}>Systolic</Text>
        <Text style={styles.readingValue}>{item.systolic} mmHg</Text>
        <Text style={styles.readingLabel}>Diastolic</Text>
        <Text style={styles.readingValue}>{item.diastolic} mmHg</Text>
      </View>

      {/* Right: Date & Time */}
      <View style={styles.dateSection}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          <Ionicons name="calendar" size={16} color={Colors.primary} />
          <Text style={styles.dateText}>  {item.label}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="time" size={16} color={Colors.primary} />
          <Text style={styles.dateText}>  09:30 AM</Text> {/* replace with real time */}
        </View>
      </View>
    </View>
  ))
)}


      {/* Buttons */}
      <View style={styles.Buttons}>
          <PrimaryButton
            title="VIEW REPORT"
            type="primary"
            onPress={() => router.push('/afterHome/Screens/viewReport')}
          />
          <PrimaryButton
            title="ADD NEW"
            type="secondary"
            onPress={() =>setModalVisible(true)}
          />
        </View>

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeIcon} onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color={Colors.primary} />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Add New Entry</Text>

              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateRow}>
                <Ionicons name="calendar" size={18} color={Colors.primary} />
                <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setShowDatePicker(false);
                    if (date) setSelectedDate(date);
                  }}
                />
              )}

              <TextInput
                placeholder="Enter Reading"
                keyboardType="numeric"
                value={reading}
                onChangeText={setReading}
                style={styles.unitInput}
              />
              <TextInput
                placeholder="Enter Unit (e.g. mmHg)"
                value={unit}
                onChangeText={setUnit}
                style={styles.unitInput}
              />

              <PrimaryButton
                title="Save Reading"
                type="primary"
                onPress={() => {
                  console.log('Saved:', { date: selectedDate, reading, unit });
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
                </Modal>
    </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    flex: 1,
    paddingTop: hp('8%'),
    paddingHorizontal: wp('4.5%'),
    marginBottom: hp('18%'),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  headerText: {
    fontSize: hp('2.5%'),
    fontFamily: Fonts.bold,
  },

  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#07AE9C',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0.8%'),
    borderRadius: wp('3%'),
    height: hp('5.5%'),
    width: wp('25%'),
  },

  shareText: {
    color: Colors.text,
    marginLeft: wp('1%'),
    fontFamily: Fonts.regular,
    fontSize: hp('1.6%'),
  },

  card: {
    backgroundColor: '#FFEAEA',
    borderRadius: wp('5%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
    marginTop: hp('1%'),
    width: wp('90%'),
    height: hp('28%'),
    alignSelf: 'center',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropIcon: {
    width: wp('35%'),
    height: wp('35%'),
    resizeMode: 'contain',
    position: 'absolute',
    top: -hp('5.5%'),
    left: wp('55%'),
    zIndex: 1,
  },

  title: {
    fontSize: hp('2.5%'),
    fontFamily: Fonts.bold,
  },

  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: hp('1.6%'),
    color: '#4C4C4C',
    marginBottom: hp('1%'),
    marginTop: hp('0.5%'),
  },

  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    marginBottom: hp('1.5%'),
  },

  dateText: {
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    fontSize: hp('1.6%'),
  },

  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
    backgroundColor: Colors.text,
    height: hp('11%'),
    width: wp('80%'),
    borderRadius: wp('5%'),
    paddingTop: hp('1.3%'),
    alignSelf: 'center',
    
  },

  statBox: {
    alignItems: 'center',
    gap: 1,
   
  },

  statValue: {
    fontSize: hp('2.4%'),
    color: '#C00806',
    fontFamily: Fonts.bold,
  },

  unit: {
    fontSize: hp('1.5%'),
    color: Colors.secondary,
  },

  label: {
    fontSize: hp('1.5%'),
    fontFamily: Fonts.regular,
    marginTop: hp('0.4%'),
    color: Colors.secondary,
  },

  aiBox: {
    flexDirection: 'row',
    backgroundColor: '#07AE9C29',
    padding: hp('1.8%'),
    borderRadius: wp('5%'),
    alignItems: 'center',
    gap: wp('2.5%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('18%'),
  },

  docImg: {
    width: wp('42%'),
    height: wp('40%'),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp('2.5%'),
    left: wp('2%'),
    zIndex: 1,
  },

  aiTitle: {
    fontSize: hp('2%'),
    fontFamily: Fonts.bold,
    marginLeft: wp('38%'),
    marginBottom: hp('1%'),
  },

  aiText: {
    fontSize: hp('1.4%'),
    fontFamily: Fonts.regular,
    color: '#444',
    marginLeft: wp('38%'),
  },

  historyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DAF3F0',
    padding: wp('4%'),
    borderRadius: wp('5.5%'),
    marginVertical: hp('1%'),
    width: wp('88%'),
    alignSelf: 'center',
  },

  readingSection: {
    justifyContent: 'center',
  },

  readingLabel: {
    fontSize: hp('1.5%'),
    color: '#555',
    fontFamily: Fonts.regular,
  },

  readingValue: {
    fontSize: hp('2%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('0.5%'),
  },

  dateSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  Buttons: {
    alignItems: 'center',
    width: '100%',
    marginBottom: hp('5%'),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    padding: wp('5%'),
    width: '85%',
    position: 'relative',
  },

  closeIcon: {
    position: 'absolute',
    top: hp('1%'),
    right: wp('3%'),
  },

  modalTitle: {
    fontSize: hp('2.3%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: hp('2%'),
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    gap: wp('2%'),
  },

  unitInput: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('3%'),
    marginBottom: hp('1.5%'),
    height: hp('6%'),
    fontFamily: Fonts.regular,
    width: '100%',
    fontSize: hp('1.8%'),
  },
});

export default ReportScreen;
