import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.iconContainer}>
            <Image source={require('../../../assets/verified.png')} style={styles.image}/>
          </View>
          <Text style={styles.pointsText}>Success</Text>
          <Text style={styles.messageText}>After your friend binds the invitation code & creates a DID, you will receive points as rewards!</Text>
          <TouchableOpacity
            style={styles.okButton}
            onPress={() => {onClose();}}
          >
            <Text style={styles.okButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalView: {
    width: width * 0.8,
    backgroundColor: '#0A1913',
    borderRadius: 10,
    padding: 12,
    paddingTop: 70,
    paddingBottom: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image:{
    width: 60,
    height: 60,
  },
  iconContainer: {
    position: 'absolute',
    top: -44,
    width: 88,
    height: 88,
    borderRadius: '100%',
    backgroundColor: '#0A1913',
    borderWidth: 1,
    borderColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pointsText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageText: {
    color: '#CFCFCF',
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
  },
  okButton: {
    width: 200,
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessModal;
