import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenWidth = wp('90%');

type DataPoint = { label: string; systolic: number; diastolic: number };

const chartConfig = {
  backgroundGradientFrom: '#FAFAFA',
  backgroundGradientTo: '#FAFAFA',
  color: (opacity = 1) => `rgba(13,87,86,${opacity})`,
  labelColor: () => Colors.secondary,
  strokeWidth: 2,
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: Colors.primary,
  },
  decimalPlaces: 0,
};

const generateData = (startDate: Date, period: string) => {
  let data: DataPoint[] = [];
  let labels: string[] = [];
  let range = '';

  const clone = new Date(startDate);

  if (period === 'Weekly') {
    const options = { day: '2-digit', month: 'short' } as const;
    const endDate = new Date(clone);
    endDate.setDate(clone.getDate() + 6);
    for (let i = 0; i < 7; i++) {
      const date = new Date(clone);
      date.setDate(clone.getDate() + i);
      const label = date.toLocaleDateString('en-GB', options);
      labels.push(label);
      data.push({
        label,
        systolic: 100 + Math.floor(Math.random() * 6),
        diastolic: 70 + Math.floor(Math.random() * 6),
      });
    }
    range = `${labels[0]} - ${labels[6]}, ${endDate.getFullYear()}`;
  } else if (period === 'Monthly') {
    const options = { month: 'short' } as const;
    const month = clone.getMonth();
    const year = clone.getFullYear();
    for (let i = 1; i <= 4; i++) {
      labels.push(`W${i}`);
      data.push({
        label: `W${i}`,
        systolic: 100 + Math.floor(Math.random() * 6),
        diastolic: 70 + Math.floor(Math.random() * 6),
      });
    }
    range = `${clone.toLocaleDateString('en-GB', options)} ${year}`;
  } else if (period === 'Quarterly') {
    const quarter = Math.floor(clone.getMonth() / 3) + 1;
    const year = clone.getFullYear();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const startMonthIndex = (quarter - 1) * 3;
    const selectedMonths = months.slice(startMonthIndex, startMonthIndex + 3);
    labels = selectedMonths;

    selectedMonths.forEach(month => {
      data.push({
        label: month,
        systolic: 100 + Math.floor(Math.random() * 6),
        diastolic: 70 + Math.floor(Math.random() * 6),
      });
    });

    range = `${selectedMonths.join(', ')} ${year}`;
  }

  return { labels, data, range };
};

const LineCustomChart = ({ period }: { period: string }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [rangeText, setRangeText] = useState('');
  const [labels, setLabels] = useState<string[]>([]);
  const [systolicData, setSystolicData] = useState<number[]>([]);
  const [diastolicData, setDiastolicData] = useState<number[]>([]);

  useEffect(() => {
    const { labels, data, range } = generateData(startDate, period);
    setRangeText(range);
    setLabels(labels);
    setSystolicData(data.map(d => d.systolic));
    setDiastolicData(data.map(d => d.diastolic));
  }, [startDate, period]);

  const handleArrowClick = (direction: 'prev' | 'next') => {
    const newDate = new Date(startDate);

    if (period === 'Weekly') {
      newDate.setDate(startDate.getDate() + (direction === 'next' ? 7 : -7));
    } else if (period === 'Monthly') {
      newDate.setMonth(startDate.getMonth() + (direction === 'next' ? 1 : -1));
    } else if (period === 'Quarterly') {
      newDate.setMonth(startDate.getMonth() + (direction === 'next' ? 3 : -3));
    }

    setStartDate(newDate);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => handleArrowClick('prev')}>
          <Ionicons name="chevron-back" size={wp('5%')} color={Colors.secondary} />
        </TouchableOpacity>
        <Text style={styles.weekText}>{rangeText}</Text>
        <TouchableOpacity onPress={() => handleArrowClick('next')}>
          <Ionicons name="chevron-forward" size={wp('5%')} color={Colors.secondary} />
        </TouchableOpacity>
      </View>

      <LineChart
        data={{
          labels,
          datasets: [
            {
              data: systolicData,
              color: () => '#0D5756',
              strokeWidth: 2,
            },
            {
              data: diastolicData,
              color: () => '#A1E3D8',
              strokeWidth: 2,
            },
          ],
          legend: ['Systolic', 'Diastolic'],
        }}
        width={screenWidth}
        height={hp('30%')}
        chartConfig={chartConfig}
        bezier
        withShadow={false}
        withInnerLines
        withOuterLines={false}
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
    padding: wp('2.5%'),
    borderRadius: wp('4%'),
    borderColor: Colors.secondary,
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    height: hp('40%'),
    width: wp('92%'),
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

export default LineCustomChart;
