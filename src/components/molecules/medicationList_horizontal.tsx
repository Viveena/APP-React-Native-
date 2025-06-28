// src/components/molecules/MedicationListHorizontal.tsx

import medicationData from '@/src/constants/medicationData'; // ✅ No curly braces
import React from 'react';
import { FlatList, View } from 'react-native';
import MedicationCardHome from './medicationCard_home';

const MedicationListHorizontal = () => {
  // Flatten the meds to a single-level array
  const flatMeds = medicationData.flatMap(item =>
    item.meds.map(med => ({
      name: med.name,
      dose: med.dose,
    }))
  );

  return (
    <FlatList
      data={flatMeds}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <MedicationCardHome name={item.name} dose={item.dose} />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
    />
  );
};

export default MedicationListHorizontal;
