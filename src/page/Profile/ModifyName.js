import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ModifyName = ({navigation}) => {
  const [inviteCode, setInviteCode] = useState('');
  const handleSubmit = () => {
    // Handle the submission logic here
    // You would typically upload the image to a server here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#001A12" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Modify Name</Text>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.content}>
        <Text style={styles.headerText}>Enter your new name</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter"
            placeholderTextColor="#666"
            value={inviteCode}
            onChangeText={setInviteCode}
            secureTextEntry
          />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.7}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F14',
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
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
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  uploadArea: {
    height: 90,
    borderWidth: 1,
    borderColor: '#10B981',
    borderStyle: 'dashed',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
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
    marginBottom: 20,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  submitButton: {
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
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ModifyName;
