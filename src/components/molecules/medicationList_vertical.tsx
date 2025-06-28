import MedicationCard from '@/src/components/molecules/medicationCard';
import medicationData from '@/src/constants/medicationData';
import React from 'react';
import { FlatList, View } from 'react-native';

const MedicationListVertical = () => {
  return (
    <FlatList
      data={medicationData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <MedicationCard name={item.name} dose={item.dose} time={item.time} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
    />
  );
};

export default MedicationListVertical;
