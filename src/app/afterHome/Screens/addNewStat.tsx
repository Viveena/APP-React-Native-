import BackButton from '@/src/components/atmos/backButton';
import HabitCards from '@/src/components/molecules/habitsCard';
import HealthCards from '@/src/components/molecules/healthCard';
import TabSwitch from '@/src/components/molecules/tabSwitch';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const HealthHabitsScreen = () => {
  const [activeTab, setActiveTab] = useState('Health');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <BackButton/>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#999" style={{ marginRight: 10 }} />
        <TextInput
          placeholder="Search for health/habits"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Tabs */}
      <TabSwitch
        tabs={['Health', 'Habits']}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Dynamic Card Lists */}
      {activeTab === 'Health' ? <HealthCards /> : <HabitCards />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp('6%'),
    paddingHorizontal: wp('5%'),
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    height: hp('6%'),
    marginBottom: hp('2%'),
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
  },
});

export default HealthHabitsScreen;
