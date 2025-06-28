import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import ProfileStatCards from '@/src/components/molecules/profileStatCards';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { profileOptions } from '@/src/constants/profileOptions';

const ProfileScreen = () => {
  const router = useRouter();

  // Renders the top part of the profile
  const renderHeader = () => (
  <View>
    {/* Header */}
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Profile</Text>
    </View>

    {/* Profile Image */}
    <View style={styles.profileImageWrapper}>
      <Image
        source={require('@/src/assets/images/profile.png')}
        style={styles.profileImage}
      />
    </View>

    {/* Name & Email */}
    <Text style={styles.name}>Leslie Alexander</Text>
    <Text style={styles.email}>lesliealexander@mail.com</Text>

    {/* Stats Cards */}
    <ProfileStatCards />
  </View> // ✅ Add this closing tag
);


  return (
    <ImageBackground source={BackgroundImage.profile_bg} style={styles.background}>
      <FlatList
  data={profileOptions}
  keyExtractor={(item) => item.title}
  ListHeaderComponent={renderHeader}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.optionRow}
      onPress={() => router.push(item.path)} // ✅ Navigate to dynamic path
    >
      <View style={styles.optionLeft}>
        <Image source={item.icon} style={styles.optionIcon} />
        <Text style={styles.optionText}>{item.title}</Text>
      </View>
      <Ionicons name="arrow-forward" size={20} color="#B1B1B1" />
    </TouchableOpacity>
  )}
  ListFooterComponent={
    <TouchableOpacity style={styles.logoutButton}>
      <Text style={styles.logoutText}>L O G O U T</Text>
    </TouchableOpacity>
  }
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: hp('10%') }}
/>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('7%'),
    marginBottom:hp('8%')
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -hp('0.5%'),
  },
  headerText: {
    fontSize: wp('5.5%'),
    fontFamily: Fonts.bold,
    marginLeft: wp('4%'),
    color: Colors.secondary,
  },
  profileImageWrapper: {
    alignSelf: 'center',
    marginVertical: hp('1.5%'),
  },
  profileImage: {
    width: wp('28%'),
    height: wp('28%'),
    borderRadius: wp('14%'),
  },
  name: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize:24,
    color: Colors.secondary,
    marginTop: hp('0.2%'),
  },
  email: {
    textAlign: 'center',
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginBottom: hp('1.5%'),
  },
  statsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: hp('1.5%'),
  },
  statCard: {
    width: 162,
    height:82,
    borderRadius: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'),
    gap: wp('3%'),
  },
  statIcon: {
    width: 44,
    height:44,
    resizeMode: 'contain',
    marginLeft:-hp('1.2%')
  },
  statValue: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.secondary,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: '#888',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2.5%'),
    borderBottomWidth: 1.5,
    borderBottomColor: '#F5F5F5',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('5%'),
  },
  optionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.secondary,
  },
  logoutButton: {
    alignSelf: 'center',
    marginTop: hp('4%'),
    paddingVertical: hp('1.4%'),
    paddingHorizontal: wp('12%'),
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: wp('7%'),
  },
  logoutText: {
    fontSize:14,
    color: Colors.primary,
    fontFamily: Fonts.bold,
    letterSpacing: 1.5,
  },
});

export default ProfileScreen;
