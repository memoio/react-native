import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import SuccessModal from './components/Common/SuccessModal';

import LinearGradient from 'react-native-linear-gradient';
import FailedModal from './components/Common/failedModal';

const ReferralApp = ({ navigation }) => {
  const [referralCode, setReferralCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(200);

  const handleOkPress = () => {
    // Handle the OK button press
    // if (referralCode.trim()) {
    //     console.log('Referral code submitted:', referralCode);
        // Show success modal
    setModalVisible(true);
    //     // You could set different point values based on the code
    //     // setEarnedPoints(someCalculatedValue);
    //   } else {
    //     // Handle empty code
    //     console.log('Please enter a referral code');
    //     // You could show an error message here
    //   }
    // console.log('Referral code submitted:', referralCode);
    // Add your logic here
  };

  const handleSkipPress = () => {
    // Handle the Skip button press
    console.log('Skipped referral code');
    // Add your logic here
  };
  const closeModal = () => {
    setModalVisible(false);
    // You might want to navigate to the next screen here
    // navigation.navigate('NextScreen');
  };

  const openTelegram = () => {
    Linking.openURL('https://t.me/yourgroup');
  };

  const openTwitter = () => {
    Linking.openURL('https://twitter.com/yourhandle');
  };
  const userImage = require('../assets/users.png');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={userImage} style={styles.userIcon}/>
          <Text style={styles.title}>Get a Referral Code?</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={referralCode}
            placeholder="Enter"
            onChangeText={setReferralCode}
            placeholderTextColor="#4A4A4A"
            selectionColor="#00C853"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOkPress} style={styles.okButton}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSkipPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            No Invitation Code? Go to{' '}
            <Text style={styles.linkText} onPress={openTelegram}>
              Telegram
            </Text>{' '}
            and{' '}
            <Text style={styles.linkText} onPress={openTwitter}>
              X
            </Text>
          </Text>
        </View>
      </View>
      <SuccessModal
        visible={modalVisible}
        onClose={closeModal}
        points={earnedPoints}
        navigation={navigation}
      />
      {/* <FailedModal
        visible={modalVisible}
        onClose={closeModal}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00110A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 130,
    justifyContent: 'start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },
  userIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  giftIcon: {
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    color: '#9E9E9E',
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1C1C1C',
    color: '#666666',
    backgroundColor: '#6666660D',
    fontSize: 16,
    paddingVertical: 8,
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  okButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
    backgroundColor: '#0A1913',
  },
  okButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skipButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#FFFFFF',
    backgroundColor: '#0A1913',
  },
  skipButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#9E9E9E',
    textAlign: 'center',
    fontSize: 14,
  },
  linkText: {
    color: '#FFA500',
    textDecorationLine: 'underline',
  },
});

export default ReferralApp;