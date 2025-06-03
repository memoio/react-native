import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageDetail = ({ navigation }) => {
  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#001A12" />
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Message</Text>
            <View style={styles.placeholder} />
        </View>
        <View style={styles.listContent}>
            <View  style={styles.messageItem}>
                <Image source={require('../../../assets/logo.png')} style={styles.avatar} />
                <View style={styles.messageContent}>
                    <Text style={styles.messageTitle}>aZen vs. Other DePIN Giants</Text>
                    <Text style={styles.messageTime}>04/16/2025 08:21:10</Text>
                </View>
            </View>
            <Text style={styles.messagePreview}>1/7 Most People are not social media experts but in web3, your...</Text>
            <Text style={styles.messagePreview}>1/7 Most People are not social media experts but in web3, your...</Text>
            <Text style={styles.messagePreview}>1/7 Most People are not social media experts but in web3, your...</Text>
            <View style={{height: 60}}/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001A12',
    marginTop: 25,
    paddingHorizontal: 16,
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
  listContent: {
    padding: 16,
    flexDirection: 'column',
    backgroundColor: '#0A1913',
    borderRadius: 12,
  },
  messageItem: {
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageTime: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 8,
  },
  messagePreview: {
    color: '#999',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default MessageDetail;
