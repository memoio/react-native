import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const pointsData = [
  {
    id: '1',
    type: 'Invite',
    date: '04/16/2025',
    points: 200,
  },
  {
    id: '2',
    type: 'Invite',
    date: '04/16/2025',
    points: 120,
  },
  {
    id: '3',
    type: 'Invite',
    date: '04/16/2025',
    points: 50,
  },
  {
    id: '4',
    type: 'Community Task',
    date: '04/16/2025',
    points: 20,
  },
  {
    id: '5',
    type: 'Daily Check',
    date: '04/16/2025',
    points: 10,
  },
  {
    id: '6',
    type: 'Create DID',
    date: '04/16/2025',
    points: 200,
  },
  {
    id: '7',
    type: 'Bind Invitation Code',
    date: '04/16/2025',
    points: 200,
  },
];

const PointsItem = ({ item, navigation }) => (
  <TouchableOpacity style={styles.pointsItem} onPress={() => {navigation.navigate(item.type);}}>
    <View style={styles.pointsInfo}>
      <Text style={styles.pointsType}>{item.type}</Text>
      <Text style={styles.pointsDate}>{item.date}</Text>
    </View>
    <Text style={styles.pointsValue}>+{item.points}</Text>
  </TouchableOpacity>
);

const PointsDetail = ({navigation}) => {
  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {/* Header with status bar info */}
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Points Details</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Points List */}
      <FlatList
        data={pointsData}
        renderItem={({ item }) => <PointsItem item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
      {/* Bottom Indicator */}
      <View style={styles.bottomIndicator}>
        <View style={styles.indicator} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001A12',
    padding: 16,
  },
  timeText: {
    color: '#fff',
    fontSize: 12,
  },
  rightStatusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 6,
  },
  batteryText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 6,
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
  pointsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  pointsInfo: {
    flex: 1,
  },
  pointsType: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  pointsDate: {
    color: '#999',
    fontSize: 12,
  },
  pointsValue: {
    color: '#00C853',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomIndicator: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  indicator: {
    width: 40,
    height: 5,
    backgroundColor: '#666',
    borderRadius: 3,
  },
});

export default PointsDetail;
