import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

interface ReadingPickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (value: number) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  label?: string;
}

const ITEM_HEIGHT = hp('6%');

const ReadingPicker: React.FC<ReadingPickerProps> = ({
  visible,
  onClose,
  onSelect,
  defaultValue = 120,
  min = 50,
  max = 200,
  label = 'Reading',
}) => {
  const readings = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const scrollRef = useRef<FlatList>(null);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    const index = readings.indexOf(defaultValue);
    if (index !== -1) {
      scrollRef.current?.scrollToOffset({ offset: index * ITEM_HEIGHT, animated: false });
    }
  }, [visible]);

  const handleScrollEnd = (e: any) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    const value = readings[index];
    setSelectedValue(value);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          {/* Close Icon */}
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <Ionicons name="close" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <Text style={styles.title}>Select {label}</Text>

          {/* Reading Scroll Picker */}
          <View style={styles.scrollBox}>
            <FlatList
              ref={scrollRef}
              data={readings}
              keyExtractor={(item) => item.toString()}
              showsVerticalScrollIndicator={false}
              snapToInterval={ITEM_HEIGHT}
              decelerationRate="fast"
              onMomentumScrollEnd={handleScrollEnd}
              getItemLayout={(_, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              contentContainerStyle={{ paddingVertical: ITEM_HEIGHT * 2 }}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={item === selectedValue ? styles.activeText : styles.text}>
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>

          <TouchableOpacity onPress={() => { onSelect(selectedValue); onClose(); }}>
            <Text style={styles.confirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    paddingTop: 35,
    width: '80%',
    alignItems: 'center',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: 12,
  },
  scrollBox: {
    height: ITEM_HEIGHT * 5,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: wp('4.5%'),
    color: Colors.primary,
  },
  activeText: {
    fontFamily: Fonts.bold,
    fontSize: wp('6%'),
    color: Colors.primary,
  },
  confirm: {
    marginTop: 16,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    fontSize: 16,
  },
});

export default ReadingPicker;
