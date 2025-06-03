import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Privacy = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1F14" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          MemoLabs built the data app as a Free app. This SERVICE is provided by MemoLabs at no cost and is intended for use as is.
        </Text>
        <Text style={styles.paragraph}>
          This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
        </Text>
        <Text style={styles.paragraph}>
          If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        </Text>
        <Text style={styles.sectionTitle}>Information Collection and Use</Text>
        <Text style={styles.paragraph}>
          For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to azen Profile Information, aZen Activity, information from Third Party Services and Users, App, browser, device information. The information that we request will be retained by us and used as described in this privacy policy.
        </Text>
        <Text style={styles.paragraph}>
          • aZen Profile Information: We collect the information you provide when you create your aZen account. This includes your aZen Profile Information. We collect the information that you create, upload, or receive from others when you use our service, including your name, email address, and settings and preferences.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F14',
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    opacity: 0.9,
  },
});

export default Privacy;
