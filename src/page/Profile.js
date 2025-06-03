/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DefaultLayout from '../components/layout/defaultLayout';

const ProfileCard = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.profileCard} onPress={() => navigation.navigate("ProfileEdit")}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Cathy</Text>
          <Text style={styles.profileId}>did:memo:5a65...f4de36</Text>
          <TouchableOpacity style={styles.copyButton}>
            <FeatherIcon name="copy" size={14} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="twitter" size={18} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {/* <Icon name="telegram" size={18} color="#000000" /> */}
          <FontIcon name="telegram" size={18} color="#000000"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="discord" size={18} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="plus" size={18} color="#000000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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

const Profile = ({navigation}) => {
  return (
    <DefaultLayout navigation={navigation}>
        <ProfileCard  navigation={navigation}/>
        <View style={styles.menuSection}>
          <MenuItem
            title="Wallet"
            value="0x06845...EBFEe"
            icon="content-copy"
            action="wallet"
            navigation={navigation}
          />
          <View style={{height: 20}}/>
          <MenuItem
            title="Invite Code"
            icon="pencil"
            action="InviteCode"
            navigation={navigation}
          />
          <MenuItem
            title="Privacy Policy"
            icon="chevron-right"
            action="Privacy"
            navigation={navigation}
          />
          <MenuItem
            title="User Agreement"
            icon="chevron-right"
            action="UserAgreement"
            navigation={navigation}
          />
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F14',
  },
  scrollContent: {
    padding: 16,
  },
  profileCard: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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

export default Profile;
