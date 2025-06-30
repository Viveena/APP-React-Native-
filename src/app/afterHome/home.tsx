
import React, { useState } from 'react';
import {
  FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import ViewAllButton from '@/src/components/atmos/viewAllButton';
import ArticleCard from '@/src/components/molecules/articleCard';
import CurrentDateDisplay from '@/src/components/molecules/currentDateDisplay';
import DateScroller from '@/src/components/molecules/dateScroller';
import DoctorImageCard from '@/src/components/molecules/doctorImageCard';
import GreetingCard from '@/src/components/molecules/greetingCard';
import HabitStatsList from '@/src/components/molecules/habitdataHome';
import HealthStatsList from '@/src/components/molecules/healtdataHome';
import MedicationListHorizontal from '@/src/components/molecules/medicationList_horizontal';
import ProgressCard from '@/src/components/molecules/progressCard';
import TabSwitch from '@/src/components/molecules/tabSwitch';
import WeeklyPill from '@/src/components/molecules/weeklyPill';
import { articleData } from '@/src/constants/articleData';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Health');
  const router = useRouter();

  const sections = [
  { key: 'greeting', render: () => <GreetingCard name="Maddy" /> },
  {
    key: 'progress',
    render: () => (
      <ProgressCard
        habitsDone={2}
        totalHabits={3}
        tasksDone={3}
        totalTasks={5}
        percentage={70}
      />
    ),
  },
  {
    key: 'dates',
    render: () => (
      <DateScroller onSelect={(date) => console.log('Selected:', date)} />
    ),
  },
  {
    key: 'currentDate',
    render: () => <CurrentDateDisplay />,
  },
  {
  key: 'tabs',
  render: () => (
    <>
      <TabSwitch
        tabs={['Health', 'Habits']}
        activeTab={selectedTab}
        onTabChange={(tab) => {
          router.push('');
          setSelectedTab(tab as 'Health' | 'Habits');
        }}
      />
      {selectedTab === 'Health' ? <HealthStatsList /> : <HabitStatsList />}
    </>
  ),
},

  {
  key: 'viewAllButton',
  render: () => (
    <ViewAllButton onPress={() => router.push('/afterHome/Screens/addNewStat')} />
  ),
  },

  {
  key: 'doctorCard',
  render: () => (
    <DoctorImageCard
      image={require('@/src/assets/images/doctor.png')}
      title="Your Health. Your Way."
      subtitle="Stay on track with smart health insights."
    />
  ),
},


{ key: 'medicationCard',
  render: () => (
  <>
      <WeeklyPill />
      <CurrentDateDisplay />
      <MedicationListHorizontal/>
    </>
  ),
},
{
  key: 'articles',
  render: () => (
    <View>
      {/* Header row with title and arrow */}
      <View style={styles.articleHeaderRow}>
        <Text style={styles.header}>Tips & Articles</Text>
        <TouchableOpacity onPress={() => router.push('/afterHome/articles')}>
          <Ionicons name="arrow-forward" size={wp('6%')} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Horizontal list of article cards */}
      <FlatList
        data={articleData}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ArticleCard {...item} />}
        contentContainerStyle={{ paddingRight: wp('4%') }}
        ItemSeparatorComponent={() => <View style={{ width: wp('3%') }} />}
      />
    </View>
  ),
},



];

  return (
    <ImageBackground
      source={BackgroundImage.home_bg}
      style={styles.background}
      resizeMode="stretch"
    >
      <FlatList
        data={sections}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.section}>{item.render()}</View>
        )}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    paddingHorizontal: wp('4%'),
    paddingTop: hp('1.5%'),
    paddingBottom: hp('13%'),
  },
  section: {
    marginBottom: hp('0%'),
  },
  articleHeaderRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: hp('3%'),
  marginBottom: hp('1%'),
  marginLeft:hp('1%')
  },
  header: {
    fontSize: wp('5%'),
    fontFamily: Fonts.bold,
    color: Colors.secondary,
  },
});

export default HomeScreen;
