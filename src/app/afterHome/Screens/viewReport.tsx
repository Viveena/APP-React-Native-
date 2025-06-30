import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';

import LineCustomChart from '@/src/components/molecules/lineChart_viewreport';
import TabSwitch from '@/src/components/molecules/tabSwitch';
import { BackgroundImage } from '@/src/constants/backgroundImage';
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
const  ViewReport = () => {
  const [selectedTab, setSelectedTab] = useState('Weekly');
  const [currentDateTime, setCurrentDateTime] = useState('');

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
        <Text style={styles.headerText}>View Reports</Text>
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
        </View>
      </View>

      {/* Tab and Chart */}
      <TabSwitch
        tabs={['Weekly', 'Monthly', 'Quarterly']}
        activeTab={selectedTab}
        onTabChange={(tab) => {
          console.log('Selected Tab:', tab);
          setSelectedTab(tab);
        }}
      />


      <LineCustomChart period={selectedTab} />


      {/* AI Suggestions */}
      <View style={styles.aiBox}>
        <Image source={require('@/src/assets/images/ai_doc.png')} style={styles.docImg} />
        <View style={{ flex: 1 }}>
          <Text style={styles.aiTitle}>AI Suggestions</Text>
          <Text style={styles.aiText}>Preventive care and regular check ups help detect issues early and improve long-term well-being.</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.Buttons}>
          <PrimaryButton
            title="EXPORT"
            type="primary"
            onPress={() => router.push('')}
          />
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
   marginBottom:hp('1%') },

  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: hp('2%') },

  headerText: {
  fontSize: 22,
  fontFamily: Fonts.bold,
  color: '#000',
  marginRight:hp('5%'),
  
},


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
    marginBottom: hp('1%'), 
    marginTop:hp('1%'),
    width:350,
    height:99,
    marginLeft:hp('0.5%'),
    position: 'relative',

},

  dropIcon: { width: 136, 
    height: 135, 
    resizeMode: 'contain',
    position: 'absolute',
    top: -hp('5.5%'), // Push out from top
    left: wp('51%'),
    zIndex: 1,
  },

  title: { fontSize: 20, 
    fontFamily: Fonts.bold,
    marginTop:-hp('0.5%') 
  },

  subtitle: { fontFamily: Fonts.regular, 
    fontSize:12,
    color: '#4C4C4C', 
    marginBottom: 8,
  marginTop:hp('0.3%'),
  },

  rowWithIcon: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    marginBottom: 5,
   
    
  },

  dateText: { 
    fontFamily: Fonts.regular, 
    color: Colors.secondary ,

  },

  aiBox: { flexDirection: 'row', 
    backgroundColor: '#07AE9C29', 
    padding: 14, 
    borderRadius: 16, 
    alignItems: 'center', 
    gap: 10, 
    marginTop:hp('2%'),
    marginBottom: hp('2%'),
    marginLeft:hp('2.5%'),
    width:350,
    height:124,
   },

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

  Buttons: {
    marginBottom: hp('5%'),
    paddingHorizontal: wp('4.5%'),
  },
});

export default ViewReport;
