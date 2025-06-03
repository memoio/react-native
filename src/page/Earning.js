/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconBack from 'react-native-vector-icons/Ionicons';
import DefaultLayout from '../components/layout/defaultLayout';
import SuccessModal from './Earning/SuccessModal';
import CheckedModal from './Earning/CheckecMocal';
import ClaimSuccess from './Earning/ClaimSuccess';

const DailyCheckItem = ({ day, points, isCompleted, onDailyCheck }) => (
  <View style={styles.dailyCheckItem}>
    <Text style={styles.pointsValue}>+{points}</Text>
    { isCompleted !== 1
        ?
        <View style={styles.checkIcon}/>
        :
        <TouchableOpacity style={styles.checkButton} onPress={onDailyCheck}>
            <Text style={styles.checkButtonText}>check</Text>
        </TouchableOpacity>
    }
    <View style={[styles.dayBadge, isCompleted && styles.completedDayBadge]}>
      <Text style={styles.dayText}>Day {day}</Text>
    </View>
  </View>
);

const TaskItem = ({ icon, title, points, actionText, onAction }) => (
  <View style={styles.taskItem}>
    <View style={styles.taskInfo}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View>
        <Text style={styles.taskText}>{title}</Text>
        {points && <Text style={styles.taskPoints}>+{points}</Text>}
      </View>
    </View>
    <TouchableOpacity style={styles.actionButton} onPress={onAction}>
      <Text style={styles.actionButtonText}>{actionText}</Text>
    </TouchableOpacity>
  </View>
);

const Earning = ({navigation}) => {
    const [checkedModalVisible, setcheckedModalVisible] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [claimModalVisible, setClaimModalVisible] = useState(false);
    const [claimTitle, setClaimTitle] = useState('X');
  const handleShare = (platform) => {
    console.log(`Share to ${platform}`);
    setSuccessModalVisible(true);
    // Handle sharing logic
  };
  const closeModal = () => {
    setcheckedModalVisible(false);
    setClaimModalVisible(false);
    setSuccessModalVisible(false);
  };

  const handleClaim = (platform) => {
    console.log(`Join ${platform}`);
    // Handle join logic
    setClaimTitle(platform);
    setClaimModalVisible(true);
  };

  const handleHistory = () => {
    console.log('View history');
    // Navigate to history screen
  };
  const handleDailyCheck = () => {
    setcheckedModalVisible(true);
  };

  return (
    <DefaultLayout navigation={navigation}>
        {/* Points Header */}
        <View style={styles.pointsHeader}>
          <View style={styles.pointsHeaderLeft}>
            <View style={styles.pointsicon}>
                <Image source={require('../../assets/point.png')} style={styles.pointsImage} />
                <Text style={styles.pointsTitle}>Points</Text>
            </View>
            <TouchableOpacity onPress={handleHistory}>
              <Text style={styles.historyText}>History</Text>
            </TouchableOpacity>
          </View>
          <View style={'styles.pointsHeaderLeft'}>
            <Text style={styles.totalPoints}>1000</Text>
            <Text style={styles.totalLabel}>Total</Text>
          </View>
        </View>

        {/* Daily Check */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Check</Text>
            <Icon name="question-circle" size={16} color="#666" />
          </View>
          <View style={styles.dailyCheckContainer}>
            <DailyCheckItem day={1} points={10} isCompleted={0} />
            <DailyCheckItem day={2} points={10} isCompleted={0} />
            <DailyCheckItem day={3} points={10} isCompleted={1} onDailyCheck={handleDailyCheck}/>
            <DailyCheckItem day={4} points={10} isCompleted={2} />
            <DailyCheckItem day={5} points={20} isCompleted={2} />
          </View>
        </View>

        {/* Beginner Quest */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Beginner Quest</Text>
          <TaskItem
            icon={<Icon name="twitter" size={16} color="#fff" style={styles.taskIcon} />}
            title="Share Referral Link to X"
            points={20}
            actionText="Share"
            onAction={() => handleShare('X')}
          />
          <TaskItem
            icon={<Icon name="telegram" size={16} color="#fff" style={styles.taskIcon} />}
            title="Share Referral Link to TG"
            points={20}
            actionText="Share"
            onAction={() => handleShare('Telegram')}
          />
        </View>

        {/* Daily Task */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Task</Text>
          <TaskItem
            icon={<Icon name="twitter" size={16} color="#fff" style={styles.taskIcon} />}
            title="Share Referral Link to X"
            points={20}
            actionText="Share"
            onAction={() => handleShare('X')}
          />
          <TaskItem
            icon={<Icon name="telegram" size={16} color="#fff" style={styles.taskIcon} />}
            title="Share Referral Link to TG"
            points={20}
            actionText="Share"
            onAction={() => handleShare('Telegram')}
          />
        </View>

        {/* Play to Earn Banner */}
        <TouchableOpacity style={styles.playToEarnBanner}>
          <View style={styles.playToEarnContent}>
            <Text style={styles.playToEarnTitle}>Play to Earn</Text>
            <Text style={styles.playToEarnSubtitle}>Earn Points with Every Tap!</Text>
            <IconBack name="arrow-forward" size={20} color="#fff" />
          </View>
          <Image source={require('../../assets/hand.png')} style={styles.handEmoji}/>
        </TouchableOpacity>

        {/* Community Task */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Task</Text>
          <TaskItem
            icon={<Icon name="twitter" size={16} color="#fff" style={styles.taskIcon} />}
            title="Follow X"
            points={20}
            actionText="Claim"
            onAction={() => handleClaim('X')}
          />
          <TaskItem
            icon={<Icon name="telegram" size={16} color="#fff" style={styles.taskIcon} />}
            title="Join Telegram"
            points={20}
            actionText="Claim"
            onAction={() => handleClaim('Telegram')}
          />
          <TaskItem
            icon={<Icon name="telegram" size={16} color="#fff" style={styles.taskIcon} />}
            title="Join Discord"
            points={50}
            actionText="Claim"
            onAction={() => handleClaim('Discord')}
          />
        </View>
        <View style={{height: 20}}/>
        <SuccessModal
            visible={successModalVisible}
            onClose={closeModal}
        />
        <CheckedModal
            visible={checkedModalVisible}
            onClose={closeModal}
        />
        <ClaimSuccess
            visible={claimModalVisible}
            onClose={closeModal}
            title={claimTitle}
        />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001A12',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  pointsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#286AF6',
    backgroundColor: '#00B66C',
    borderRadius: 8,
  },
  pointsHeaderLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pointsicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsImage: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  pointsIcon: {
    marginRight: 8,
  },
  pointsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  historyText: {
    color: '#fff',
    fontSize: 14,
  },
  totalPoints: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalLabel: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  section: {
    marginTop: 20,
    marginBottom: 12,
    backgroundColor: '#0A1913',
    borderWidth: 1,
    borderColor: '#1C1C1C',
    borderRadius: 10,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  dailyCheckContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dailyCheckItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18%',
    backgroundColor: '#05F29230',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    gap: 3,
    paddingVertical: 6,
  },
  pointsValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  checkIcon:{
    width: 14,
    height: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F09A24',
  },
  dayBadge: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  completedDayBadge: {
  },
  dayText: {
    color: '#fff',
    fontSize: 12,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: '#05F29230',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginRight: 16,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  taskIcon: {
    marginRight: 0,
  },
  taskText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  taskPoints: {
    color: '#00C853',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkButton: {
    backgroundColor: '#00B66C',
    padding: 2,
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#0A1913',
    paddingVertical: 6,
    borderRadius: 32,
    borderWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderColor: '#00B66C',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 78,
  },
  actionButtonText: {
    color: '#00C853',
    fontSize: 12,
    fontWeight: 'bold',
  },
  playToEarnBanner: {
    backgroundColor: '#00B66C',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playToEarnContent: {
    flex: 1,
    gap:5,
  },
  playToEarnTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  playToEarnSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  handEmoji: {
    width: 60,
    height: 60,
  },
});

export default Earning;
