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
import { useColorScheme } from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Change this based on your icon set

const WalletOption = ({ icon, name, isSelected, lightning = false, onPress }) => {
  const {colorScheme} = useColorScheme();
  return (
    <TouchableOpacity
      style={[colorScheme === 'dark' ? styles.walletOption : styles.walletOption_white, isSelected ? colorScheme === 'dark' ? styles.selectedWalletOption : styles.selectedWalletOption_white : '']}
      onPress={onPress}
    >
      <View style={styles.walletContent}>
        <Image source={icon} style={styles.walletIcon} />
        <Text style={!isSelected ? colorScheme === 'dark' ? styles.walletName : styles.walletName_white : styles.walletName}>{name}</Text>
      </View>
      {lightning && (
        <View style={styles.lightningContainer}>
          <Text style={styles.lightningIcon}>⚡</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const WalletConnect = ({ navigation }) => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const [selectedWallet, setSelectedWallet] = React.useState('Token Pocket');

  const walletOptions = [
    { name: 'Token Pocket', icon: require('../assets/token-pocket.png'), lightning: true },
    { name: 'Metamask', icon: require('../assets/metamask.png') },
    { name: 'Coinbase', icon: require('../assets/coinbase.png') },
    { name: 'Browser Wallet', icon: require('../assets/browser-wallet.png') },
  ];
  const walletImage = require('../assets/wallet.png');

  return (
    <SafeAreaView style={colorScheme === 'dark' ? styles.container : styles.container_white}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'white-content' : 'dark-content'} backgroundColor="#000" />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.walletIconContainer}>
            <Text style={styles.walletHeaderIcon}><Image source={walletImage} style={styles.headerIcon}/></Text>
          </View>
          <Text style={colorScheme === 'dark' ? styles.title : styles.title_white}>Connect Wallet</Text>
        </View>

        <View style={styles.optionsContainer}>
          {walletOptions.map((wallet) => (
            <WalletOption
              key={wallet.name}
              icon={wallet.icon}
              name={wallet.name}
              lightning={wallet.lightning}
              isSelected={selectedWallet === wallet.name}
              onPress={() => {setSelectedWallet(wallet.name); navigation.navigate('ReferralApp');}}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  container_white: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 130,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  walletIconContainer: {
    marginRight: 10,
  },
  walletHeaderIcon: {
    fontSize: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  title_white: {
    color: '#060706',
    fontSize: 22,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 20,
  },
  walletOption: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 32,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletOption_white: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CDCDCD'
  },
  selectedWalletOption: {
    borderWidth: 2, // Top and bottom borders will be 2px
    borderTopWidth: 2, // Explicitly set top border
    borderBottomWidth: 2, // Explicitly set bottom border
    borderLeftWidth: 0.1, // No left border
    borderRightWidth: 0.1, // No right border
    borderColor: '#00C853',
    backgroundColor: 'rgba(0, 200, 83, 0.1)',
  },
  selectedWalletOption_white: {
    backgroundColor: '#00B66C',
    color: 'fff',
  },
  walletContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  headerIcon: {
    width: 22,
    height: 16,
  },
  walletName: {
    color: '#fff',
    fontSize: 16,
  },
  walletName_white: {
    color: '#666666',
    fontSize: 16,
  },
  lightningContainer: {
    position: 'absolute',
    right: 16,
    backgroundColor: 'rgba(255, 165, 0, 0.2)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningIcon: {
    fontSize: 14,
    color: '#FFA500',
  },
});

export default WalletConnect;