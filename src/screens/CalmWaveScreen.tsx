import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fontStyles } from '@/styles/font';

// Breathing patterns
type BreathingPattern = 'basic' | 'sleep' | 'extended';

const breathingPatterns = {
  basic: { inhale: 4, hold: 0, exhale: 4, description: 'Basic 4-4 breath' },
  sleep: { inhale: 4, hold: 7, exhale: 8, description: '4-7-8 sleep technique' },
  extended: { inhale: 6, hold: 0, exhale: 6, description: 'Extended 6-6 breath' },
};

// Scenes with colors
type SceneType = 'ocean' | 'forest' | 'rain' | 'mountain';

const scenes = {
  ocean: { name: 'Ocean Waves', colors: ['#4A90B8', '#5BA3C8'], icon: '🌊' },
  forest: { name: 'Forest Sounds', colors: ['#5B8C5A', '#6B9C6A'], icon: '🌲' },
  rain: { name: 'Gentle Rain', colors: ['#6B7C8C', '#7B8C9C'], icon: '🌧️' },
  mountain: { name: 'Mountain Breeze', colors: ['#8B9B7A', '#9BAB8A'], icon: '⛰️' },
};

const CalmWaveScreen: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<SceneType>('ocean');
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPattern, setBreathingPattern] = useState<BreathingPattern>('basic');
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [countdown, setCountdown] = useState(4);
  const [showSceneSelector, setShowSceneSelector] = useState(false);
  
  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.3)).current;

  // Breathing cycle logic
  useEffect(() => {
    if (!breathingActive) return;

    const pattern = breathingPatterns[breathingPattern];
    let currentCount = countdown;
    
    const interval = setInterval(() => {
      currentCount -= 1;
      setCountdown(currentCount);

      if (currentCount <= 0) {
        // Move to next phase
        if (breathPhase === 'inhale') {
          if (pattern.hold > 0) {
            setBreathPhase('hold');
            setCountdown(pattern.hold);
          } else {
            setBreathPhase('exhale');
            setCountdown(pattern.exhale);
          }
        } else if (breathPhase === 'hold') {
          setBreathPhase('exhale');
          setCountdown(pattern.exhale);
        } else {
          setBreathPhase('inhale');
          setCountdown(pattern.inhale);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [breathingActive, breathPhase, countdown, breathingPattern]);

  // Wave animation based on breathing phase
  useEffect(() => {
    if (!breathingActive) {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.3,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
      return;
    }

    const pattern = breathingPatterns[breathingPattern];
    const duration = breathPhase === 'inhale' ? pattern.inhale * 1000 : 
                     breathPhase === 'hold' ? pattern.hold * 1000 : 
                     pattern.exhale * 1000;

    if (breathPhase === 'inhale') {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.8,
          duration,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (breathPhase === 'hold') {
      // Keep current scale
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.3,
          duration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [breathPhase, breathingActive]);

  const startBreathing = () => {
    setBreathingActive(true);
    setBreathPhase('inhale');
    setCountdown(breathingPatterns[breathingPattern].inhale);
  };

  const stopBreathing = () => {
    setBreathingActive(false);
    setBreathPhase('inhale');
    setCountdown(4);
  };

  const changeScene = (scene: SceneType) => {
    setCurrentScene(scene);
    setShowSceneSelector(false);
  };

  const scene = scenes[currentScene];
  const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={scene.colors} style={styles.gradient}>
        {/* Header with scene selector */}
        <View style={styles.header}>
          <Text style={styles.sceneTitle}>{scene.icon} {scene.name}</Text>
          <TouchableOpacity
            style={styles.changeSceneButton}
            onPress={() => setShowSceneSelector(!showSceneSelector)}
          >
            <Text style={styles.changeSceneText}>Change Scene</Text>
          </TouchableOpacity>
        </View>

        {/* Scene Selector Overlay */}
        {showSceneSelector && (
          <View style={styles.sceneSelector}>
            <Text style={styles.sceneSelectorTitle}>Choose a Scene</Text>
            <View style={styles.sceneGrid}>
              {(Object.keys(scenes) as SceneType[]).map((sceneKey) => (
                <TouchableOpacity
                  key={sceneKey}
                  style={[
                    styles.sceneCard,
                    currentScene === sceneKey && styles.sceneCardActive,
                  ]}
                  onPress={() => changeScene(sceneKey)}
                >
                  <Text style={styles.sceneIcon}>{scenes[sceneKey].icon}</Text>
                  <Text style={styles.sceneName}>{scenes[sceneKey].name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Main breathing area */}
        <View style={styles.breathingArea}>
          {/* Animated Wave Circle */}
          <Animated.View
            style={[
              styles.waveCircle,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          />

          {/* Breathing instruction */}
          <View style={styles.instructionContainer}>
            {breathingActive ? (
              <>
                <Text style={styles.phaseText}>
                  {breathPhase === 'inhale' ? 'Breathe In' : 
                   breathPhase === 'hold' ? 'Hold' : 'Breathe Out'}
                </Text>
                <Text style={styles.countdownText}>{countdown}</Text>
              </>
            ) : (
              <>
                <Text style={styles.readyText}>Ready to begin?</Text>
                <Text style={styles.patternText}>
                  {breathingPatterns[breathingPattern].description}
                </Text>
              </>
            )}
          </View>
        </View>

        {/* Controls */}
        <View style={styles.controls}>
          {/* Start/Stop Button */}
          {!breathingActive ? (
            <TouchableOpacity style={styles.startButton} onPress={startBreathing}>
              <Text style={styles.startButtonText}>Start Breathing</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.stopButton} onPress={stopBreathing}>
              <Text style={styles.stopButtonText}>Stop</Text>
            </TouchableOpacity>
          )}

          {/* Pattern selector */}
          {!breathingActive && (
            <View style={styles.patternSelector}>
              <Text style={styles.patternLabel}>Breathing Pattern:</Text>
              <View style={styles.patternButtons}>
                {(Object.keys(breathingPatterns) as BreathingPattern[]).map((pattern) => (
                  <TouchableOpacity
                    key={pattern}
                    style={[
                      styles.patternButton,
                      breathingPattern === pattern && styles.patternButtonActive,
                    ]}
                    onPress={() => setBreathingPattern(pattern)}
                  >
                    <Text
                      style={[
                        styles.patternButtonText,
                        breathingPattern === pattern && styles.patternButtonTextActive,
                      ]}
                    >
                      {pattern === 'basic' ? '4-4' : pattern === 'sleep' ? '4-7-8' : '6-6'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  sceneTitle: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: 'white',
  },
  changeSceneButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  changeSceneText: {
    ...fontStyles.bodyM,
    color: 'white',
    fontSize: 14,
  },
  sceneSelector: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  sceneSelectorTitle: {
    ...fontStyles.titleM,
    fontSize: 18,
    color: '#2D3748',
    marginBottom: 16,
  },
  sceneGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sceneCard: {
    width: '48%',
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  sceneCardActive: {
    borderColor: '#4A90B8',
    backgroundColor: '#EBF8FF',
  },
  sceneIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  sceneName: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#2D3748',
    textAlign: 'center',
  },
  breathingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  waveCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  instructionContainer: {
    alignItems: 'center',
    zIndex: 1,
  },
  phaseText: {
    ...fontStyles.titleL,
    fontSize: 32,
    color: 'white',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  countdownText: {
    ...fontStyles.titleL,
    fontSize: 72,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  readyText: {
    ...fontStyles.titleM,
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  patternText: {
    ...fontStyles.bodyM,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  controls: {
    padding: 20,
    paddingBottom: 40,
  },
  startButton: {
    backgroundColor: 'white',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  startButtonText: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: '#2D3748',
  },
  stopButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  stopButtonText: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: 'white',
  },
  patternSelector: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
  },
  patternLabel: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: 'white',
    marginBottom: 12,
  },
  patternButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  patternButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  patternButtonActive: {
    backgroundColor: 'white',
  },
  patternButtonText: {
    ...fontStyles.bodyM,
    fontSize: 16,
    color: 'white',
  },
  patternButtonTextActive: {
    color: '#2D3748',
    fontWeight: 'bold',
  },
});

export default CalmWaveScreen;
