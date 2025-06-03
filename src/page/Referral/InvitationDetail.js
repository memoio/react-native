import React, {useState} from 'react';
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
import CheckBox from '@react-native-community/checkbox';
const InvitationItem = ({ name, timestamp }) => {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.invitationItem}>
      <View style={styles.nameContainer}>
        <View>
            <Text style={styles.nameText}>{name}</Text>
            <TouchableOpacity style={styles.actionButton}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: '#00C853', false: '#666' }}
                style={styles.checkbox}
                />
                <Text style={styles.actionButtonText}>Bind invitation code</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.timestampText}>{timestamp}</Text>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.qrButtonContent}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        tintColors={{ true: '#00C853', false: '#666' }}
                        style={styles.checkbox}
                    />
                    <Text style={[styles.actionButtonText, styles.qrButtonText]}>Create DID</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const InvitationDetail = () => {
  const invitations = [
    { id: '1', name: 'Kris', timestamp: '04/16/2023 12:10:04' },
    { id: '2', name: 'Lee', timestamp: '04/16/2023 12:10:04' },
    { id: '3', name: 'Elena', timestamp: '04/16/2023 12:10:04' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1F14" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invitation Details</Text>
      </View>
      <ScrollView style={styles.content}>
        {invitations.map((invitation) => (
          <InvitationItem
            key={invitation.id}
            name={invitation.name}
            timestamp={invitation.timestamp}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000402',
    padding: 16,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1A2E23',
  },
  backButton: {
    padding: 4,
  },
  checkbox: {
    marginRight: 0,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  invitationItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0A1913',
    borderRadius: 10,
    marginBottom: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  timestampText: {
    color: '#8A8A8A',
    fontSize: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionButtonText: {
    color: '#8A8A8A',
    fontSize: 13,
  },
  qrButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrButtonText: {
    marginLeft: 6,
    color: '#4CD964',
  },
});

export default InvitationDetail;
