import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import DefaultLayout from '../components/layout/defaultLayout';
import WaitingModal from './DID/WaitingModal';
import SuccessModal from './DID/SuccessModal';

const DID = ({navigation}) => {
  const [waitingModalVisible, setWaitingModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [isDIDCreated, setDIDCreated] = useState(false);
  const handleCreate = () => {
    console.log('Create DID pressed');
    // Handle DID creation logic
    setWaitingModalVisible(true);
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 2000);
  };
  const closeModal = () => {
    setWaitingModalVisible(false);
    setSuccessModalVisible(false);
    setDIDCreated(true);
    // You might want to navigate to the next screen here
    // navigation.navigate('NextScreen');
  };
  return (
    <DefaultLayout navigation={navigation}>
        {/* DID Card */}
        <View style={styles.didCard}>
          {/* Profile Image */}
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.profileImage}
            />
          </View>
          {/* DID Title */}
          <Text style={styles.didTitle}>Data DID</Text>
          {/* DID Description */}
          <Text style={styles.didDescription}>
            Your all-in-one, privacy-preserving self-sovereign identity. Own, manage, and monetize your data!
          </Text>
        </View>
        {/* DID Details */}
        {
          isDIDCreated ?
          <View style={styles.didContainer}>
            <Text style={styles.didheader}>No. 116266</Text>
            <Text style={styles.didbody}>did:memo:74a10356eecd185b510a0173e9c4638c6bbd15b107fbb772203a2664fe980ecbf </Text>
          </View>
          :
          <View>
            <View style={styles.detailsContainer}>
              {/* Network */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Network</Text>
                <Text style={styles.detailValue}>Polygon</Text>
              </View>
              {/* Min to */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Min to</Text>
                <Text style={styles.detailValue}>0xb188...hn552e</Text>
              </View>
              {/* Pay With */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Pay With</Text>
                <Text style={styles.detailValue}>0.00 memo</Text>
              </View>
              {/* Total */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Total</Text>
                <Text style={styles.detailValue}>0.0 memo+0.0 gas</Text>
              </View>
            </View>
            {/* Create Button */}
            <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
                <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
            {/* Note */}
            <Text style={styles.noteText}>
              Note: At this stage, the cost of creating DID is borne by MEMO
            </Text>
          </View>
        }
        <WaitingModal
          visible={waitingModalVisible}
          onClose={closeModal}
        />
        <SuccessModal
          visible={successModalVisible}
          onClose={closeModal}
        />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  didCard: {
    backgroundColor: '#0A1913',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FF6B8B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 35,
  },
  didTitle: {
    color: '#FFA500',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  didDescription: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  didContainer: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#0A1913',
    fontWeight: '600',
    gap: 12,
    borderRadius: 16,
  },
  didheader: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: 20,
  },
  didbody: {
    color: '#CFCFCF',
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
  },
  detailsContainer: {
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  detailLabel: {
    color: '#999',
    fontSize: 16,
  },
  detailValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createButton: {
    borderRadius: 32,
    overflow: 'hidden',
    marginBottom: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
    backgroundColor: '#0A1913',
  },
  gradient: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteText: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 40,
  },
});

export default DID;
