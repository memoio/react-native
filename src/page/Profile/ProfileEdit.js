import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
const ProfileCard = () => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Cathy</Text>
      </View>
    </View>
  );
};

const MenuItem = ({ title, value, icon, action, navigation }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(action)} >
      <Text style={styles.menuTitle}>{title}</Text>
      <View style={styles.menuValueContainer}>
        {value && <Text style={styles.menuValue}>{value}</Text>}
        <Icon name={icon} size={20} color="#4CD964" />
      </View>
    </TouchableOpacity>
  );
};

const ProfileEdit = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#001A12" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit</Text>
        <View style={styles.placeholder} />
      </View>
      <ProfileCard />
      <View style={styles.menuSection}>
        <MenuItem
          title="Modify Name"
          icon="chevron-right"
          action="ModifyName"
          navigation={navigation}
        />
        <MenuItem
          title="Change Avatar"
          icon="chevron-right"
          action="ChangeAvatar"
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000402',
    padding: 16,
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
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
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#10B981',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 4,
  },
  profileId: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
  },
  copyButton: {
    marginLeft: 8,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  socialButton: {
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 0.5,
    borderColor: '#0A1913',
  },
  menuSection: {
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '##1C1C1C',
    backgroundColor: '#0A1913',
    borderRadius: 10,
    marginBottom: 10,
  },
  menuTitle: {
    color: '#666666',
    fontSize: 16,
  },
  menuValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuValue: {
    color: '#FFFFFF',
    opacity: 0.7,
    marginRight: 8,
    fontSize: 14,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#10B981',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileEdit;
