import BackButton from '@/src/components/atmos/backButton';
import PrimaryButton from '@/src/components/atmos/primaryButton';
import ProgressBar from '@/src/components/atmos/progressBar';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
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


const ITEM_HEIGHT = hp('6%');
const PICKER_HEIGHT = hp('36%');
const CENTER_PADDING = (PICKER_HEIGHT - ITEM_HEIGHT) / 1.9;

export default function Weight() {
  const router = useRouter();
  const weights = Array.from({ length: 121 }, (_, i) => i + 30);
  const [selected, setSelected] = useState(76);

  const flatListRef = useRef<FlatList>(null);

  const handleContinue = () => {
    console.log('Selected Weight:', selected, 'kg');
    router.push('/beforeHome/getStart/height');
  };

  const onScrollEnd = (e: any) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    const value = weights[index];
    if (value !== selected) setSelected(value);
    flatListRef.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated: true,
    });
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
          <ProgressBar currentStep={4} totalSteps={6} />
          <View style={{ width: wp('6%') }} />
        </View>

        {/* Title */}
        <Text style={styles.label}>What's your body weight?</Text>

        {/* Weight Picker */}
        <View style={styles.pickerWrapper}>
          <FlatList
            ref={flatListRef}
            data={weights}
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            onMomentumScrollEnd={onScrollEnd}
            contentContainerStyle={{
              paddingVertical: CENTER_PADDING,
            }}
            getItemLayout={(_, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            initialScrollIndex={selected - weights[0]}
            renderItem={({ item }) => {
              const isActive = item === selected;
              return (
                <View style={styles.itemContainer}>
                  <Text
                    style={[styles.itemText, isActive && styles.activeText]}
                  >
                    {item} kg
                  </Text>
                </View>
              );
            }}
          />
          <View style={styles.indicator} pointerEvents="none" />
        </View>

        {/* Button */}
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
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: 40,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    color: Colors.primary,
    marginBottom: hp('2%'),
  },
  pickerWrapper: {
    alignItems: 'center',
    height: PICKER_HEIGHT + hp('8%'),
    overflow: 'hidden',
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  activeText: {
    fontSize: wp('6%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  indicator: {
    position: 'absolute',
    top: (PICKER_HEIGHT + hp('1.5%') - ITEM_HEIGHT) / 2,
    height: ITEM_HEIGHT,
    width: '55%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },
  buttonWrapper: {
    marginBottom: hp('7%'),
  },
});
