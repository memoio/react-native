import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DefaultLayout from '../components/layout/defaultLayout';
import SuccessModal from './Referral/SuccessModal';

const Referral = ({navigation}) => {
  const [referralLink] = useState('https://t.me/aZennetwork1_bot?start=IZZZA9');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const closeModal = () => {
    setSuccessModalVisible(false);
  };
  const handleHistory = () => {
    console.log('View history');
    // Navigate to history screen
    navigation.navigate("InvitationDetail");
  };

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    // Show feedback that link was copied
    if (Platform.OS === 'android') {
      ToastAndroid.show('Referral link copied to clipboard', ToastAndroid.SHORT);
    } else {
      Alert.alert('Copied', 'Referral link copied to clipboard');
    }
  };

  const handleOk = () => {
    console.log('OK pressed');
    // Handle OK button press
    setSuccessModalVisible(true);
  };
  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View style={styles.pointsicon}>
                <Icon name="people" size={20} color="#fff" style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Referral</Text>
            </View>
            <TouchableOpacity onPress={handleHistory}>
              <Text style={styles.historyText}>History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.totalCount}>1000</Text>
            <Text style={styles.totalLabel}>Total Invited</Text>
          </View>
        </View>
      </View>
      {/* Referral Link */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Referral Link</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>{referralLink}</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.okButton} onPress={handleOk}>
            <Text style={styles.okButtonText}>Ok</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <MaterialIcons name="content-copy" size={20} color="#00C853" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Benefits */}
      <View style={styles.section}>
        <View style={styles.benefitsHeader}>
          <Text style={styles.benefitsTitle}>Invite friends to get benefits</Text>
          <Icon name="information-circle-outline" size={18} color="#FFA500" />
        </View>
        {/* Benefit Items */}
        <View style={styles.benefitItem}>
          <View style={styles.benefitIconContainer}>
            <MaterialCommunityIcons name="account-group" size={20} color="#fff" />
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitText}>
              Friends successfully bound your invitation code.
            </Text>
          </View>
          <Text style={styles.benefitPoints}>+20</Text>
        </View>
        <View style={styles.benefitItem}>
          <View style={styles.benefitIconContainer}>
            <MaterialIcons name="verified-user" size={20} color="#fff" />
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitText}>
              Friends successfully created their data DID.
            </Text>
          </View>
          <Text style={styles.benefitPoints}>+200</Text>
        </View>
      </View>
      <SuccessModal
        visible={successModalVisible}
        onClose={closeModal}
      />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00B66C',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pointsicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 12,
  },
  historyText: {
    color: '#fff',
    fontSize: 14,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  totalCount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalLabel: {
    color: '#fff',
    fontSize: 12,
  },
  section: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#0A1913',
    borderRadius: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  linkContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 12,
  },
  linkText: {
    color: '#999',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  okButton: {
    flex: 1,
    backgroundColor: '#00B66C',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyButton: {
    backgroundColor: 'rgba(0, 200, 83, 0.1)',
    borderWidth: 1,
    borderColor: '#00C853',
    borderRadius: 8,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  benefitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    padding: 12,
  },
  benefitIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 0.5,
    borderColor: '#05F29230',
  },
  benefitContent: {
    flex: 1,
  },
  benefitText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  benefitPoints: {
    color: '#00C853',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default Referral;
