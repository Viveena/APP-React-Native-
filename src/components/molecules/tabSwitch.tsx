import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabSwitch = ({ tabs, activeTab, onTabChange }: Props) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = tab === activeTab;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onTabChange(tab)}
            style={[
              styles.tab,
              { width: `${100 / tabs.length}%` },
              isActive && styles.activeTab,
            ]}
          >
            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: wp('8%'),
    padding: wp('1.2%'),
    marginVertical: hp('1%'),
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('7%'),
  },
  tab: {
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('2%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize:hp('2.2%'),
    color: '#333',
    fontFamily: Fonts.semi_bold,
  },
  activeText: {
    color: Colors.text,
    fontFamily: Fonts.bold,
  },
});

export default TabSwitch;
