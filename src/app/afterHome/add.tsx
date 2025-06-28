import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AddStatCard from '@/src/components/molecules/addStatCard';
import StatCard from '@/src/components/molecules/statCard';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { habitData } from '@/src/constants/habitData';
import { HealthData } from '@/src/constants/healthData';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
    <ImageBackground source={BackgroundImage.bg_image_white} style={styles.backgroundImage} resizeMode="cover">
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />

      <Modal visible={true} transparent animationType="fade">
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            {/* Close button */}
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>

            {/* Modal Header */}
            <Text style={styles.headerText}>Health & Habits</Text>

            {/* Stat Cards */}
            <FlatList
              data={combinedStats}
              keyExtractor={(_, index) => index.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: hp('2%'),
              }}
              contentContainerStyle={{ paddingBottom: hp('5%'), paddingTop: 10 }}
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
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:hp('0.5%'),
    marginTop:hp('1.5%'),
  },
  modalContent: {
    width: '92%',
    height: '90%',
    backgroundColor:'transperent',
    borderRadius: 24,
    padding: wp('1.9%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,

  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
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
});

export default AllStatsModalScreen;
