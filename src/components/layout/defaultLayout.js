import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DefaultLayout = ({ navigation, children}) => {
  const [activeNav, setActiveNav] = useState(''); // Default active item
  useEffect(() => {
    const currentRoute = navigation.getState().routes[navigation.getState().index].name;
    console.log(currentRoute);
    setActiveNav(currentRoute);
  }, [navigation]);

  const handleNavigation = (screen) => {
    setActiveNav(screen);
    navigation.navigate(screen); // Navigate to the selected screen
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView style={styles.scrollView}>
      {children}
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.navContainer}>
        <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>
            <Icon name="home-outline" size={24} color={activeNav === 'Home' ? '#00C853' : '#666'} />
            <Text style={[styles.navLabel, activeNav === 'Home' && styles.activeNavLabel]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('DID')}>
            <Icon name="card-account-details-outline" size={24} color={activeNav === 'DID' ? '#00C853' : '#666'} />
            <Text style={[styles.navLabel, activeNav === 'DID' && styles.activeNavLabel]}>DID</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Earning')}>
            <Icon name="cash-multiple" size={24} color={activeNav === 'Earning' ? '#00C853' : '#666'} />
            <Text style={[styles.navLabel, activeNav === 'Earning' && styles.activeNavLabel]}>Earning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Referral')}>
            <Icon name="account-multiple" size={24} color={activeNav === 'Referral' ? '#00C853' : '#666'} />
            <Text style={[styles.navLabel, activeNav === 'Referral' && styles.activeNavLabel]}>Referral</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Profile')}>
            <Icon name="account-outline" size={24} color={activeNav === 'Profile' ? '#00C853' : '#666'} />
            <Text style={[styles.navLabel, activeNav === 'Profile' && styles.activeNavLabel]}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000402',
    paddingTop: 25,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  navContainer: {
    padding: 16,
    paddingTop: 0,
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

export default DefaultLayout;
