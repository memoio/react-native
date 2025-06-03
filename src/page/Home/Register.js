import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import DefaultLayout from '../../components/layout/defaultLayout';
import RegisterSuccess from '../../components/Home/RegisterSuccess';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invitationCode, setInvitationCode] = useState('VLJNBILHXUW');
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
    // You might want to navigate to the next screen here
    // navigation.navigate('NextScreen');
  };
  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    navigation.goBack();
  };

  const handleRegister = () => {
    console.log('Register pressed');
    setModalVisible(true);
  };

  const handleLogin = () => {
    console.log('Login pressed');
    // Navigate to login screen
  };

  return (
    <DefaultLayout navigation={navigation}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Register</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Reward Banner */}
        <View style={styles.rewardBanner}>
          <Image source={require('../../../assets/m.png')} style={{width: 33, height: 27}} />
          <Text style={styles.rewardText}>
            Unlock $20 USD in exclusive rewards and get invited to participate in special events!
          </Text>
        </View>

        {/* Friend Invite Banner */}
        <View style={styles.inviteBanner}>
          <Text style={styles.inviteText}>Your friend invites you to join Bybit!</Text>
        </View>

        {/* Registration Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Register Now</Text>

          {/* Email Field */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Field */}
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Your password must be at least 8 characters"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Country/Region Field */}
          <Text style={styles.inputLabel}>Country/Region of Residence</Text>
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={styles.dropdownPlaceholder}>Please select</Text>
            <Icon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>

          {/* Invitation Code Field */}
          <Text style={styles.inputLabel}>Invitation Code (Optional)</Text>
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={styles.invitationCode}>{invitationCode}</Text>
            <Icon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>

          {/* Terms and Conditions */}
          <View style={styles.termsContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              tintColors={{ true: '#00C853', false: '#666' }}
              style={styles.checkbox}
            />
            <Text style={styles.termsText}>
              I accept the{' '}
              <Text style={styles.linkText}>User Agreement</Text> and{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Icon name="gift-outline" size={15} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.registerButtonText}>
              Register to receive $10,000+ gift package and high rebates
            </Text>
          </TouchableOpacity>

          {/* Social Login */}
          <View style={styles.socialContainer}>
            <Text style={styles.orText}>Or</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../../assets/google.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../../assets/telegram.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../../assets/apple.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <RegisterSuccess
            visible={modalVisible}
            onClose={closeModal}
            navigation={navigation}
        />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
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
  rewardBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 12,
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  inviteBanner: {
    backgroundColor: '#00B66C',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  inviteText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {

    paddingBottom: 24,
  },
  formTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#6666660D',
    borderRadius: 8,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1C1C1C',
    paddingHorizontal: 16,
  },
  dropdownInput: {
    backgroundColor: '#6666660D',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1C1C1C',
  },
  dropdownPlaceholder: {
    color: '#666',
    fontSize: 16,
  },
  invitationCode: {
    color: '#fff',
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  checkbox: {
    marginRight: 8,
  },
  termsText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  linkText: {
    color: '#FFA500',
    textDecorationLine: 'underline',
  },
  registerButton: {
    backgroundColor: '#05F29230',
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  orText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginTop: 24,
    marginBottom: 15,
  },
  loginText: {
    color: '#999',
    fontSize: 16,
  },
  loginLink: {
    color: '#F09A24',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;