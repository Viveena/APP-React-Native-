import BackButton from '@/src/components/atmos/backButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SwipeListView } from 'react-native-swipe-list-view';

const dummyDoctors = [
  {
    id: '1',
    name: 'Dr. Priya Mehta',
    post: 'Cardiologist',
    phone: '+911234567890',
    image: require('@/src/assets/images/profile.png'),
  },
  {
    id: '2',
    name: 'Dr. Raj Malhotra',
    post: 'Pediatrician',
    phone: '+911112223334',
    image: require('@/src/assets/images/profile.png'),
  },
];

const DoctorListScreen = () => {
  const [doctors, setDoctors] = useState(dummyDoctors);
  const router = useRouter();

  const handleDelete = (id) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.avatar} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.post}>{item.post}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL(`tel:${item.phone}`)}
        >
          <Ionicons name="call" size={20} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL(`https://wa.me/${item.phone.replace('+', '')}`)}
        >
          <FontAwesome name="whatsapp" size={25} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Ionicons name="trash" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.screen}>
        {/* Back Button */}
        <BackButton />

        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={styles.heading}>Doctors</Text>
          <TouchableOpacity onPress={() => router.push('/afterHome/profile/add_doctor')}>
            <Ionicons name="add-circle" size={32} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Doctor List */}
        <SwipeListView
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          disableRightSwipe
          contentContainerStyle={{ paddingBottom: hp('10%') }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: wp('4%'),
    paddingTop: hp('5.5%'),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
    paddingHorizontal: wp('1%'),
    marginTop:hp('1%')
  },
  heading: {
    fontSize: wp('8.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
  },
  card: {
    backgroundColor: '#E0F5F2',
    borderRadius: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'),
    marginBottom: hp('1.5%'),
  },
  avatar: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    marginRight: wp('4%'),
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  post: {
    fontSize: wp('3.8%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  iconButton: {
    padding: wp('1.5%'),
  },
  hiddenContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    paddingRight: wp('4%'),
    borderRadius: wp('5%'),
    marginBottom: hp('1.5%'),
  },
  deleteButton: {
    width: 75,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DoctorListScreen;
