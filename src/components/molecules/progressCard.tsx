import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  habitsDone: number;
  totalHabits: number;
  tasksDone: number;
  totalTasks: number;
  percentage: number;
}

const ProgressCard = ({ habitsDone, totalHabits, tasksDone, totalTasks, percentage }: Props) => {
  return (
    <LinearGradient
      colors={['#0D5756', '#1CBCB9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Left Side */}
      <View style={styles.left}>
        <Text style={styles.labelText}>You are ⚡</Text>
        <Text style={styles.heading}>Almost Done!</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Image
              source={require('@/src/assets/images/apple_habits.png')}
              style={styles.icon}
            />
            <Text style={styles.statText}>Habits {habitsDone}/{totalHabits}</Text>
          </View>

          <View style={styles.statBox}>
            <Image
              source={require('@/src/assets/images/health.png')}
              style={styles.icon}
            />
            <Text style={styles.statText}>Health {tasksDone}/{totalTasks}</Text>
          </View>
        </View>
      </View>

      {/* Right Side: Circular Progress */}
      <AnimatedCircularProgress
        size={wp('22%')}
        width={8}
        fill={percentage}
        tintColor="#fff"
        backgroundColor="rgba(255,255,255,0.2)"
        lineCap="round"
         duration={2000}
        style={styles.progress}
      >
        {fill => (
          <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
        )}
      </AnimatedCircularProgress>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: wp('5%'),
    padding: wp('5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
  },
  left: {
    flex: 1,
  },
  labelText: {
    fontSize: 18,
    color: Colors.text,
    marginBottom: hp('0.5%'),
    fontFamily: Fonts.regular,
  },
  heading: {
    fontSize: 26,
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: hp('1.5%'),
  },
  statsRow: {
    flexDirection: 'row',
    gap: wp('1%'),
    //marginRight:hp('1%'),
    marginLeft:-hp('1%')
  },
  statBox: {
    backgroundColor: '#00000052',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1%'),

  },
  statText: {
    fontSize: wp('3.5%'),
    color: '#fff',
    fontFamily: Fonts.regular,
  },
  icon: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
  },
  progress: {
    marginLeft: wp('3%'),
  },
  progressText: {
    color: Colors.text,
    fontSize: wp('4%'),
    fontWeight: 'bold',
    fontFamily: Fonts.bold,
  },
});

export default ProgressCard;
