// src/components/atoms/BirthdayInput.tsx
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  value: Date | null;
  onChange: (date: Date) => void;
};

const BirthdayInput = ({ value, onChange }: Props) => {
  const [showPicker, setShowPicker] = React.useState(false);

  return (
    <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.container}>
      <Ionicons name="calendar-outline" size={20} color="#999" style={styles.icon} />
      <Text style={styles.text}>
        {value ? value.toDateString() : 'Select Birthday'}
      </Text>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) {
              onChange(selectedDate);
            }
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: wp('6%'),
    paddingHorizontal: wp('4%'),
    alignItems: 'center',
    height: hp('6.5%'),
    marginBottom: hp('2%'),
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: wp('3%'),
  },
  text: {
    fontSize: wp('4%'),
    color: '#000',
    fontFamily: Fonts.regular,
  },
});

export default BirthdayInput;
