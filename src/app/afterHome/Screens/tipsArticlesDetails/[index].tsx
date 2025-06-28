import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import { articleData } from '@/src/constants/articleData';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const ArticleDetail = () => {
  const { index } = useLocalSearchParams(); // gets the index from route
  const article = articleData[parseInt(index as string)];

  if (!article) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>🚫 Article not found.</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="stretch"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <BackButton />
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={40}
        >
          {/* Article Image */}
          <Image source={article.image} style={styles.image} />

          {/* Title */}
          <Text style={styles.title}>{article.title}</Text>

          {/* Description */}
          <Text style={styles.description}>{article.description}</Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    padding: wp('5%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('10%'),
    paddingHorizontal:hp('2%')
  },
  image: {
    width: '100%',
    height: hp('35%'),
    borderRadius: 14,
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginBottom: hp('1.5%'),
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: '#333',
    lineHeight: 22,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp('2%'),
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
});

export default ArticleDetail;
