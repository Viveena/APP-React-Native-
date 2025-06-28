import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  name: string;
}

const GreetingCard = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      {/* Left side: Greeting Text */}
      <View style={styles.leftContent}>
        <Text style={styles.subText}>Good Morning</Text>
        <Text style={styles.name}>{name}!</Text>
      </View>

      {/* Right side: Notification and Language buttons */}
      <View style={styles.rightButtons}>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => console.log('Notification pressed')}>
          <Ionicons name="notifications-outline" size={wp('5.8%')} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper} onPress={() => console.log('Language change pressed')}>
          <MaterialIcons name="language" size={wp('5.8%')} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp('6%'),
    paddingHorizontal: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  subText: {
    fontSize: wp('4%'),
    color: Colors.secondary,
    fontFamily: Fonts.semi_bold,
  },
  name: {
    fontSize: wp('9%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  rightButtons: {
    marginTop:wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('3.5%'),
  },
  iconWrapper: {
    backgroundColor: '#07AE9C',
    padding: wp('2.3%'),
    borderRadius: wp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GreetingCard;
