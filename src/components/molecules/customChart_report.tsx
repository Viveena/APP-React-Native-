import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenWidth = wp('89.5%');

type DataPoint = { label: string; systolic: number; diastolic: number };

const chartConfig = {
  backgroundGradientFrom: '#FAFAFA',
  backgroundGradientTo: '#FAFAFA',
  fillShadowGradient: Colors.primary,
  fillShadowGradientOpacity: 1,
  color: (opacity = 1) => `rgba(13,87,86,${opacity})`,
  labelColor: () => Colors.secondary,
  barPercentage: 0.4,
  decimalPlaces: 0,
};

const generateWeekDates = (startDate: Date): { labels: string[]; range: string; data: DataPoint[] } => {
  const labels: string[] = [];
  const data: DataPoint[] = [];

  const options = { day: '2-digit', month: 'short' } as const;
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const label = date.toLocaleDateString('en-GB', options);
    labels.push(label);

    data.push({
      label,
      systolic: 100 + Math.floor(Math.random() * 6),
      diastolic: 70 + Math.floor(Math.random() * 6),
    });
  }

  const range = `${labels[0]} - ${labels[6]}, ${endDate.getFullYear()}`;
  return { labels, range, data };
};

const CustomChart = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [weekRange, setWeekRange] = useState('');
  const [labels, setLabels] = useState<string[]>([]);
  const [systolicData, setSystolicData] = useState<number[]>([]);
  const [diastolicData, setDiastolicData] = useState<number[]>([]);

  useEffect(() => {
    const { data, range, labels } = generateWeekDates(startDate);
    setWeekRange(range);
    setLabels(data.map(() => '')); // Hide x-axis labels
    setSystolicData(data.map((d) => d.systolic));
    setDiastolicData(data.map((d) => d.diastolic));
  }, [startDate]);

  const handleArrowClick = (direction: 'prev' | 'next') => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + (direction === 'next' ? 7 : -7));
    setStartDate(newDate);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => handleArrowClick('prev')}>
          <Ionicons name="chevron-back" size={wp('5%')} color={Colors.secondary} />
        </TouchableOpacity>
        <Text style={styles.weekText}>{weekRange}</Text>
        <TouchableOpacity onPress={() => handleArrowClick('next')}>
          <Ionicons name="chevron-forward" size={wp('5%')} color={Colors.secondary} />
        </TouchableOpacity>
      </View>

      <BarChart
        data={{
          labels,
          datasets: [
            { data: systolicData, color: () => '#DAF3F0' },
            { data: diastolicData, color: () => '#A1E3D8' },
          ],
          legend: ['Systolic', 'Diastolic'],
        }}
        width={screenWidth}
        height={hp('28%')}
        chartConfig={chartConfig}
        withInnerLines={false}
        fromZero
        showBarTops={false}
        withVerticalLabels={false}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: hp('2%'),
    padding: wp('7%'),
    borderRadius: wp('3.5%'),
    borderColor: Colors.secondary,
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    height: hp('35%'),
    width: wp('90%'),
    alignSelf: 'center',
  },
  headerRow: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
    paddingHorizontal: wp('2.5%'),
  },
  weekText: {
    fontSize: hp('1.8%'),
    color: Colors.secondary,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  chart: {
    borderRadius: wp('4%'),
  },
});

export default CustomChart;
