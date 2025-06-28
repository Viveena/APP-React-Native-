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
   marginBottom:hp('18%') },

  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: hp('2%') },

  headerText: { 
    fontSize: 20, 
    fontFamily: Fonts.bold },

  shareButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#07AE9C', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 12,
    height:40,
    width:93 },

  shareText: { color: Colors.text, 
    marginLeft: 4, 
    fontFamily: Fonts.regular },

  card: { backgroundColor: '#FFEAEA', 
    borderRadius: 20, 
    padding: 16, 
    marginBottom: hp('2%'), 
    marginTop:hp('1%'),
    width:350,
    height:210,
    marginLeft:hp('0.5%')
},

  cardHeader: { flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' },

  dropIcon: { width: 136, 
    height: 135, 
    resizeMode: 'contain',
    position: 'absolute',
    top: -hp('5.5%'), // ⬅️ Push out from top
    left: wp('51%'),
    zIndex: 1,
  },

  title: { fontSize: 20, 
    fontFamily: Fonts.bold 
  },

  subtitle: { fontFamily: Fonts.regular, 
    fontSize:12,
    color: '#4C4C4C', 
    marginBottom: 8,
  marginTop:hp('0.5%'),  },

  rowWithIcon: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    marginBottom: 12,
    
  },

  dateText: { 
    fontFamily: Fonts.regular, 
    color: Colors.secondary },

  statRow: { flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 5,
    backgroundColor:Colors.text,
    // padding:hp('1%'),
    height:92,
    width:300,
    borderRadius:18,
    paddingTop:hp('2%'),
    marginLeft:hp('0.9%')
   },

  statBox: { alignItems: 'center',
    gap:1,
   },

  statValue: { fontSize: 20, 
    color:'#C00806',
    fontFamily: Fonts.bold },

  unit: { fontSize: 12, 
    color:Colors.secondary },

  label: { fontSize: 12, 
    fontFamily: Fonts.regular, 
    marginTop: 2,
    color:Colors.secondary  },

  aiBox: { flexDirection: 'row', 
    backgroundColor: '#07AE9C29', 
    padding: 14, 
    borderRadius: 16, 
    alignItems: 'center', 
    gap: 10, 
    marginTop:hp('2%'),
    marginBottom: hp('2%'),
    marginLeft:hp('0.5%'),
    width:350,
    height:124 },

  docImg: { width: 185, 
    height: 179, 
    resizeMode: 'contain',
    position: 'absolute',
    top: -hp('3%'), // ⬅️ Push out from top
    left: wp('0.5%'),
    zIndex: 1,
   },

  aiTitle: { fontSize: 16, 
    fontFamily: Fonts.bold,
    marginLeft:hp('16.5%'),
    marginBottom:hp('1%') },

  aiText: { fontSize: 11,
     fontFamily: Fonts.regular, 
     color: '#444',
    marginLeft:hp('16.5%')  },

    historyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DAF3F0',
    padding: 14,
    borderRadius: 22,
    marginVertical: 8,
    marginHorizontal: 8,
    width: 330,
    alignSelf: 'center',
  },
  readingSection: {
    justifyContent: 'center',
  },
  readingLabel: {
    fontSize: 12,
    color: '#555',
    fontFamily: Fonts.regular,
  },
  readingValue: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: 6,
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
    borderRadius: 16,
    padding: 20,
    width: '85%',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  unitInput: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    height: 45,
    fontFamily: Fonts.regular,
    width: '100%',
  },
});

export default ReportScreen;
