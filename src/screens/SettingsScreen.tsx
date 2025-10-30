import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { fontStyles } from '@/styles/font';

type BreathingPattern = 'basic' | 'sleep' | 'extended';

interface SettingsState {
  breathingPattern: BreathingPattern;
  volume: number;
  darkMode: boolean;
  hapticFeedback: boolean;
  analyticsOptIn: boolean;
  voiceGuidance: boolean;
  autoPlayAudio: boolean;
}

const breathingPatterns = [
  { id: 'basic', name: 'Basic (4-4)', description: 'Inhale 4s, Exhale 4s' },
  { id: 'sleep', name: '4-7-8 Technique', description: 'Inhale 4s, Hold 7s, Exhale 8s' },
  { id: 'extended', name: 'Extended (6-6)', description: 'Inhale 6s, Exhale 6s' },
];

export const SettingsScreen: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    breathingPattern: 'basic',
    volume: 0.8,
    darkMode: false,
    hapticFeedback: true,
    analyticsOptIn: false,
    voiceGuidance: false,
    autoPlayAudio: true,
  });

  const updateSetting = <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    // TODO: Save to AsyncStorage
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Settings',
      'Are you sure you want to reset all settings to default?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setSettings({
              breathingPattern: 'basic',
              volume: 0.8,
              darkMode: false,
              hapticFeedback: true,
              analyticsOptIn: false,
              voiceGuidance: false,
              autoPlayAudio: true,
            });
          },
        },
      ]
    );
  };

  const handleClearCache = () => {
    Alert.alert(
      'Clear Cache',
      'This will remove downloaded scenes. Bundled scenes will remain.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          onPress: () => {
            // TODO: Implement cache clearing
            Alert.alert('Success', 'Cache cleared successfully');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Settings</Text>

        {/* Breathing Pattern Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Breathing Pattern</Text>
          <Text style={styles.sectionDescription}>
            Choose your preferred breathing rhythm
          </Text>
          
          {breathingPatterns.map((pattern) => (
            <TouchableOpacity
              key={pattern.id}
              style={[
                styles.patternCard,
                settings.breathingPattern === pattern.id && styles.patternCardActive,
              ]}
              onPress={() => updateSetting('breathingPattern', pattern.id as BreathingPattern)}
            >
              <View style={styles.patternHeader}>
                <Text
                  style={[
                    styles.patternName,
                    settings.breathingPattern === pattern.id && styles.patternNameActive,
                  ]}
                >
                  {pattern.name}
                </Text>
                {settings.breathingPattern === pattern.id && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>
              <Text style={styles.patternDescription}>{pattern.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Audio Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Audio</Text>
          
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Auto-play Audio</Text>
              <Text style={styles.settingDescription}>
                Start nature sounds automatically
              </Text>
            </View>
            <Switch
              value={settings.autoPlayAudio}
              onValueChange={(value) => updateSetting('autoPlayAudio', value)}
              trackColor={{ false: '#CBD5E0', true: '#4A90B8' }}
              thumbColor="white"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Voice Guidance</Text>
              <Text style={styles.settingDescription}>
                Spoken breathing instructions
              </Text>
            </View>
            <Switch
              value={settings.voiceGuidance}
              onValueChange={(value) => updateSetting('voiceGuidance', value)}
              trackColor={{ false: '#CBD5E0', true: '#4A90B8' }}
              thumbColor="white"
            />
          </View>

          <View style={styles.volumeContainer}>
            <Text style={styles.settingLabel}>Volume: {Math.round(settings.volume * 100)}%</Text>
            {/* TODO: Add slider component */}
          </View>
        </View>

        {/* Experience Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Dark Mode</Text>
              <Text style={styles.settingDescription}>
                Easier on the eyes at night
              </Text>
            </View>
            <Switch
              value={settings.darkMode}
              onValueChange={(value) => updateSetting('darkMode', value)}
              trackColor={{ false: '#CBD5E0', true: '#4A90B8' }}
              thumbColor="white"
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Haptic Feedback</Text>
              <Text style={styles.settingDescription}>
                Subtle vibrations for feedback
              </Text>
            </View>
            <Switch
              value={settings.hapticFeedback}
              onValueChange={(value) => updateSetting('hapticFeedback', value)}
              trackColor={{ false: '#CBD5E0', true: '#4A90B8' }}
              thumbColor="white"
            />
          </View>
        </View>

        {/* Privacy Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Anonymous Analytics</Text>
              <Text style={styles.settingDescription}>
                Help improve the app with usage data
              </Text>
            </View>
            <Switch
              value={settings.analyticsOptIn}
              onValueChange={(value) => updateSetting('analyticsOptIn', value)}
              trackColor={{ false: '#CBD5E0', true: '#4A90B8' }}
              thumbColor="white"
            />
          </View>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>View Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        {/* Storage & Data */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Storage & Data</Text>
          
          <TouchableOpacity style={styles.actionButton} onPress={handleClearCache}>
            <Text style={styles.actionButtonText}>Clear Downloaded Scenes</Text>
            <Text style={styles.actionButtonDescription}>Free up storage space</Text>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Version</Text>
            <Text style={styles.infoValue}>1.0.0 (Beta)</Text>
          </View>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Open Source Licenses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Rate This App</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Send Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Reset Button */}
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset All Settings</Text>
        </TouchableOpacity>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            CalmWave is not a replacement for professional mental health care. 
            If you're struggling, please reach out to a qualified professional.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    ...fontStyles.titleL,
    fontSize: 32,
    marginBottom: 24,
    color: '#1A202C',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 8,
  },
  sectionDescription: {
    ...fontStyles.bodyM,
    color: '#718096',
    marginBottom: 16,
  },
  patternCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  patternCardActive: {
    borderColor: '#4A90B8',
    backgroundColor: '#EBF8FF',
  },
  patternHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  patternName: {
    ...fontStyles.titleM,
    fontSize: 16,
    color: '#2D3748',
  },
  patternNameActive: {
    color: '#2C5282',
  },
  checkmark: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: '#4A90B8',
  },
  patternDescription: {
    ...fontStyles.bodyM,
    color: '#718096',
    fontSize: 14,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    ...fontStyles.titleM,
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 4,
  },
  settingDescription: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#718096',
  },
  volumeContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  linkButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  linkButtonText: {
    ...fontStyles.bodyM,
    color: '#4A90B8',
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  actionButtonText: {
    ...fontStyles.titleM,
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 4,
  },
  actionButtonDescription: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#718096',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  infoLabel: {
    ...fontStyles.bodyM,
    color: '#718096',
  },
  infoValue: {
    ...fontStyles.bodyM,
    color: '#2D3748',
  },
  resetButton: {
    backgroundColor: '#FED7D7',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  resetButtonText: {
    ...fontStyles.titleM,
    color: '#C53030',
    fontSize: 16,
  },
  disclaimer: {
    backgroundColor: '#FEF5E7',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F39C12',
  },
  disclaimerText: {
    ...fontStyles.bodyM,
    color: '#9A6E0B',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default SettingsScreen;

