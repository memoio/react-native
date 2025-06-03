import React, {useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const RegisterSuccess = ({ visible, onClose, navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Airdrop');
        }, 2000);
    }, [navigation]);
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
          <Text style={styles.messageText}>Add successful</Text>
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
  messageText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 25,
    textAlign: 'center',
  },
});

export default RegisterSuccess;
