import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const messagesData = [
  {
    id: '1',
    title: 'aZen vs. Other DePIN Giants',
    date: '04/16/2025',
    time: '08:21:10',
    preview: '1/7 Most People are not social media experts but in web3, your...',
    avatar: require('../../../assets/logo.png'),
  },
  {
    id: '2',
    title: 'aZen vs. Other DePIN Giants',
    date: '04/16/2025',
    time: '08:21:10',
    preview: '1/7 Most People are not social media experts but in web3, your...',
    avatar: require('../../../assets/logo.png'),
  },
  {
    id: '3',
    title: 'aZen vs. Other DePIN Giants',
    date: '04/16/2025',
    time: '08:21:10',
    preview: '1/7 Most People are not social media experts but in web3, your...',
    avatar: require('../../../assets/logo.png'),
  },
  {
    id: '4',
    title: 'aZen vs. Other DePIN Giants',
    date: '04/16/2025',
    time: '08:21:10',
    preview: '1/7 Most People are not social media experts but in web3, your...',
    avatar: require('../../../assets/logo.png'),
  },
];

const MessageItem = ({ item, navigation }) => (
  <TouchableOpacity style={styles.messageItem} onPress={navigation.navigate('MessageDetail')}>
    <Image source={item.avatar} style={styles.avatar} />
    <View style={styles.messageContent}>
      <Text style={styles.messageTitle}>{item.title}</Text>
      <Text style={styles.messageTime}>{item.date} {item.time}</Text>
      <Text style={styles.messagePreview}>{item.preview}</Text>
    </View>
  </TouchableOpacity>
);

const Message = ({ navigation }) => {
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
      {/* Messages List */}
      <FlatList
        data={messagesData}
        renderItem={({ item }) => <MessageItem item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001A12',
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  messageItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
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
    color: '#999',
    fontSize: 12,
    marginBottom: 8,
  },
  messagePreview: {
    color: '#999',
    fontSize: 14,
  },
});

export default Message;
