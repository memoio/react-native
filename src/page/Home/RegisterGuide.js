import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const GuideStep = ({ number, title, children }) => (
  <View style={styles.stepContainer}>
    <View style={styles.stepNumberContainer}>
      <Text style={styles.stepNumber}>{number}</Text>
    </View>
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>{title}</Text>
      {children}
    </View>
  </View>
);

const BulletPoint = ({ children, icon }) => (
  <View style={styles.bulletContainer}>
    {!icon && (<Text style={styles.bullet}>•</Text>)}
    {icon && (
      <View style={styles.iconContainer}>
        {icon}
      </View>
    )}
    <View style={styles.bulletContent}>
      {children}
    </View>
  </View>
);

const RegisterGuide = ({navigation}) => {
  const goBack = () => {
    console.log('Go back');
    // In a real app, you would use navigation to go back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TGE Launchpad Quick Guide</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Guide Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Step 1 */}
        <GuideStep number="1" title="Log in to the MEMO TGE Launchpad">
          <BulletPoint>
            <Text style={styles.bulletText}>Click the "Register Now"</Text>
          </BulletPoint>
          <BulletPoint icon={<></>}>
            <Text style={styles.bulletText}>
            <FontAwesome name="thumbs-up" size={16} color="#FFA500" /> Tip: Use the exclusive link for future more airdrop opportunities from other projects. Existing Bybit users can use their current account.
            </Text>
          </BulletPoint>
        </GuideStep>
        {/* Step 2 */}
        <GuideStep number="2" title="Open Your Bybit Account">
          <BulletPoint>
            <Text style={styles.bulletText}>Copy Your Unique Identifier (UID) number</Text>
          </BulletPoint>
          <BulletPoint>
            <Text style={styles.bulletText}>Copy Your Ethereum (ETH) address</Text>
          </BulletPoint>
        </GuideStep>
        {/* Step 3 */}
        <GuideStep number="3" title="Paste your UID and ETH address into the corresponding boxes on the Launchpad.">
        </GuideStep>
        {/* Note */}
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>
            If your region restricts access to exchanges, try using a VPN. Join MEMO Pre-Mining now—more exchanges will be open for registration soon! 
            <Text style={styles.emoji}> 🚀</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000402',
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  stepNumberContainer: {
    width: 26,
    height: 26,
    borderRadius: 14,
    backgroundColor: '#F09A2426',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumber: {
    color: '#F09A24',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
    marginTop: 4,
  },
  stepTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bulletContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    color: '#CFCFCF',
    fontSize: 16,
    marginRight: 8,
    marginTop: -2,
  },
  bulletContent: {
    flex: 1,
  },
  bulletText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  iconContainer: {
    marginTop: 2,
    marginRight: 2,
  },
  tipText: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  noteContainer: {
    paddingHorizontal: 16,
  },
  noteText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  emoji: {
    fontSize: 16,
  },
});

export default RegisterGuide;