import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  icon?: any; // Top logo image
  title: string;
  value: string;
  subtitle: string;
  backgroundColor?: string;
  image?: any; // Bottom decorative image
}

const StatCard = ({
  icon,
  title,
  value,
  subtitle,
  backgroundColor,
  image,
}: Props) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      {/* Content above image */}
      <View style={styles.content}>
        <View style={styles.header}>
          {icon && (
            <Image source={icon} style={styles.icon} resizeMode="contain" />
          )}
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.value}>{value}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Bottom decorative image full width */}
      <View style={styles.bottomImageSize}>
        {image && (
        <Image
          source={image}
          style={styles.bottomImage}
          resizeMode="cover"
        />
      )}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: wp('6%'),
    width:162,
    marginRight: wp('5%'),
    overflow: 'hidden',
    justifyContent: 'space-between',
    height:227,
    
  },
  content: {
    flex: 1,
    paddingVertical:hp('3%'),
    paddingHorizontal:hp('1%'),
    alignItems: 'center',
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: wp('2%'),
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontFamily: Fonts.bold,
  },
  value: {
    fontSize: wp('6%'),
    color: Colors.primary,
    fontFamily: Fonts.bold,
    marginVertical: hp('0.5%'),
  },
  subtitle: {
    fontSize: wp('3.2%'),
    color:Colors.secondary,
    fontFamily: Fonts.semi_bold,
  },
  bottomImage: {
    width: '100%',
    height: 94,
    alignSelf:'auto',
    marginTop: hp('1.5%'),
    borderBottomLeftRadius: wp('4%'),
    borderBottomRightRadius: wp('4%'),
  },
  bottomImageSize:{
    paddingHorizontal:hp('0.025%'),

  }
});

export default StatCard;
