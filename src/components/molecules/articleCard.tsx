

import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


interface Props {
  image: any;
  title: string;
  description: string;
  category: string;
  cardWidth?: number;
  cardHeight?: number;
}

const ArticleCard = ({ image, title, description, category, cardWidth,cardHeight }: Props) => {

  return (
    <View style={[styles.card, { width: cardWidth ?? 265 , height: cardHeight ?? 370}]}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
    width: 265,
    height: 370,
  },
  image: {
    width: '100%',
    height: hp('20%'),
  },
  textContainer: {
    padding: wp('4%'),
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.secondary,
    marginBottom: hp('0.7%'),
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.secondary,
    marginBottom: hp('1.5%'),
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor:'#07AE9C',
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('3%'),
    borderRadius: 999,
    height:23,
    width:59,
  },
  categoryText: {
    fontSize: 10,
    fontFamily: Fonts.semi_bold,
    color: Colors.text,
  },
});

export default ArticleCard;
