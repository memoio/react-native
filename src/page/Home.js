/* eslint-disable react-native/no-inline-styles */
import React, { useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NoticeModal from '../components/Home/NoticeModal';
import DefaultLayout from '../components/layout/defaultLayout';


const Home = ({ navigation }) => {
    const [isDID, setIsDID] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    // useEffect(() => {
    //     setModalVisible(true);
    // }, []);
    const closeModal = () => {
        setModalVisible(false);
        // You might want to navigate to the next screen here
        // navigation.navigate('NextScreen');
      };
  return (
    <DefaultLayout navigation={navigation}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.avatar}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>Cathy</Text>
            {
              !isDID ?
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.userAddress}>Create DID</Text>
              </TouchableOpacity>
              :
              <Text style={styles.userAddress}>did:memo:54tr...dfdd</Text>
            }
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="bell-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Rewards Hub Banner */}
      <View style={styles.rewardsBanner}>
        <View style={styles.rewardsBannerContent}>
          <View>
            <Text style={styles.rewardsBannerTitle}>TGE Rewards Hub</Text>
            <Text style={styles.rewardsBannerSubtitle}>
              Unlock Pre-Mining Bonuses{'\n'}for SMEMO
            </Text>
          </View>
          <Image
            source={require('../../assets/coins.png')}
            style={styles.coinsImage}
          />
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <View style={styles.statValueHeader}>
              <Icon name="star-outline" size={20} color="#00C853" />
              <Text style={styles.statLabel}>Total Points</Text>
          </View>
          <View style={styles.statValueContainer}>
            <Text style={styles.statValue}>{isDID ? 1000 : '-'}</Text>
            <Icon name="arrow-right" size={16} color="#666" />
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statValueHeader}>
              <Icon name="account-outline" size={20} color="#00C853" />
              <Text style={styles.statLabel}>Referral Made</Text>
          </View>
          <View style={styles.statValueContainer}>
            <Text style={styles.statValue}>{isDID ? 10 : '-'}</Text>
            <Icon name="arrow-right" size={16} color="#666" />
          </View>
        </View>
      </View>

      {/* Points Earned Today */}
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <View style={styles.cardTitleContainer}>
            <Icon name="plus-circle-outline" size={20} color="#00C853" />
            <Text style={styles.cardTitle}>Points Earned Today</Text>
          </View>
          <Text style={styles.cardValue}>{isDID ? 10 : '-'}</Text>
        </View>
        <TouchableOpacity style={[styles.earnMoreButton,  { borderColor: isDID ? '#F09A24' : '#666666'}]}>
          <Text style={[styles.earnMoreButtonText, { color: isDID ? '#FFFFFF' : '#666666'}]}>Earn More</Text>
        </TouchableOpacity>
      </View>

      {/* Streak Check-In */}
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <View style={styles.cardTitleContainer}>
            <Icon name="calendar-check-outline" size={20} color="#00C853" />
            <Text style={styles.cardTitle}>Streak Check-In</Text>
          </View>
          <Text style={styles.cardValue}>{isDID ? +10 : '-'}</Text>
        </View>
        <TouchableOpacity style={[styles.claimButton,  { borderColor: isDID ? '#00B66C' : '#666666'}]}>
            <Text style={[styles.claimButtonText, { color: isDID ? '#FFFFFF' : '#666666'}]}>Claim Now</Text>
          </TouchableOpacity>
      </View>

      {/* Global Rank */}
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <View style={styles.cardTitleContainer}>
            <Icon name="chart-line" size={20} color="#00C853" />
            <Text style={styles.cardTitle}>My Global Rank</Text>
          </View>
          <Text style={styles.cardValue}>{isDID ? '1000+' : '-'}</Text>
        </View>
        <TouchableOpacity style={[styles.detailsButton,  { borderColor: isDID ? '#00B66C' : '#666666'}]}>
            <Text style={[styles.detailsButtonText, { color: isDID ? '#FFFFFF' : '#666666'}]}>See Details</Text>
          </TouchableOpacity>
      </View>

      {/* Connect With Community */}
      <View style={styles.community}>
        <View style={styles.communityHeader}>
          <Icon name="earth" size={20} color="#00C853" />
          <Text style={styles.communityTitle}>Connect With Community</Text>
        </View>
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.communityItem}>
              <FontAwesome name="twitter" size={20} color="#fff" />
            </View>
            <Text style={styles.socialLabel}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
              <View style={styles.communityItem}>
                  <FontAwesome name="telegram" size={20} color="#fff" />
              </View>
              <Text style={styles.socialLabel}>Telegram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
              <View style={styles.communityItem}>
                  <FontAwesome name="discord" size={20} color="#fff" />
              </View>
              <Text style={styles.socialLabel}>Discord</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
              <View style={styles.communityItem}>
                  <FontAwesome name="medium" size={20} color="#fff" />
              </View>
              <Text style={styles.socialLabel}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
              <View style={styles.communityItem}>
                  <FontAwesome name="web" size={20} color="#fff" />
              </View>
              <Text style={styles.socialLabel}>Website</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NoticeModal
        visible={modalVisible}
        onClose={closeModal}
        navigation={navigation}
      />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001A12',
    padding: 16,
    paddingTop: 24,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
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
  userTextContainer: {
    marginLeft: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userAddress: {
    color: '#999',
    fontSize: 12,
  },
  notificationButton: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#00B66C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsBanner: {
    borderRadius: 12,
    marginVertical: 16,
    overflow: 'hidden',
    backgroundColor: '#00B66C',
  },
  rewardsBannerContent: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardsBannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rewardsBannerSubtitle: {
    color: '#CFCFCF',
    fontSize: 14,
  },
  coinsImage: {
    width: 180,
    height: 120,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 16,
  },
  statItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    flex: 1,
  },
  statLabel: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  statValueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 5,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#333',
    marginHorizontal: 16,
  },
  community: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  communityItem: {
    width: 38,
    height: 38,
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: '#05F29230',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardLeft: {
    flexDirection: 'column',
    gap: 8,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  earnMoreButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,

    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#F09A24',
  },
  earnMoreButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  claimButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 2,
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
  },
  claimButtonText: {
    color: '#00C853',
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailsButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 2,
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00B66C',
  },
  detailsButtonText: {
    color: '#00C853',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  communityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  communityTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    alignItems: 'center',
  },
  socialLabel: {
    color: '#999',
    fontSize: 12,
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF08',
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    borderRadius: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navLabel: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },
  activeNavLabel: {
    color: '#00C853',
  },
});

export default Home;