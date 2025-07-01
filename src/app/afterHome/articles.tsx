import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '@/src/components/atmos/backButton';
import ArticleCard from '@/src/components/molecules/articleCard';
import { articleData } from '@/src/constants/articleData';
import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';

const screenWidth = Dimensions.get('window').width;

const ArticlesScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={BackgroundImage.bg_image_white}
      style={styles.background}
      resizeMode="stretch"
    >
      {/* Sticky Header */}
      <View style={styles.headerContainer}>
        <BackButton/>
        <Text style={styles.headerText}>Tips & Articles</Text>
      </View>

      {/* Scrollable List */}
      <FlatList
        data={articleData}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => router.push(`/afterHome/Screens/tipsArticlesDetails/${index}`)}
            style={{ marginBottom: hp('1%') }}
          >
            <ArticleCard {...item} cardWidth={wp('88%')} 
                             cardHeight={hp('40%')} />
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: hp('6%'),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    marginBottom: hp('1.5%'),
  },
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.secondary,
    marginTop:hp('0.5%')
  },
  listContent: {
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('15%'),
  },
});

export default ArticlesScreen;
