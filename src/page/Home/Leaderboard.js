/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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

const leaderboardData = [
  {
    id: '1',
    name: 'Cathy',
    points: 1000,
    rank: 1,
    isCurrentUser: true,
    avatar: require('../../../assets/logo.png'),
  },
  {
    id: '2',
    name: 'Cathy',
    points: 1000,
    rank: 1,
    isCurrentUser: false,
    avatar: require('../../../assets/logo1.png'),
  },
  {
    id: '3',
    name: 'Cathy',
    points: 1000,
    rank: 2,
    isCurrentUser: false,
    avatar: require('../../../assets/logo2.png'),
  },
  {
    id: '4',
    name: 'Cathy',
    points: 1000,
    rank: 3,
    isCurrentUser: false,
    avatar: require('../../../assets/logo.png'),
  },
  {
    id: '5',
    name: 'Cathy',
    points: 1000,
    rank: 4,
    isCurrentUser: false,
    avatar: require('../../../assets/logo1.png'),
  },
  {
    id: '6',
    name: 'Cathy',
    points: 1000,
    rank: 5,
    isCurrentUser: false,
    avatar: require('../../../assets/logo2.png'),
  },
];

const LeaderboardItem = ({ item, navigation }) => (
  <TouchableOpacity style={[styles.leaderboardItem, item.isCurrentUser && styles.currentUserItem]} onPress={navigation.navigate('Message')}>
    <View style={styles.userInfo}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        {item.isCurrentUser && <Text style={styles.meLabel}>Me</Text>}
      </View>
    </View>
    <View style={styles.pointsContainer}>
      <Text style={styles.pointsText}>{item.points} Points</Text>
      <View style={[styles.rankBadge, item.isCurrentUser && styles.firstRank]}>
        <Text style={[styles.rankText, item.isCurrentUser && {color: 'white'}]}>{item.rank}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


const Leaderboard = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('weekly');

  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    navigation.goBack();
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#001A12" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'weekly' && styles.activeTab]}
          onPress={() => handleTabPress('weekly')}>
          <Text style={[styles.tabText, activeTab === 'weekly' && styles.activeTabText]}>
            Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'monthly' && styles.activeTab]}
          onPress={() => handleTabPress('monthly')}>
          <Text style={[styles.tabText, activeTab === 'monthly' && styles.activeTabText]}>
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'allTime' && styles.activeTab]}
          onPress={() => handleTabPress('allTime')}>
          <Text style={[styles.tabText, activeTab === 'allTime' && styles.activeTabText]}>
            All Time
          </Text>
        </TouchableOpacity>
      </View>
      {/* Leaderboard List */}
      <FlatList
        data={leaderboardData}
        renderItem={({ item }) => <LeaderboardItem item={item} navigation={navigation}/>}
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
    paddingTop: 25,
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#00B66C',
  },
  tabText: {
    color: '#999',
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  currentUserItem: {
    backgroundColor: 'rgba(0, 200, 83, 0.15)',
    borderWidth: 1,
    borderColor: '#00C853',
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameContainer: {
    marginLeft: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  meLabel: {
    color: '#999',
    fontSize: 12,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 24,
  },
  rankBadge: {
    width: 34,
    height: 34,
    borderRadius: 24,
    backgroundColor: '#F09A2426',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstRank: {
    backgroundColor: '#FFA500', // Gold
  },
  secondRank: {
    backgroundColor: '#C0C0C0', // Silver
  },
  thirdRank: {
    backgroundColor: '#CD7F32', // Bronze
  },
  rankText: {
    color: '#F09A24',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Leaderboard;
