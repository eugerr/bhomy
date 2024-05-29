import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Switch } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className='flex-1 items-center justify-center h-screen'>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Text>Toggle theme</Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      <StatusBar style='auto' />
    </View>
  );
}
