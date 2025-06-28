// SelectableCardList.tsx
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type CardItem = {
  title: string;
  description?: string;
};

type Props = {
  data: CardItem[];
  selectedItem: string | null;
  onSelect: (title: string) => void;
  onDelete?: (title: string) => void;
};

const SelectableCardList = ({ data, selectedItem, onSelect, onDelete }: Props) => {
  const renderRightActions = (itemTitle: string) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => onDelete?.(itemTitle)}
    >
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Swipeable
          renderRightActions={() => renderRightActions(item.title)}
        >
          <TouchableOpacity
            style={[
              styles.card,
              selectedItem === item.title && styles.selectedCard,
            ]}
            onPress={() => onSelect(item.title)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            {item.description && (
              <Text style={styles.cardDesc}>{item.description}</Text>
            )}
          </TouchableOpacity>
        </Swipeable>
      )}
      contentContainerStyle={{ paddingBottom: hp('12%') }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#07AE9C29',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
    height: 91,
    width: 335,
    justifyContent: 'center',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  cardDesc: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Fonts.regular,
    marginTop: hp('0.5%'),
  },
  deleteButton: {
    borderColor:Colors.primary,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    marginBottom: hp('2%'),
    borderRadius: wp('5%'),
  },
  deleteText: {
    color:Colors.primary,
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
});

export default SelectableCardList;
