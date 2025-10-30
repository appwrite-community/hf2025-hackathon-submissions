import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import { fontStyles } from '@/styles/font';

interface GroundingStep {
  step: number;
  instruction: string;
  example: string;
}

const groundingSteps: GroundingStep[] = [
  {
    step: 5,
    instruction: 'Notice 5 things you can see around you',
    example: 'A picture on the wall, the color of your shirt, light from a window, a plant, the floor',
  },
  {
    step: 4,
    instruction: 'Notice 4 things you can touch',
    example: "The texture of your chair, your phone's surface, the temperature of the air, your clothing",
  },
  {
    step: 3,
    instruction: 'Notice 3 things you can hear',
    example: 'Traffic outside, the hum of appliances, your own breathing',
  },
  {
    step: 2,
    instruction: 'Notice 2 things you can smell',
    example: 'Coffee, fresh air, or just the air around you',
  },
  {
    step: 1,
    instruction: 'Notice 1 thing you can taste',
    example: 'The lingering taste of something you drank, or just notice your mouth',
  },
];

export const GroundingScreen: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isActive) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isActive, currentStepIndex]);

  const startExercise = () => {
    setIsActive(true);
    setCurrentStepIndex(0);
  };

  const nextStep = () => {
    if (currentStepIndex < groundingSteps.length - 1) {
      fadeAnim.setValue(0);
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      completeExercise();
    }
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      fadeAnim.setValue(0);
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const completeExercise = () => {
    setIsActive(false);
    setCurrentStepIndex(0);
  };

  const resetExercise = () => {
    setIsActive(false);
    setCurrentStepIndex(0);
  };

  if (!isActive) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>5-4-3-2-1 Grounding Exercise</Text>
          
          <Text style={styles.description}>
            This technique helps anchor you in the present moment by engaging your five senses.
            It's especially helpful during anxiety or panic attacks.
          </Text>

          <View style={styles.stepsPreview}>
            {groundingSteps.map((step) => (
              <View key={step.step} style={styles.previewCard}>
                <View style={styles.stepCircle}>
                  <Text style={styles.stepNumber}>{step.step}</Text>
                </View>
                <Text style={styles.previewText}>{step.instruction}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.startButton} onPress={startExercise}>
            <Text style={styles.startButtonText}>Start Exercise</Text>
          </TouchableOpacity>

          <Text style={styles.tipText}>
            💡 Tip: Take your time with each step. There's no rush.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const currentStep = groundingSteps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / groundingSteps.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exerciseContainer}>
        {/* Progress bar */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        {/* Current step */}
        <Animated.View style={[styles.stepContent, { opacity: fadeAnim }]}>
          <View style={styles.stepCircleLarge}>
            <Text style={styles.stepNumberLarge}>{currentStep.step}</Text>
          </View>

          <Text style={styles.instructionText}>{currentStep.instruction}</Text>

          <View style={styles.exampleBox}>
            <Text style={styles.exampleLabel}>Examples:</Text>
            <Text style={styles.exampleText}>{currentStep.example}</Text>
          </View>

          <Text style={styles.reminderText}>
            Take your time. Breathe slowly. Notice what's around you.
          </Text>
        </Animated.View>

        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          {currentStepIndex > 0 && (
            <TouchableOpacity
              style={styles.navButton}
              onPress={previousStep}
            >
              <Text style={styles.navButtonText}>← Previous</Text>
            </TouchableOpacity>
          )}

          {currentStepIndex < groundingSteps.length - 1 ? (
            <TouchableOpacity
              style={[styles.navButton, styles.primaryButton]}
              onPress={nextStep}
            >
              <Text style={[styles.navButtonText, styles.primaryButtonText]}>
                Next →
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.navButton, styles.completeButton]}
              onPress={completeExercise}
            >
              <Text style={[styles.navButtonText, styles.primaryButtonText]}>
                Complete ✓
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.resetButton} onPress={resetExercise}>
          <Text style={styles.resetButtonText}>Exit Exercise</Text>
        </TouchableOpacity>
      </View>
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
  },
  title: {
    ...fontStyles.titleL,
    fontSize: 28,
    marginBottom: 16,
    color: '#1A202C',
    textAlign: 'center',
  },
  description: {
    ...fontStyles.bodyM,
    fontSize: 16,
    lineHeight: 24,
    color: '#4A5568',
    marginBottom: 24,
    textAlign: 'center',
  },
  stepsPreview: {
    marginBottom: 32,
  },
  previewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90B8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumber: {
    ...fontStyles.titleM,
    color: 'white',
    fontSize: 20,
  },
  previewText: {
    ...fontStyles.bodyM,
    flex: 1,
    color: '#2D3748',
  },
  startButton: {
    backgroundColor: '#4A90B8',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  startButtonText: {
    ...fontStyles.titleM,
    color: 'white',
    fontSize: 18,
  },
  tipText: {
    ...fontStyles.bodyM,
    textAlign: 'center',
    color: '#718096',
    fontStyle: 'italic',
  },
  exerciseContainer: {
    flex: 1,
    padding: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    marginBottom: 32,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90B8',
    borderRadius: 2,
  },
  stepContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4A90B8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  stepNumberLarge: {
    ...fontStyles.titleL,
    color: 'white',
    fontSize: 40,
  },
  instructionText: {
    ...fontStyles.titleM,
    fontSize: 24,
    color: '#1A202C',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  exampleBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  exampleLabel: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  exampleText: {
    ...fontStyles.bodyM,
    fontSize: 16,
    color: '#2D3748',
    lineHeight: 24,
  },
  reminderText: {
    ...fontStyles.bodyM,
    color: '#718096',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 16,
  },
  navButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 4,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4A90B8',
  },
  completeButton: {
    backgroundColor: '#48BB78',
  },
  navButtonText: {
    ...fontStyles.titleM,
    color: '#2D3748',
    fontSize: 16,
  },
  primaryButtonText: {
    color: 'white',
  },
  resetButton: {
    padding: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    ...fontStyles.bodyM,
    color: '#718096',
  },
});

export default GroundingScreen;
