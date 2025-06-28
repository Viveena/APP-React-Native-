import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import moment from 'moment';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  onSelect?: (date: string) => void;
}

const DateScroller = ({ onSelect }: Props) => {
  const today = moment();
  const [selectedIndex, setSelectedIndex] = useState(2); // index 2 corresponds to today

  const getFiveDayRange = () => {
    return Array.from({ length: 31 }, (_, i) => {
      const date = moment(today).add(i - 2, 'days'); // -2, -1, 0, +1, +2
      return {
        day: date.format('DD'),
        weekday: date.format('ddd'),
        fullDate: date.format('YYYY-MM-DD'),
        isToday: date.isSame(today, 'day'),
      };
    });
  };

  const data = getFiveDayRange();

  const handlePress = (index: number, fullDate: string) => {
    setSelectedIndex(index);
    onSelect?.(fullDate);
  };

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      keyExtractor={(item) => item.fullDate}
      renderItem={({ item, index }) => {
        const isSelected = index === selectedIndex;
        return (
          <TouchableOpacity
            onPress={() => handlePress(index, item.fullDate)}
            style={[styles.dateContainer, isSelected && styles.selectedContainer]}
          >
            <Text style={[styles.dayText, isSelected && styles.selectedText]}>
              {item.day}
            </Text>
            <Text style={[styles.weekdayText, isSelected && styles.selectedText]}>
              {item.weekday}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: wp('1%'),
    marginTop: hp('0.5%'),
    marginBottom: hp('1.5%'),
  },
  dateContainer: {
    width: 52,
    height: 86,
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('5%'),
    backgroundColor: '#F4F4F4',
  },
  selectedContainer: {
    backgroundColor: Colors.primary,
  },
  dayText: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.bold,
    color: '#000',
  },
  weekdayText: {
    fontSize: wp('3.2%'),
    fontFamily: Fonts.regular,
    color: '#666',
  },
  selectedText: {
    color: Colors.text,
  },
});

export default DateScroller;
