import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconBack from 'react-native-vector-icons/Ionicons';
import DefaultLayout from '../../components/layout/defaultLayout';
const ExchangeItem = ({ logo, name, address, onPress }) => {
  return (
    <TouchableOpacity style={styles.exchangeItem} onPress={onPress}>
      <View style={styles.exchangeInfo}>
        <Image source={logo} style={styles.exchangeLogo} />
        <View style={styles.exchangeDetails}>
          <Text style={styles.exchangeName}>{name}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.exchangeAddress}>{address}</Text>
            <TouchableOpacity style={styles.copyButton}>
              <FontAwesome name="copy" size={12} color="#F09A24" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <IconMaterial name="arrow-forward-ios" size={16} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

const AirdropWallet = ({ navigation }) => {
  const handleExchangePress = (exchange) => {

    console.log(`Connect to ${exchange}`);
    navigation.navigate('PointsDetail');
    // Add your connection logic here
  };

  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    navigation.goBack();
  };
  return (
    <DefaultLayout navigation={navigation}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <IconBack name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Airdrop Wallets</Text>
          <View style={styles.placeholder} />
        </View>
        <Text style={styles.headerText}>
          Secure your exchange addresses for TGE participation
        </Text>

        {/* Banner */}
        <View
          style={styles.banner}>
          <View style={styles.bannerContent}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>
                Connect & Get Ready{'\n'}for Rewards
              </Text>
              <Text style={styles.bannerSubtitle}>
                Don't wait — TGE is approaching fast!
              </Text>
            </View>
            <Image
              source={require('../../../assets/reward.png')}
              style={styles.bannerImage}
            />
          </View>
        </View>

        {/* Exchange List */}
        <View style={styles.exchangeList}>
          <ExchangeItem
            logo={require('../../../assets/binance.png')}
            name="Binance"
            address="0x485y4tu...4uy54u"
            onPress={() => handleExchangePress('Binance')}
          />
          <ExchangeItem
            logo={require('../../../assets/okx.png')}
            name="OKX"
            address="0x485y4tu...4uy54u"
            onPress={() => handleExchangePress('OKX')}
          />
          <ExchangeItem
            logo={require('../../../assets/gate.png')}
            name="Gate.io"
            address="0x485y4tu...4uy54u"
            onPress={() => handleExchangePress('Gate.io')}
          />
        </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  banner: {
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#00B66C',
  },
  bannerContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
  bannerImage: {
    width: 80,
    height: 80,
  },
  exchangeList: {
    marginBottom: 20,
  },
  exchangeItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exchangeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  exchangeLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  exchangeDetails: {
    marginLeft: 12,
    flex: 1,
  },
  exchangeName: {
    color: '#CFCFCF',
    fontSize: 16,
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exchangeAddress: {
    color: 'white',
    fontSize: 14,
  },
  copyButton: {
    marginLeft: 8,
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

export default AirdropWallet;