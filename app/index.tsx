import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { fontStyles } from '@/styles/font';
import { LinearGradient } from 'expo-linear-gradient';
import GroundingScreen from '@/screens/GroundingScreen';
import CrisisScreen from '@/screens/CrisisScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import CalmWaveScreen from '@/screens/CalmWaveScreen';

type Screen = 'home' | 'calm' | 'grounding' | 'crisis' | 'settings';

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  // Render different screens based on state
  if (currentScreen === 'calm') {
    return (
      <View style={styles.screenContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
        <CalmWaveScreen />
      </View>
    );
  }

  if (currentScreen === 'grounding') {
    return (
      <View style={styles.screenContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
        <GroundingScreen />
      </View>
    );
  }

  if (currentScreen === 'crisis') {
    return (
      <View style={styles.screenContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
        <CrisisScreen />
      </View>
    );
  }

  if (currentScreen === 'settings') {
    return (
      <View style={styles.screenContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
        <SettingsScreen />
      </View>
    );
  }

  // Home screen
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#4A90B8', '#5B8C5A', '#6B7C8C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>🌊</Text>
            </View>
            <Text style={styles.title}>CalmWave</Text>
            <Text style={styles.subtitle}>
              Immediate calm when you need it most
            </Text>
          </View>

          {/* Main Action - Calm Now */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setCurrentScreen('calm')}
            activeOpacity={0.8}
          >
            <View style={styles.primaryButtonContent}>
              <Text style={styles.primaryButtonIcon}>🌊</Text>
              <View>
                <Text style={styles.primaryButtonText}>Calm Now</Text>
                <Text style={styles.primaryButtonSubtext}>
                  Breathing & Relaxation
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Secondary Actions */}
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={[styles.actionCard, styles.actionCardPrimary]}
              onPress={() => setCurrentScreen('grounding')}
              activeOpacity={0.8}
            >
              <View style={styles.actionCardHeader}>
                <Text style={styles.actionIcon}>👁️</Text>
                <Text style={styles.actionTitle}>Grounding</Text>
              </View>
              <Text style={styles.actionDescription}>
                5-4-3-2-1 sensory exercise to anchor you in the present moment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionCard, styles.actionCardEmergency]}
              onPress={() => setCurrentScreen('crisis')}
              activeOpacity={0.8}
            >
              <View style={styles.actionCardHeader}>
                <Text style={styles.actionIcon}>🆘</Text>
                <Text style={styles.actionTitle}>Crisis Help</Text>
              </View>
              <Text style={styles.actionDescription}>
                Emergency resources and hotlines available 24/7
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionCard, styles.actionCardSecondary]}
              onPress={() => setCurrentScreen('settings')}
              activeOpacity={0.8}
            >
              <View style={styles.actionCardHeader}>
                <Text style={styles.actionIcon}>⚙️</Text>
                <Text style={styles.actionTitle}>Settings</Text>
              </View>
              <Text style={styles.actionDescription}>
                Customize breathing patterns and preferences
              </Text>
            </TouchableOpacity>

            <View style={[styles.actionCard, styles.actionCardDisabled]}>
              <View style={styles.actionCardHeader}>
                <Text style={styles.actionIcon}>📚</Text>
                <Text style={styles.actionTitle}>Learn</Text>
              </View>
              <Text style={styles.actionDescription}>
                Understanding anxiety • Coming soon
              </Text>
            </View>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>💙 You're not alone</Text>
            <Text style={styles.infoText}>
              This app provides evidence-based techniques to help during moments
              of anxiety or panic. All core features work offline, so help is
              always available when you need it.
            </Text>
            <View style={styles.infoFooter}>
              <Text style={styles.infoNote}>
                ⚕️ Not a replacement for professional care
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90B8',
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  backButtonText: {
    ...fontStyles.titleM,
    fontSize: 16,
    color: '#2D3748',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    fontSize: 48,
  },
  title: {
    ...fontStyles.titleL,
    fontSize: 42,
    color: 'white',
    marginBottom: 8,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    ...fontStyles.bodyM,
    fontSize: 17,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButtonIcon: {
    fontSize: 48,
    marginRight: 20,
  },
  primaryButtonText: {
    ...fontStyles.titleL,
    fontSize: 28,
    color: '#2D3748',
    marginBottom: 4,
  },
  primaryButtonSubtext: {
    ...fontStyles.bodyM,
    fontSize: 15,
    color: '#718096',
  },
  actionsGrid: {
    marginBottom: 28,
  },
  actionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  actionCardPrimary: {
    borderLeftWidth: 4,
    borderLeftColor: '#4A90B8',
  },
  actionCardEmergency: {
    borderLeftWidth: 4,
    borderLeftColor: '#E53E3E',
  },
  actionCardSecondary: {
    borderLeftWidth: 4,
    borderLeftColor: '#718096',
  },
  actionCardDisabled: {
    opacity: 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  actionCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  actionTitle: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: '#2D3748',
  },
  actionDescription: {
    ...fontStyles.bodyM,
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
  infoSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoTitle: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: '#2D3748',
    marginBottom: 12,
  },
  infoText: {
    ...fontStyles.bodyM,
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 24,
    marginBottom: 16,
  },
  infoFooter: {
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 12,
  },
  infoNote: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#718096',
    fontStyle: 'italic',
  },
});