import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultLayout from '../../components/layout/defaultLayout';

const AddressApp = ({navigation}) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [uid, setUid] = useState('');
  const [focusedInput, setFocusedInput] = useState('wallet'); // 'wallet' or 'uid'

  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    // navigation.goBack();
  };

  const handleRegisterNow = () => {
    console.log('Register Now pressed');
    navigation.navigate('Register');
    // Handle registration logic
  };

  const handleConfirm = () => {
    console.log('Confirm pressed');
    console.log('Wallet Address:', walletAddress);
    console.log('UID:', uid);
    // Handle confirmation logic
  };

  const handleHowToRegister = () => {
    console.log('How to register pressed');
    navigation.navigate('RegisterGuide');
    // Navigate to registration guide or show modal
  };

  return (
    <DefaultLayout navigation={navigation}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Address</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Exchange Info */}
          <View style={styles.exchangeInfo}>
            <View style={styles.exchangeLogoContainer}>
                <Image source={require('../../../assets/bybit.png')} style={styles.exchangeLogo}/>
                <Text style={styles.exchangeName}>Bybit</Text>
            </View>
            <TouchableOpacity onPress={handleHowToRegister}>
                <Text style={styles.howToRegisterText}>How to register</Text>
            </TouchableOpacity>
          </View>

          {/* Register Now Button */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterNow}>
            <Text style={styles.registerButtonText}>Register Now</Text>
          </TouchableOpacity>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Wallet Address</Text>
            <TextInput
              style={[
                styles.input,
                focusedInput === 'wallet' && styles.focusedInput,
              ]}
              placeholder="Input wallet Address"
              placeholderTextColor="#666"
              value={walletAddress}
              onChangeText={setWalletAddress}
              onFocus={() => setFocusedInput('wallet')}
              onBlur={() => setFocusedInput('')}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>UID</Text>
            <TextInput
              style={[
                styles.input,
                focusedInput === 'uid' && styles.focusedInput,
              ]}
              placeholder="Input UID"
              placeholderTextColor="#666"
              value={uid}
              onChangeText={setUid}
              onFocus={() => setFocusedInput('uid')}
              onBlur={() => setFocusedInput('')}
            />
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 24, // Same width as the back button for balance
  },
  exchangeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    backgroundColor: '#0A1913',
    borderRadius: 8,
  },
  exchangeLogoContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  exchangeLogo: {
    width: 43,
    height: 43,
  },
  exchangeName: {
    color: '#fff',
    fontSize: 16,
  },
  howToRegisterText: {
    color: '#CFCFCF',
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: '#0A1913',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: '#0088FF',
    borderWidth: 1,
  },
  confirmButton: {
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressApp;