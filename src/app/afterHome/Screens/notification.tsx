import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

import BackButton from '@/src/components/atmos/backButton';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { useRouter } from 'expo-router';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const initialNotifications = [
  {
    id: '1',
    title: 'Medication Reminder',
    description: 'Take your morning pills.',
    unread: true,
  },
  {
    id: '2',
    title: 'New Appointment',
    description: 'Doctor visit at 3:00 PM.',
    unread: true,
  },
  {
    id: '3',
    title: 'Health Tips',
    description: 'Drink 8 glasses of water today.',
    unread: false,
  },
];

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const router = useRouter();

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, unread: false } : item
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        markAsRead(item.id);
        router.push(`/afterHome/Screens/notifications/${item.id}`);
      }}
      activeOpacity={0.8}
    >
      <Ionicons
        name="notifications-outline"
        size={wp('6.5%')}
        color={Colors.primary}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      {item.unread && (
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderHiddenItem = ({ item }: any) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteNotification(item.id)}
      >
        <Ionicons name="trash" size={wp('6.5%')} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={BackgroundImage.home_bg}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.heading}>Notifications</Text>
        <SwipeListView
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-wp('18%')}
          disableRightSwipe
          useNativeDriver={true}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: hp('7%'),
    paddingHorizontal: wp('4%'),
  },
  heading: {
    fontSize: wp('7.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    marginBottom: hp('4%'),
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F5F2',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('8%'),
    marginBottom: hp('1.5%'),
    elevation: 5,
  },
  icon: {
    marginRight: wp('4%'),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: wp('4.2%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  description: {
    fontSize: wp('3.5%'),
    fontFamily: Fonts.regular,
    color: '#555',
    marginTop: hp('0.3%'),
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: -hp('0.7%'),
    right: wp('0.5%'),
    width: wp('4.5%'),
    height: wp('4.5%'),
    borderRadius: wp('2.25%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: wp('2.5%'),
    fontFamily: Fonts.semi_bold,
  },
  hiddenContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    marginBottom: hp('1.5%'),
    borderRadius: wp('8%'),
    overflow: 'hidden',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    width: wp('18%'),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationScreen;
