import React, { useState } from 'react';
import SelectableCardListWithIcons from './selectedCardList_healthhabit';

const habitData = [
  {
    title: 'No Sugar',
    icon: require('@/src/assets/images/height_icon.png'),
    description: 'Cut down added sugar',
    isFavorite: false,
  },
  {
    title: 'Drink Water',
    icon: require('@/src/assets/images/height_icon.png'),
    description: '8 glasses daily',
    isFavorite: true,
  },
];

const HabitCards = () => {
  const [data, setData] = useState(habitData);
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

export default HabitCards;
