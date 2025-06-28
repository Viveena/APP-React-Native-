
import { habitData } from '@/src/constants/habitData';
import React from 'react';
import { FlatList } from 'react-native';
import StatCard from '../molecules/statCard';

const HabitStatsList = () => {
  return (
    <FlatList
      data={habitData}
      horizontal
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <StatCard
          icon={item.icon}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          backgroundColor={item.backgroundColor}
          image={item.image}
        />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 8 }}
    />
  );
};

export default HabitStatsList;
