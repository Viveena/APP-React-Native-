import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import MedicationCard from '@/src/components/molecules/medicationCard';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import medicationData from '@/src/constants/medicationData';
import { router } from 'expo-router';

const MedicationScreen = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const agendaItems = medicationData.reduce((acc, item) => {
    const existing = acc.find(section => section.title === item.date);
    const mappedMeds = item.meds.map(med => ({
      name: med.name,
      dose: med.dose,
      time: item.time,
    }));

    if (existing) {
      existing.data.push(...mappedMeds);
    } else {
      acc.push({ title: item.date, data: mappedMeds });
    }

    return acc;
  }, []);

  const markedDates = {
    [selectedDate]: {
      selected: true,
      marked: true,
      selectedColor: '#fff',
      dotColor: Colors.primary,
    },
  };

  return (
    <ImageBackground
      source={BackgroundImage.profileOptions_bg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <BackButton />
          <Text style={styles.heading}>Medications</Text>
        </View>

        {/* Calendar */}
        <CalendarProvider
          date={selectedDate}
          onDateChanged={setSelectedDate}
          showTodayButton
        >
          <View style={styles.calendarWrapper}>
            <ExpandableCalendar
              firstDay={1}
              markedDates={markedDates}
              onDayPress={day => setSelectedDate(day.dateString)}
              disablePan={false}
              theme={{
                calendarBackground: Colors.primary,
                textSectionTitleColor: '#fff',
                selectedDayBackgroundColor: '#fff',
                selectedDayTextColor: Colors.primary,
                todayTextColor: '#FFEB3B',
                dayTextColor: '#fff',
                textDisabledColor: '#FFFFFF50',
                arrowColor: '#fff',
                monthTextColor: '#fff',
                textDayFontFamily: Fonts.regular,
                textMonthFontFamily: Fonts.bold,
                textDayHeaderFontFamily: Fonts.regular,
                textDayFontSize: wp('4.2%'),
                textMonthFontSize: wp('3.8%'),
                textDayHeaderFontSize: wp('3.5%'),
              }}
              style={styles.calendar}
            />
          </View>

          {/* Bar */}
          <View style={styles.barWrapper}>
            <Text style={styles.greyBarText}>Time</Text>
            <Text style={styles.greyBarText}>Medication</Text>
          </View>

          {/* Agenda */}
          <AgendaList
            sections={agendaItems.filter(section => section.title === selectedDate)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.timeText}>{item.time}</Text>
                <View style={styles.cardContainer}>
                  <MedicationCard name={item.name} dose={item.dose} />
                </View>
              </View>
            )}
            renderSectionHeader={() => null}
            ListEmptyComponent={() => (
              <View style={styles.emptyContainer}>
                <View style={styles.iconWrapper}>
                  <Ionicons name="alert-circle" size={wp('13%')} color="#fff" />
                </View>
                <Text style={styles.notFoundText}>
                  You have no medications or reminders at this date
                </Text>
                <Text style={styles.subtextnotfound}>
                  Please add a new medication in order to see your schedule.
                </Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: hp('5%') }}
            style={{ flex: 1 }}
          />
        </CalendarProvider>

        {/* Buttons */}
        <View style={styles.Buttons}>
          <PrimaryButton
            title="Add Medication"
            type="primary"
            onPress={() => router.push('/afterHome/Screens/addMedication')}
          />
          <PrimaryButton
            title="View Added Medication"
            type="secondary"
            onPress={() => router.push('/afterHome/Screens/viewAddedMedication')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    flex: 1,
    paddingTop: hp('6%'),
    paddingHorizontal: wp('5%'),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  heading: {
    fontSize: wp('5.5%'),
    fontFamily: Fonts.bold,
    color: Colors.secondary,
    marginLeft: wp('5%'),
  },
  calendarWrapper: {
    borderRadius: wp('3%'),
    overflow: 'hidden',
    marginBottom: hp('1.5%'),
    width: '100%',
  },
  calendar: {
    paddingLeft: wp('1%'),
  },
  barWrapper: {
    backgroundColor: '#F5F5F5',
    height: hp('5%'),
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('10%'),
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
  },
  greyBarText: {
    fontSize: wp('4%'),
    fontFamily: Fonts.bold,
    color: Colors.secondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp('2%'),
    gap: wp('2%'),
  },
  timeText: {
    width: wp('20%'),
    fontFamily: Fonts.regular,
    fontSize: wp('3.5%'),
    color: '#00000080',
    marginTop: hp('1.5%'),
    marginLeft: hp('0.5%'),
  },
  cardContainer: {
    flex: 1,
    gap: hp('1%'),
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('6%'),
    paddingHorizontal: wp('5%'),
  },
  iconWrapper: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    width: wp('18%'),
    height: wp('18%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  notFoundText: {
    fontSize: wp('4.5%'),
    color: Colors.primary,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  subtextnotfound: {
    fontSize: wp('3.5%'),
    color: Colors.secondary,
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
  Buttons: {
    alignItems: 'center',
    width: '100%',
    marginBottom: hp('7%'),
  },
});

export default MedicationScreen;
