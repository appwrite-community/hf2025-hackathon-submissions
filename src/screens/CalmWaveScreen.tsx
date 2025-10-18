import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';

// Breathing patterns
const breathingPatterns = {
	basic: { inhale: 4, hold: 0, exhale: 4, description: 'Basic calming breath' },
	sleep: { inhale: 4, hold: 7, exhale: 8, description: '4-7-8 sleep technique' },
	extended: { inhale: 6, hold: 0, exhale: 6, description: 'Extended breathing' },
};

// Scenes
const scenes = {
	ocean: { name: 'Ocean Waves', color: '#4A90B8', description: 'Gentle ocean waves' },
	forest: { name: 'Forest Sounds', color: '#5B8C5A', description: 'Peaceful forest sounds' },
	rain: { name: 'Gentle Rain', color: '#6B7C8C', description: 'Soft rainfall' },
	mountain: { name: 'Mountain Breeze', color: '#8B9B7A', description: 'Mountain wind sounds' },
};

// Grounding steps
const groundingSteps = [
	{ step: 5, instruction: 'Notice 5 things you can see around you', example: 'A picture on the wall, the color of your shirt, light from a window' },
	{ step: 4, instruction: 'Notice 4 things you can touch', example: "The texture of your chair, your phone's surface, the temperature of the air" },
	{ step: 3, instruction: 'Notice 3 things you can hear', example: 'Traffic outside, the hum of appliances, your own breathing' },
	{ step: 2, instruction: 'Notice 2 things you can smell', example: 'Coffee, fresh air, or just the air around you' },
	{ step: 1, instruction: 'Notice 1 thing you can taste', example: 'The lingering taste of something you drank, or just your mouth' },
];

const CalmWaveScreen: React.FC = () => {
	const [currentScreen, setCurrentScreen] = useState<'home'|'breathing'|'grounding'|'education'|'crisis'|'settings'>('home');
	const [currentScene, setCurrentScene] = useState<'ocean'|'forest'|'rain'|'mountain'>('ocean');
	const [breathingActive, setBreathingActive] = useState(false);
	const [breathingPattern, setBreathingPattern] = useState<'basic'|'sleep'|'extended'>('basic');
	const [groundingStep, setGroundingStep] = useState(0);
	const [groundingActive, setGroundingActive] = useState(false);

	// Breathing cycle logic
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (breathingActive) {
			const pattern = breathingPatterns[breathingPattern];
			timer = setTimeout(() => {
				// Cycle logic here (simplified)
			}, (pattern.inhale + pattern.hold + pattern.exhale) * 1000);
		}
		return () => clearTimeout(timer);
	}, [breathingActive, breathingPattern]);

	// Grounding step logic
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (groundingActive && groundingStep < groundingSteps.length) {
			timer = setTimeout(() => {
				setGroundingStep(groundingStep + 1);
			}, 8000);
		} else if (groundingActive && groundingStep >= groundingSteps.length) {
			Alert.alert('Great job!', "You've completed the 5-4-3-2-1 grounding exercise.");
			setGroundingActive(false);
			setGroundingStep(0);
		}
		return () => clearTimeout(timer);
	}, [groundingActive, groundingStep]);

	// Screen navigation
	const showScreen = (screen: typeof currentScreen) => {
		setCurrentScreen(screen);
		if (screen === 'breathing') setBreathingActive(true);
		else setBreathingActive(false);
	};

	// Scene change
	const changeScene = (scene: typeof currentScene) => {
		setCurrentScene(scene);
	};

	// Grounding controls
	const startGrounding = () => {
		setGroundingActive(true);
		setGroundingStep(0);
	};
	const resetGrounding = () => {
		setGroundingActive(false);
		setGroundingStep(0);
	};

	return (
		<View style={{ flex: 1, padding: 24 }}>
			{currentScreen === 'home' && (
				<View>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>CalmWave</Text>
					<Button title="Calm Now" onPress={() => showScreen('breathing')} />
					<Button title="Grounding" onPress={() => showScreen('grounding')} />
					<Button title="Education" onPress={() => showScreen('education')} />
					<Button title="Crisis" onPress={() => showScreen('crisis')} />
					<Button title="Settings" onPress={() => showScreen('settings')} />
				</View>
			)}
			{currentScreen === 'breathing' && (
				<View>
					<Text style={{ fontSize: 20 }}>Breathing Exercise</Text>
					<Text>{breathingPatterns[breathingPattern].description}</Text>
					<Button title="Back" onPress={() => showScreen('home')} />
				</View>
			)}
			{currentScreen === 'grounding' && (
				<View>
					<Text style={{ fontSize: 20 }}>Grounding Exercise</Text>
					{groundingActive ? (
						<View>
							<Text>{groundingSteps[groundingStep]?.instruction}</Text>
							<Text>Example: {groundingSteps[groundingStep]?.example}</Text>
							<Button title="Reset" onPress={resetGrounding} />
						</View>
					) : (
						<Button title="Start Grounding" onPress={startGrounding} />
					)}
					<Button title="Back" onPress={() => showScreen('home')} />
				</View>
			)}
			{/* Add other screens as needed */}
		</View>
	);
};

export default CalmWaveScreen;
