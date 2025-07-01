import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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

const SelectableCardList = ({
  data,
  selectedItem,
  onSelect,
  onDelete,
}: Props) => {
  const renderRightActions = (itemTitle: string) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => onDelete?.(itemTitle)}
    >
      <Ionicons name="trash-outline" size={wp('6%')} color="red" />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Swipeable renderRightActions={() => renderRightActions(item.title)}>
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
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: hp('10%'),
  },
  card: {
    backgroundColor: '#07AE9C29',
    borderRadius: wp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
    height: hp('11%'),
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  cardTitle: {
    fontSize: wp('4.5%'),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  cardDesc: {
    fontSize: wp('3.2%'),
    color: Colors.secondary,
    fontFamily: Fonts.regular,
    marginTop: hp('0.5%'),
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('17%'),
    height: hp('11%'),
    backgroundColor: '#FFF',
    borderRadius: wp('4%'),
    marginLeft: wp('2%'),
  },
});

export default SelectableCardList;
