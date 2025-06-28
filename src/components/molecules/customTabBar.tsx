import { Colors } from '@/src/constants/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

const TAB_HEIGHT = 106;
const FAB_SIZE = wp('16%');

const CustomTabBar = () => {
  const router = useRouter();
  const path = usePathname();

  const tabs = [
    { icon: 'home', label: 'Home', route: '/afterHome/home' },
    { icon: 'bar-chart', label: 'Report', route: '/afterHome/report' },
    { icon: 'article', label: 'Articles', route: '/afterHome/articles', type: 'material' },
    { icon: 'profile', label: 'Profile', route: '/afterHome/profile_tab', isProfile: true },
  ];

  const isFocused = (route: string) => route === path;

  const curvePath = `
    M0,0 
    H${(wp('100%') - FAB_SIZE) / 2 - wp('8%')} 
    C${wp('42%')},0 ${wp('42%')},${FAB_SIZE / 1.6} ${wp('50%')},${FAB_SIZE / 1.6}
    C${wp('59%')},${FAB_SIZE / 1.6} ${wp('59%')},0 ${(wp('100%') + FAB_SIZE) / 2 + wp('8%')},0
    H${wp('100%')}
    V${TAB_HEIGHT}
    H0 Z
  `;

  return (
    <View style={styles.container}>
      <Svg width="100%" height={TAB_HEIGHT} style={styles.svg}>
        <Path d={curvePath} fill={Colors.secondary} />
      </Svg>

      {/* FAB */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => router.push('/afterHome/add')}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {/* Left Icons */}
        <View style={styles.leftContainer}>
          {tabs.slice(0, 2).map((tab, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tabButton}
              onPress={() => router.push(tab.route)}
            >
              <FontAwesome
                name={tab.icon}
                size={wp('7%')}
                color={isFocused(tab.route) ? Colors.text : '#888'}
              />
              <Text style={[styles.tabLabel, !isFocused(tab.route) && styles.hidden]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Right Icons */}
        <View style={styles.rightContainer}>
          {tabs.slice(2).map((tab, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tabButton}
              onPress={() => router.push(tab.route)}
            >
              {tab.isProfile ? (
                <View style={[styles.profileWrapper, isFocused(tab.route) && styles.profileFocused]}>
                  <Image
                    source={require('@/src/assets/images/profile.png')}
                    style={styles.profileIcon}
                  />
                </View>
              ) : (
                <MaterialIcons
                  name={tab.icon}
                  size={wp('7%')}
                  color={isFocused(tab.route) ? Colors.text : '#888'}
                />
              )}
              <Text style={[styles.tabLabel, !isFocused(tab.route) && styles.hidden]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 106.5,
    width: '100%',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },
  fabContainer: {
    position: 'absolute',
    bottom: TAB_HEIGHT * 0.68,
    zIndex: 100,
    left: '50.3%',
    transform: [{ translateX: -FAB_SIZE / 2 }],
  },
  fab: {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: Colors.secondary,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 10 },
  },
  fabText: {
    color: '#fff',
    fontSize: wp('9%'),
    fontWeight: 'bold',
  },
  tabRow: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('1%'),
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: wp('12%'),
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: wp('12%'),
    flex: 1,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('0.5%'),
  },
  tabLabel: {
    fontSize: wp('3%'),
    color: Colors.text,
    marginTop: hp('0.2%'),
    height: hp('2.2%'),
  },
  hidden: {
    opacity: 0,
  },
  profileIcon: {
    width: wp('7.2%'),
    height: wp('7.2%'),
    borderRadius: wp('3.6%'),
  },
  profileWrapper: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileFocused: {
    borderColor: Colors.text,
    borderWidth: 2,
  },
});

export default CustomTabBar;
