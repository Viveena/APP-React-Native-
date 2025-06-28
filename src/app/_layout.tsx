import CustomTabBar from '@/src/components/molecules/customTabBar';
import { MedicationProvider } from '@/src/context/medicationContext';
import { Slot, usePathname } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const pathname = usePathname();

  const isAfterHome = pathname.startsWith('/afterHome');
  const isNestedProfileScreen = pathname.startsWith('/afterHome/profile/');
  const isInsideScreensFolder = pathname.startsWith('/afterHome/Screens/');
  const isStatsModal = pathname === '/afterHome/add'; // ✅ corrected with leading slash

  const shouldShowTabBar =
    isAfterHome &&
    !isNestedProfileScreen &&
    !isInsideScreensFolder &&
    !isStatsModal;

  return (
    <GestureHandlerRootView style={styles.root}>
      <MedicationProvider>
        <Slot />
        {shouldShowTabBar && <CustomTabBar />}
      </MedicationProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
