import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import ProgressBar from '@/src/components/atmos/progressBar';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const ITEM_HEIGHT = hp('6%');
const PICKER_HEIGHT = hp('37%');
const CENTER_PADDING = (PICKER_HEIGHT - ITEM_HEIGHT) / 1.9;

export default function ReminderTimeScreen() {
  const router = useRouter();

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const meridiems = ['AM', 'PM'];

  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(5);
  const [selectedMeridiem, setSelectedMeridiem] = useState('AM');

  const hourRef = useRef<FlatList>(null);
  const minuteRef = useRef<FlatList>(null);
  const meridiemRef = useRef<FlatList>(null);

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

  const handleFinish = () => {
    const formatted = `${String(selectedHour).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')} ${selectedMeridiem}`;
    console.log('Selected Reminder Time:', formatted);
    router.push('/beforeHome/afterSignupScreens/signIn'); 
  };


  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topRow}>
          <BackButton />
          <ProgressBar currentStep={6} totalSteps={6} />
          <View style={{ width: wp('6%') }} />
        </View>

        <Text style={styles.title}>
          When would you like to receive health check reminders?
        </Text>

        <View style={styles.pickerRow}>
          {[
            { ref: hourRef, data: hours, selected: selectedHour, setSelected: setSelectedHour, label: 'Hour' },
            { ref: minuteRef, data: minutes, selected: selectedMinute, setSelected: setSelectedMinute, label: 'Minute' },
            { ref: meridiemRef, data: meridiems, selected: selectedMeridiem, setSelected: setSelectedMeridiem, label: 'AM/PM' },
          ].map(({ ref, data, selected, setSelected, label }, index) => (
            <View key={index} style={styles.pickerColumn}>
              <Text style={styles.columnLabel}>{label}</Text>
              <FlatList
                    ref={ref}
                    data={data}
                    keyExtractor={(item) => item.toString()}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    contentContainerStyle={{
                        paddingTop: CENTER_PADDING,
                        paddingBottom: CENTER_PADDING,
                    }}
                    getItemLayout={(_, i) => ({
                        length: ITEM_HEIGHT,
                        offset: ITEM_HEIGHT * i,
                        index: i,
                    })}
                    initialScrollIndex={data.indexOf(selected)}
                    onMomentumScrollEnd={(e) =>
                        onScrollEnd(e, data, setSelected, ref)
                    }
                    renderItem={({ item }) => {
                        const isActive = item === selected;
                        return (
                        <View style={styles.itemContainer}>
                            <Text style={[styles.itemText, isActive && styles.activeText]}>
                            {typeof item === 'number' ? String(item).padStart(2, '0') : item}
                            </Text>
                        </View>
                        );
                    }}
                    />

            </View>
          ))}
          <View style={styles.indicator} pointerEvents="none" />
        </View>

        <Text style={styles.note}>You can always change this later.</Text>

        <View style={styles.buttonWrapper}>
          <PrimaryButton title="Finish" type="primary" onPress={handleFinish} />
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
    marginBottom: hp('3%'),
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.regular,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: PICKER_HEIGHT + hp('5%'),
    position: 'relative',
    overflow: 'hidden',
  },
  pickerColumn: {
    alignItems: 'center',
    width: wp('25%'),
  },
  columnLabel: {
    fontSize: wp('4%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('1.5%'),
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
    top: (PICKER_HEIGHT + hp('8.5%') - ITEM_HEIGHT) / 2,
    height: ITEM_HEIGHT,
    width: '100%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },
  note: {
    textAlign: 'center',
    fontSize: wp('3.5%'),
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginTop: hp('1%'),
  },
  buttonWrapper: {
    marginBottom: hp('5%'),
  },
});
