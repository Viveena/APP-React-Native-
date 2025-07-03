import { BackgroundImage } from '@/src/constants/backgroundImage';
import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';

export const usePreloadAssets = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await Asset.loadAsync([
          BackgroundImage.bg_image_green,
          BackgroundImage.bg_image_white,
          BackgroundImage.home_bg,
          BackgroundImage.profileOptions_bg,
          BackgroundImage.profile_bg,
          BackgroundImage.splash_logo
        ]);
        setReady(true);
      } catch (error) {
        console.warn('Error loading assets:', error);
        setReady(true); // Still let app continue
      }
    };

    loadAssets();
  }, []);

  return ready;
};
