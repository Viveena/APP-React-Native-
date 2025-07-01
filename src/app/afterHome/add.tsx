import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AddStatCard from '@/src/components/molecules/addStatCard';
import StatCard from '@/src/components/molecules/statCard';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { habitData } from '@/src/constants/habitData';
import { HealthData } from '@/src/constants/healthData';

const AllStatsModalScreen = () => {
  const router = useRouter();

  const combinedStats = [
    ...(Array.isArray(HealthData) ? HealthData : []),
    ...(Array.isArray(habitData) ? habitData : []),
    { isAddCard: true },
  ];

  const handleClose = () => {
    router.replace('/afterHome/home');
  };

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />

      <Modal visible transparent animationType="fade">
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={wp('6%')} color="#000" />
            </TouchableOpacity>

            {/* Header */}
            <Text style={styles.headerText}>Health & Habits</Text>

            {/* Cards List */}
            <FlatList
              data={combinedStats}
              keyExtractor={(_, index) => index.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.contentContainer}
              renderItem={({ item }) =>
                item.isAddCard ? (
                  <TouchableOpacity onPress={() => router.push('/afterHome/Screens/addNewStat')}>
                    <AddStatCard />
                  </TouchableOpacity>
                ) : (
                  <StatCard {...item} />
                )
              }
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,

  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('1.5%'),
  },
  modalContent: {
    width: wp('100%'),
    height: hp('90%'),
    borderRadius: wp('5%'),
    padding: wp('4%'),
  },
  closeButton: {
    position: 'absolute',
    top: hp('3%'),
    right: wp('4%'),
    zIndex: 10,
  },
  headerText: {
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: hp('2%'),
    marginTop: hp('1%'),
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  contentContainer: {
    paddingTop: hp('1%'),
    paddingBottom: hp('6%'),
  },
});

export default AllStatsModalScreen;
