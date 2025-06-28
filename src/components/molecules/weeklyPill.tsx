// src/components/molecules/weeklyPillTracker.tsx

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeeklyPill = () => {
  const today = new Date().getDay(); // 0-6 (Sun = 0)

  return (
    <View style={styles.row}>
      {days.map((day, index) => {
        const isToday = index === today;

        return (
          <View style={styles.dayContainer} key={index}>
            <Image
              source={require('@/src/assets/images/pills.png')}
              style={[
                styles.capsule,
                !isToday && styles.inactiveCapsule, // dimmed look
              ]}
              resizeMode="contain"
            />
            <Text style={styles.dayText}>{day}</Text>
            {isToday && <View style={styles.dot} />}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
  },
  dayContainer: {
    alignItems: 'center',
    width: wp('12%'),
  },
  capsule: {
    width: wp('7%'),
    height: wp('7%'),
    opacity: 1, // full opacity for today
  },
  inactiveCapsule: {
    opacity: 0.3, // freeze/dim effect for others
  },
  dayText: {
    marginTop: hp('0.5%'),
    fontSize: wp('3%'),
    color: '#444',
  },
  dot: {
    width: wp('1.5%'),
    height: wp('1.5%'),
    backgroundColor: '#07AE9C',
    borderRadius: 999,
    marginTop: hp('0.5%'),
  },
});

export default WeeklyPill;
