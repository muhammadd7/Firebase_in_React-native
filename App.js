import React, { useState } from 'react';
import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ViewBase,
  FlatList,
  SectionList,
  SafeAreaView,
  TouchableOpacityBase,
  Alert,
} from 'react-native';

function loginAction({navigation}){
    auth()
      .signInWithEmailAndPassword('akhzar@gmail.com', '123456')
      .then(userCredentials => {
        //var user = userCredentials.user;
        Alert.alert('User Logged In');
        console.log('User signed in!');
        navigation.navigate('DashboardScreen')
      })
      .catch(error => {
        Alert.alert('User Not Found');
        console.error('this is error ', error);
      });

    // const userName = props.userName;
    // const password = props.password;
  
  }

function guestUserAction() {

    auth()
      .signInAnonymously()
      .then((userCredentials) => {
        var user = userCredentials.user;
        console.log('User signed in anonymously', user);
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  }

function HomeScreen1({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: '#1F1E30' }}>
      <View
        style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./android/app/src/main/assets/images/Logo_prep_app.png')}
          style={{ shadowColor: 'white', shadowOpacity: 2, shadowRadius: 5, shadowOffset: { width: 0, height: 0 }, overflow: 'visible' }}
        />
      </View>

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          backgroundColor: '#373753',
          marginBottom: 30,
          width: 300,
          marginLeft: 55,
          borderRadius: 10,
        }}>
        <Image
          source={require('./android/app/src/main/assets/images/username.jpg')}
          style={{marginTop: 14, marginLeft: 10}}
        />
        <TextInput
          value={userName}
          onChangeText={username => setUserName(username)}
          placeholder="USER NAME"
          placeholderTextColor="white"
          style={{width: 275}}
        />
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          backgroundColor: '#373753',
          marginBottom: 30,
          width: 300,
          marginLeft: 55,
          borderRadius: 10,
        }}>
        <Image
          source={require('./android/app/src/main/assets/images/password.jpg')}
          style={{ marginTop: 14, marginLeft: 10 }}
        />
        <TextInput
          value={password}
          onChangeText={password => setPassword(password)}
          placeholder="PASSWORD"
          placeholderTextColor="white"
          style={{ width: 275 }}
        />
      </View>
      <View
        style={{
          width: 300,
          marginLeft: 55,
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <TouchableOpacity>
          <Text style={{ color: 'white' }}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: "#df1247",
          width: 300,
          height: 50,
          marginLeft: 55,
          justifyContent: "center",
          marginBottom: 10,
          borderRadius: 90,
        }} onPress={() => {loginAction()}}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          width: 300,
          height: 50,
          marginLeft: 55,
          justifyContent: "center",
          borderRadius: 90,
        }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>SIGN UP</Text>
      </TouchableOpacity>
      <View
        style={{
          width: 300,
          marginLeft: 55,
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <TouchableOpacity
          onPress={() => { guestUserAction() }}>
          <Text style={{ color: 'white' }}>ANONYMOUS SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AnotherScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1F1E30' }}>
      <Text style={{ color: 'white' }}>AnotherScreen!</Text>
      <Button
        title="Go to Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1F1E30' }}>
      <Text style={{color:'white'}}>Details!</Text>
      <Button
        title="Go to AnotherScreen"
        onPress={() => navigation.navigate('AnotherScreen')}
      />
      <Button
        title="Go to Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'A',
    key: 0,
    lastname: 'Last Name',
    data: [{ key: 0, title: 'Muhammad Umair' }, { key: 1, title: 'User 2' }, { key: 2, title: 'User 3' }, { key: 3, title: 'User 4' }],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'B',
    key: 1,
    lastname: 'Last Name',
    data: [{ key: 0, title: 'User 1' }, { key: 1, title: 'User 2' }],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'C',
    key: 2,
    lastname: 'Last Name',
    data: [{ key: 0, title: 'User 1' }],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'D',
    key: 3,
    data: [{ key: 0, title: 'Muhammad Wahaj Tariq' }]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'E',
    key: 4,
    data: [{ key: 0, title: 'Fahad' }, { key: 1, title: 'Ali' }]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'F',
    key: 4,
    data: [{ key: 0, title: 'Basit' }, { key: 1, title: 'Ahsan' }]
  },
];


function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F1E30',
      }}>
      <Text style={{ color: 'white' }}>Home screen</Text>

      <SectionList
        sections={DATA}
        renderSectionHeader={({section}) => (
          <View
            style={{
              backgroundColor: 'green',
              padding: 5,
              marginBottom: 5,
              height: 40,
              width: 350,
            }}>
            <Text> {section.title} </Text>
          </View>
        )}

        renderItem={({ item, section }) =>

          <View
            style={{
              backgroundColor: 'grey',
              padding: 5,
              marginBottom: 5,
              height: 40,
            }}>
            <Text> {item.title} </Text>
          </View>
        }/>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F1E30',
      }}>
      <Text style={{color: 'white'}}>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
}


function InfoScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F1E30',
      }}>
      <Text style={{color: 'white'}}>Info screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function UserScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F1E30',
      }}>
      <Text style={{color: 'white'}}>User screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" component={HomeScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="AnotherScreen" component={AnotherScreen} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
      <SettingsStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="AnotherScreen" component={AnotherScreen} options={{ headerShown: false }}/>
    </SettingsStack.Navigator>
  );
}

const InfoStack = createNativeStackNavigator();

function InfoStackScreen() {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen name="Info" component={InfoScreen} options={{ headerShown: false }} />
      <InfoStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="AnotherScreen" component={AnotherScreen} options={{ headerShown: false }}/>
    </InfoStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} options={{ headerShown: false }}/>
      <UserStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="AnotherScreen" component={AnotherScreen} options={{ headerShown: false }} />
    </UserStack.Navigator>
  );
}


// const Drawer = createDrawerNavigator();

// function Drawer1() {
//   return (
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeStackScreen} />
//         <Drawer.Screen name="Settings" component={SettingsStackScreen} />
//       </Drawer.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

function DashboardScreen({route, navigation}) {
  return (    
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false, tabBarIcon:({focused})=>(
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image
                source={require('./android/app/src/main/assets/images/home_tab.png')}
                resizeMode="contain"
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#df1247' : 'black',
                }}
              />
              <Text style={{
                color: focused ? '#df1247' : 'black', fontSize:12
              }}>HOME</Text>
            </View>
          )}}/>
      <Tab.Screen name="Settings" component={SettingsStackScreen} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('./android/app/src/main/assets/images/settings_tab.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#df1247' : 'black',
              }}
            />
            <Text style={{
              color: focused ? '#df1247' : 'black', fontSize: 12
            }}>SETTINGS</Text>
          </View>
        )}}/>
      <Tab.Screen name="Info" component={InfoStackScreen} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('./android/app/src/main/assets/images/info_tab.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#df1247' : 'black',
              }}
            />
            <Text style={{
              color: focused ? '#df1247' : 'black', fontSize: 12
            }}>INFO</Text>
          </View>
        ) }} />
      <Tab.Screen name="User" component={UserStackScreen} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('./android/app/src/main/assets/images/User_tab.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#df1247' : 'black',
              }}
            />
            <Text style={{
              color: focused ? '#df1247' : 'black', fontSize: 12
            }}>USER</Text>
          </View>
        ) }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home2" component={HomeScreen1} options={{headerShown:false}}/>
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;