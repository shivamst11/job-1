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
        name: 'recruitment',
        component: WebScreen,
        imagePath: IMAGE_PATH.EMPLOYMENT,
        label: '채용',
        params: { url: urls.EMPLOYMENT },
      },
      {
        name: 'company',
        component: WebScreen,
        imagePath: IMAGE_PATH.ENTERPRISE,
        label: '기업',
        params: { url: urls.ENTERPRISE },
      },
      {
        name: 'home',
        component: WebScreen,
        imagePath: IMAGE_PATH.HOME,
        label: '홈',
        params: { url: urls.HOME },
      },
      {
        name: 'scouter',
        component: WebScreen,
        imagePath: IMAGE_PATH.SCOUT,
        label: '스카우터',
        params: { url: urls.SCOUT },
      },
      {
        name: 'enterprise',
        component: WebScreen,
        imagePath: IMAGE_PATH.CORPORATE,
        label: '기업서비스',
        params: { url: urls.PROFILE },
      },
    ],
    []
  );

  const corporateTabs = useMemo(
    () => [
      {
        name: 'corporate',
        component: WebScreen,
        imagePath: IMAGE_PATH.CORPORATE,
        label: '기업서비스',
        params: { url: urls.CORPORATE },
      },
      {
        name: 'home',
        component: WebScreen,
        imagePath: IMAGE_PATH.HOME,
        label: '스카우트 홈',
        params: { url: urls.HOME },
      },
      {
        name: 'company_profile',
        component: WebScreen,
        imagePath: IMAGE_PATH.PROFILE,
        label: '마이페이지',
        params: { url: urls.EPROFILE },
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
