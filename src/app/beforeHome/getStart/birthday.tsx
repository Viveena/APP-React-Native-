import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import ProgressBar from '@/src/components/atmos/progressBar';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { FlatList, ImageBackground, Platform, StyleSheet, Text, View, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';


const ITEM_HEIGHT = hp('6%');
const PICKER_HEIGHT = hp('30%');
const CENTER_PADDING = (PICKER_HEIGHT - ITEM_HEIGHT) / 2;

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => 2024 - i); // from 2024 to 1925

export default function Birthday() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(25);
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedYear, setSelectedYear] = useState(1995);

  const dayRef = useRef<FlatList>(null);
  const monthRef = useRef<FlatList>(null);
  const yearRef = useRef<FlatList>(null);

  const scrollToIndex = (ref, value, data) => {
    const index = data.indexOf(value);
    ref?.current?.scrollToOffset({ offset: index * ITEM_HEIGHT, animated: false });
  };

  const onScrollEnd = (e, data, setSelected, ref) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    setSelected(data[index]);
    ref?.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated: true,
    });
  };

  const handleContinue = () => {
    const formatted = `${String(selectedDay).padStart(2, '0')}-${String(
      selectedMonth
    ).padStart(2, '0')}-${selectedYear}`;
    console.log('Birthday:', formatted);
    router.push('/beforeHome/getStart/weight');
  };

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <BackButton />
          <ProgressBar currentStep={3} totalSteps={6} />
          <View style={{ width: wp('6%') }} />
        </View>

        {/* Title */}
        <Text style={styles.label}>When is your birthday?</Text>

        {/* Picker */}
        <View style={styles.pickerRow}>
          {[
            { ref: dayRef, data: days, selected: selectedDay, setSelected: setSelectedDay, label: 'Date' },
            { ref: monthRef, data: months, selected: selectedMonth, setSelected: setSelectedMonth, label: 'Month' },
            { ref: yearRef, data: years, selected: selectedYear, setSelected: setSelectedYear, label: 'Year' },
          ].map(({ ref, data, selected, setSelected, label }, i) => (
            <View key={i} style={styles.pickerColumn}>
              <Text style={styles.columnLabel}>{label}</Text>
              <FlatList
                ref={ref}
                data={data}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                contentContainerStyle={{ paddingVertical: CENTER_PADDING }}
                getItemLayout={(_, index) => ({
                  length: ITEM_HEIGHT,
                  offset: ITEM_HEIGHT * index,
                  index,
                })}
                initialScrollIndex={data.indexOf(selected)}
                onMomentumScrollEnd={(e) => onScrollEnd(e, data, setSelected, ref)}
                renderItem={({ item }) => {
                  const isActive = item === selected;
                  return (
                    <View style={styles.itemContainer}>
                      <Text style={[styles.itemText, isActive && styles.activeText]}>
                        {item}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          ))}
          {/* Highlight Overlay */}
          <View style={styles.indicator} pointerEvents="none" />
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton title="Continue" type="primary" onPress={handleContinue} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: Platform.OS === 'android' ? hp('4%') : hp('6%'),
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('4%'),
  },
  label: {
    fontSize: 40,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    color: Colors.primary,
    marginBottom: hp('1%'),
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: PICKER_HEIGHT + hp('5%'), // Add space for label
    position: 'relative',
    overflow: 'hidden',
  },
  pickerColumn: {
    alignItems: 'center',
    width: wp('25%'),
  },
  columnLabel: {
    fontSize: wp('4%'),
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginBottom: hp('2%'),
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
  },
  activeText: {
    fontSize: wp('6%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  indicator: {
    position: 'absolute',
    top: (PICKER_HEIGHT + hp('9%') - ITEM_HEIGHT) / 2,
    height: ITEM_HEIGHT,
    width: '100%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },
  buttonWrapper: {
    marginBottom: hp('7%'),
  },
});
