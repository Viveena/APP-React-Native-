import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const CurrentDateDisplay = () => {
  const dayName = moment().format('dddd');              // e.g., Tuesday
  const fullDate = moment().format('D MMMM, YYYY');     // e.g., 25 June, 2025
  const currentTime = moment().format('hh:mm A');       // e.g., 05:40 PM

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialCommunityIcons name="calendar-month-outline" size={wp('8%')} color={'#07AE9C'} />
        <Text style={styles.dayText}>{dayName}</Text>
      </View>
      <Text style={styles.dateText}>
        {fullDate} - {currentTime}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp('0.5%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('1%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  dayText: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: Colors.secondary,
  },
  dateText: {
    fontSize: 14,
    color: '#888',
    fontFamily: Fonts.semi_bold,
    marginLeft: wp('12%'),
  },
});

export default CurrentDateDisplay;
