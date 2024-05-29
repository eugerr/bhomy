import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import { useColorScheme } from 'nativewind';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
    </Tabs>
  );
}

//  headerRight: () => (
//           <Link href='/modal' asChild>
//             <Pressable>
//               {({ pressed }) => (
//                 <FontAwesome
//                   name='info-circle'
//                   size={25}
//                   // color={colorScheme === 'dark' ? 'white' : 'black'}
//                   style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                 />
//               )}
//             </Pressable>
//           </Link>
//         ),
