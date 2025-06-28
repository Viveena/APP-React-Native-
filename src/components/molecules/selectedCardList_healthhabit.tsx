import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type CardItem = {
  title: string;
  description?: string;
  icon: any;
  isFavorite?: boolean;
};

type Props = {
  data: CardItem[];
  selectedItem: string | null;
  onSelect: (title: string) => void;
  onDelete?: (title: string) => void;
  onToggleFavorite?: (title: string) => void;
};

const SelectableCardListWithIcons = ({
  data,
  selectedItem,
  onSelect,
  onDelete,
  onToggleFavorite,
}: Props) => {
  const renderRightActions = (title: string) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => onDelete?.(title)}
    >
      <Ionicons name="trash-outline" size={25} color='red' />

    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Swipeable renderRightActions={() => renderRightActions(item.title)}>
          <View
            style={[
              styles.card,
              selectedItem === item.title && styles.selectedCard,
            ]}
          >
            <View style={styles.row}>
              {/* Icon */}
              <Image source={item.icon} style={styles.icon} />

              {/* Title and Description */}
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{item.title}</Text>
                {item.description && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
              </View>

              {/* Heart Icon */}
              <TouchableOpacity onPress={() => onToggleFavorite?.(item.title)}>
                <Ionicons
                  name={item.isFavorite ? 'heart' : 'heart-outline'}
                  size={24}
                  color={item.isFavorite ? Colors.primary : Colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
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
    paddingHorizontal: wp('3.5%'),
    marginBottom: hp('1%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: wp('4%'),
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  description: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Fonts.regular,
    marginTop: hp('0.5%'),
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginBottom: hp('1%'),

  },
});

export default SelectableCardListWithIcons;
