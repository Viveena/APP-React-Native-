import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  image: any;
  title: string;
  description: string;
  category: string;
  cardWidth?: number;
  cardHeight?: number;
}

const ArticleCard = ({ image, title, description, category, cardWidth, cardHeight }: Props) => {
  return (
    <View
      style={[
        styles.card,
        {
          width: cardWidth ?? wp('65%'), // ~265px on standard screen
          height: cardHeight ?? hp('47%'), // ~370px on standard screen
        },
      ]}
    >
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: hp('1.5%'),
    backgroundColor: '#EEFFFD',
    borderRadius: wp('4%'),
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: hp('1%'),
  },
  image: {
    width: '100%',
    height: hp('20%'),
  },
  textContainer: {
    padding: wp('4%'),
  },
  title: {
    fontSize: wp('4.2%'),
    fontFamily: Fonts.bold,
    color: Colors.secondary,
    marginBottom: hp('0.7%'),
  },
  description: {
    fontSize: wp('3.5%'),
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    marginBottom: hp('1.5%'),
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#07AE9C',
    paddingVertical: hp('0.3%'),
    paddingHorizontal: wp('3%'),
    borderRadius: 999,
  },
  categoryText: {
    fontSize: wp('2.8%'),
    fontFamily: Fonts.semi_bold,
    color: Colors.text,
  },
});

export default ArticleCard;
