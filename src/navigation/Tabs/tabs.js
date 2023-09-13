import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebScreen from '../../shared/WebView/WebView';
import { Image, StyleSheet, Text } from 'react-native';
import { IMAGE_PATH } from '../../shared/constants/imagePath';
import urls from '../../shared/constants/urls';
import { useGlobal } from '../../shared/hooks/useGlobal';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  const { isCorporateView } = useGlobal();
  const tabs = useMemo(
    () => [
      {
        name: 'first',
        component: WebScreen,
        imagePath: IMAGE_PATH.EMPLOYMENT,
        label: 'First',
        params: { url: urls.EMPLOYMENT },
      },
      {
        name: 'second',
        component: WebScreen,
        imagePath: IMAGE_PATH.ENTERPRISE,
        label: 'Second',
        params: { url: urls.ENTERPRISE },
      },
      {
        name: 'third',
        component: WebScreen,
        imagePath: IMAGE_PATH.HOME,
        label: 'Third',
        params: { url: urls.HOME },
      },
      {
        name: 'fourth',
        component: WebScreen,
        imagePath: IMAGE_PATH.PROFILE,
        label: 'Fourth',
        params: { url: urls.PROFILE },
      },
      {
        name: 'fifth',
        component: WebScreen,
        imagePath: IMAGE_PATH.USERS,
        label: 'Fifth',
        params: { url: urls.USER },
      },
    ],
    []
  );

  const corporateTabs = useMemo(
    () => [
      {
        name: 'company',
        component: WebScreen,
        imagePath: IMAGE_PATH.EMPLOYMENT,
        label: 'Company',
        params: { url: urls.EMPLOYMENT },
      },
      {
        name: 'home',
        component: WebScreen,
        imagePath: IMAGE_PATH.ENTERPRISE,
        label: 'Home',
        params: { url: urls.ENTERPRISE },
      },
      {
        name: 'profile',
        component: WebScreen,
        imagePath: IMAGE_PATH.HOME,
        label: 'Profile',
        params: { url: urls.HOME },
      },
    ],
    []
  );

  const bottomTabs = isCorporateView ? corporateTabs : tabs;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      {bottomTabs.map((item) => {
        return (
          <Tab.Screen
            key={item.name}
            {...item}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <TabLabel focused={focused} color={color} label={item.label} />
              ),
              tabBarIcon: ({ focused, color }) => (
                <TabIcon
                  focused={focused}
                  image={item.imagePath}
                  color={color}
                />
              ),
            }}
            initialParams={item.params}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;

function TabIcon({ image, color }) {
  return (
    <Image
      source={image}
      tintColor={color}
      resizeMode={'contain'}
      style={styles.tabIcon}
    />
  );
}

const TabLabel = ({ label, color }) => {
  return <Text style={[{ color: color }, styles.tabLabel]}>{label}</Text>;
};

const styles = StyleSheet.create({
  tabBar: { height: 55 },
  tabIcon: {
    height: 30,
    width: 30,
  },

  tabLabel: {
    fontSize: 12,
    marginBottom: 3,
  },
});
