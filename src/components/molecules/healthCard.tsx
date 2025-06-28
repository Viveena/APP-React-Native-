import React, { useState } from 'react';
import SelectableCardListWithIcons from './selectedCardList_healthhabit';

const healthData = [
  {
    title: 'Blood Pressure',
    icon: require('@/src/assets/images/height_icon.png'),
    description: 'Monitor regularly',
    isFavorite: false,
  },
  {
    title: 'Cholesterol',
    icon: require('@/src/assets/images/height_icon.png'),
    description: 'Check quarterly',
    isFavorite: true,
  },
];

const HealthCards = () => {
  const [data, setData] = useState(healthData);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleFavorite = (title: string) => {
    const updated = data.map((item) =>
      item.title === title ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setData(updated);
  };

  const handleDelete = (title: string) => {
    const filtered = data.filter((item) => item.title !== title);
    setData(filtered);
  };

  return (
    <SelectableCardListWithIcons
      data={data}
      selectedItem={selected}
      onSelect={(title) => setSelected(title)}
      onToggleFavorite={toggleFavorite}
      onDelete={handleDelete}
    />
  );
};

export default HealthCards;
