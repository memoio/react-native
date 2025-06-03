import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReferralApp from './src/ReferralApp';
import WalletConnect from './src/WalletConnect';
import Home from './src/page/Home';
import AirdropWallet from './src/page/Home/AirdropWallet';
import PointsDetail from './src/page/Home/PointsDetail';
import AddressApp from './src/page/Home/AddressApp';
import RegisterGuide from './src/page/Home/RegisterGuide';
import Register from './src/page/Home/Register';
import Leaderboard from './src/page/Home/Leaderboard';
import Message from './src/page/Home/Message';
import MessageDetail from './src/page/Home/MessageDetail';
import DID from './src/page/DID';
import Earning from './src/page/Earning';
import Referral from './src/page/Referral';
import InvitationDetail from './src/page/Referral/InvitationDetail';
import Profile from './src/page/Profile';
import Privacy from './src/page/Profile/Privacy';
import UserAgreement from './src/page/Profile/UserAgreement';
import ProfileEdit from './src/page/Profile/ProfileEdit';
import ChangeAvatar from './src/page/Profile/ChageAvatar';
import InviteCode from './src/page/Profile/InviteCode';
import ModifyName from './src/page/Profile/ModifyName';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConnectWallet">
        <Stack.Screen name="ConnectWallet" component={WalletConnect} options={{ headerShown: false }}/>
        <Stack.Screen name="ReferralApp" component={ReferralApp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Airdrop" component={AirdropWallet} options={{ headerShown: false }} />
        <Stack.Screen name="PointsDetail" component={PointsDetail} options={{ headerShown: false }} />
        <Stack.Screen name="AddressApp" component={AddressApp} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterGuide" component={RegisterGuide} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Invite" component={Leaderboard} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="MessageDetail" component={MessageDetail} options={{ headerShown: false }} />
        <Stack.Screen name="DID" component={DID} options={{ headerShown: false }} />
        <Stack.Screen name="Earning" component={Earning} options={{ headerShown: false }} />
        <Stack.Screen name="Referral" component={Referral} options={{ headerShown: false }} />
        <Stack.Screen name="InvitationDetail" component={InvitationDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name="UserAgreement" component={UserAgreement} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{ headerShown: false }} />
        <Stack.Screen name="ChangeAvatar" component={ChangeAvatar} options={{ headerShown: false }} />
        <Stack.Screen name="InviteCode" component={InviteCode} options={{ headerShown: false }} />
        <Stack.Screen name="ModifyName" component={ModifyName} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
