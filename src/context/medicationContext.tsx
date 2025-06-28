// src/context/medicationContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

type Medication = {
  title: string;
  description?: string;
};

type MedicationContextType = {
  medications: Medication[];
  addMedication: (med: Medication) => void;
  removeMedication: (title: string) => void;
};

const MedicationContext = createContext<MedicationContextType | undefined>(undefined);

export const MedicationProvider = ({ children }: { children: ReactNode }) => {
  const [medications, setMedications] = useState<Medication[]>([]);

  const addMedication = (med: Medication) => {
    setMedications((prev) => [...prev, med]);
  };

  const removeMedication = (title: string) => {
    setMedications((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <MedicationContext.Provider value={{ medications, addMedication, removeMedication }}>
      {children}
    </MedicationContext.Provider>
  );
};

export const useMedication = () => {
  const context = useContext(MedicationContext);
  if (!context) throw new Error('useMedication must be used inside MedicationProvider');
  return context;
};
