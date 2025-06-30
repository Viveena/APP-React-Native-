import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Colors } from '@/src/constants/colors';
import { Fonts } from '@/src/constants/fonts';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Settings = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const router = useRouter();

  return (
    <ImageBackground
              source={BackgroundImage.profileOptions_bg}
              style={styles.background}
              resizeMode="stretch"
            >
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
           <TouchableOpacity style={styles.backButton} onPress={() => router.push('/afterHome/profile_tab')}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.heading}>Settings</Text>
        </View>
      {/* FAQ Section */}
      {/* FAQ Section */}
          <TouchableOpacity style={styles.item} onPress={() => router.push('/afterHome/Screens/faq')}>
            <View style={styles.itemContent}>
              <Ionicons name="help-circle-outline" size={20} color={Colors.primary} style={styles.itemIcon} />
              <Text style={styles.label}>FAQ</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="#B1B1B1" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Terms & Conditions */}
          <TouchableOpacity style={styles.item} onPress={() => router.push('/afterHome/Screens/terms')}>
            <View style={styles.itemContent}>
              <Ionicons name="document-text-outline" size={20} color={Colors.primary} style={styles.itemIcon} />
              <Text style={styles.label}>Terms & Conditions</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="#B1B1B1" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Privacy Policy */}
          <TouchableOpacity style={styles.item} onPress={() => router.push('/afterHome/Screens/privacy')}>
            <View style={styles.itemContent}>
              <Ionicons name="shield-checkmark-outline" size={20} color={Colors.primary} style={styles.itemIcon} />
              <Text style={styles.label}>Privacy Policy</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="#B1B1B1" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Edit Profile */}
          <TouchableOpacity style={styles.item} onPress={() => router.push('/afterHome/Screens/editProfile')}>
            <View style={styles.itemContent}>
              <Ionicons name="create-outline" size={20} color={Colors.primary} style={styles.itemIcon} />
              <Text style={styles.label}>Edit Profile</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="#B1B1B1" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Reset Password */}
          <TouchableOpacity style={styles.item} onPress={() => router.push('/beforeHome/afterSignupScreens/otpVerify_setting')}>
            <View style={styles.itemContent}>
              <Ionicons name="key-outline" size={20} color={Colors.primary} style={styles.itemIcon} />
              <Text style={[styles.label, { color: Colors.secondary }]}>Reset Password</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="#B1B1B1" />
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Delete Account */}
          <TouchableOpacity style={styles.item} onPress={() => setDeleteModalVisible(true)}>
            <View style={styles.itemContent}>
              <Ionicons name="trash-outline" size={20} color={Colors.primary} style={styles.itemIcon} />
              <Text style={[styles.label, { color: Colors.secondary }]}>Delete Account</Text>
            </View>
          </TouchableOpacity>

      {/* Delete Account Modal */}
      <Modal visible={deleteModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to delete your account?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.yesButton}>
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noButton} onPress={() => setDeleteModalVisible(false)}>
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
   backButton: {
    marginTop: hp('1%'),
    marginLeft: wp('3%'),
    position: 'absolute',
    zIndex: 10,
  },
  container: {
    marginTop:hp('5%'),
    padding: wp('5%'),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  heading: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.secondary,
    marginLeft: wp('15%'),
    marginTop:hp('1%')
  },
  itemContent: {
  flexDirection: 'row',
  alignItems: 'center',
},
itemIcon: {
  marginRight: wp('3%'),
},

  item: {
    paddingVertical: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: Fonts.bold,
    fontSize: wp('4.2%'),
    color: Colors.secondary,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  faqContent: {
    paddingVertical: hp('1%'),
    paddingLeft: wp('2%'),
  },
  question: {
    fontFamily: Fonts.bold,
    fontSize: wp('3.8%'),
    marginBottom: 4,
  },
  answer: {
    fontFamily: Fonts.regular,
    fontSize: wp('3.6%'),
    marginBottom: 10,
    color: '#444',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: Fonts.bold,
    fontSize: wp('4.2%'),
    marginBottom: 20,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 20,
  },
  yesButton: {
    backgroundColor: '#c00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  yesText: {
    color: '#fff',
    fontFamily: Fonts.bold,
  },
  noButton: {
    borderWidth: 1,
    borderColor: '#888',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  noText: {
    color: '#555',
    fontFamily: Fonts.bold,
  },
});

export default Settings;
