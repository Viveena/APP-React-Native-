import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
  label: string;
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
  customStyle?: ViewStyle; // ✅ Accept style override
};

const Dropdown = ({ label, options, selected, onSelect, customStyle }: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setShowOptions(false);
  };

  return (
    <View style={[styles.wrapper, customStyle]}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={[styles.selectedText, !selected && { color: '#999' }]}>
          {selected || label}
        </Text>
        <Ionicons
          name={showOptions ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#888"
        />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelect(option)}
              style={styles.option}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    position: 'relative',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#0546468C',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    width: '100%', // Use full width of customStyle
  },
  selectedText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#333',
  },
  optionsContainer: {
     position: 'absolute',
     top: 55,              // Push it below the dropdown button
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    zIndex: 999,
  },
  option: {
    padding: 12,
  },
  optionText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
});

export default Dropdown;
