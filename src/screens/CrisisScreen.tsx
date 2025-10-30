import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import { fontStyles } from '@/styles/font';

interface CrisisResource {
  id: string;
  name: string;
  country: string;
  phone: string;
  sms?: string;
  url?: string;
  description: string;
  available: string;
}

const crisisResources: CrisisResource[] = [
  {
    id: 'us-988',
    name: '988 Suicide & Crisis Lifeline',
    country: 'United States',
    phone: '988',
    sms: '988',
    url: 'https://988lifeline.org',
    description: 'Free and confidential support for people in distress',
    available: '24/7',
  },
  {
    id: 'us-crisis-text',
    name: 'Crisis Text Line',
    country: 'United States',
    phone: '',
    sms: '741741',
    url: 'https://crisistextline.org',
    description: 'Text HOME to connect with a Crisis Counselor',
    available: '24/7',
  },
  {
    id: 'us-nami',
    name: 'NAMI Helpline',
    country: 'United States',
    phone: '1-800-950-6264',
    url: 'https://nami.org',
    description: 'Information, support, and resources for mental health',
    available: 'Mon-Fri 10am-10pm ET',
  },
  {
    id: 'uk-samaritans',
    name: 'Samaritans',
    country: 'United Kingdom',
    phone: '116 123',
    url: 'https://samaritans.org',
    description: 'Confidential emotional support',
    available: '24/7',
  },
  {
    id: 'ca-crisis',
    name: 'Crisis Services Canada',
    country: 'Canada',
    phone: '1-833-456-4566',
    sms: '45645',
    url: 'https://crisisservicescanada.ca',
    description: 'Support for those affected by suicide',
    available: '24/7',
  },
  {
    id: 'au-lifeline',
    name: 'Lifeline',
    country: 'Australia',
    phone: '13 11 14',
    url: 'https://lifeline.org.au',
    description: 'Crisis support and suicide prevention',
    available: '24/7',
  },
];

const CrisisResourceCard: React.FC<{ resource: CrisisResource }> = ({ resource }) => {
  const handleCall = () => {
    if (resource.phone) {
      const phoneUrl = `tel:${resource.phone.replace(/\s/g, '')}`;
      Linking.canOpenURL(phoneUrl).then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          Alert.alert('Error', 'Unable to make phone calls on this device');
        }
      });
    }
  };

  const handleSMS = () => {
    if (resource.sms) {
      const smsUrl = Platform.OS === 'ios' 
        ? `sms:${resource.sms}` 
        : `sms:${resource.sms}?body=HOME`;
      Linking.openURL(smsUrl);
    }
  };

  const handleWebsite = () => {
    if (resource.url) {
      Linking.openURL(resource.url);
    }
  };

  return (
    <View style={styles.resourceCard}>
      <View style={styles.resourceHeader}>
        <Text style={styles.resourceName}>{resource.name}</Text>
        <Text style={styles.resourceCountry}>{resource.country}</Text>
      </View>

      <Text style={styles.resourceDescription}>{resource.description}</Text>
      <Text style={styles.resourceAvailable}>Available: {resource.available}</Text>

      <View style={styles.buttonGroup}>
        {resource.phone && (
          <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
            <Text style={styles.actionButtonText}>📞 Call</Text>
            <Text style={styles.actionButtonDetail}>{resource.phone}</Text>
          </TouchableOpacity>
        )}

        {resource.sms && (
          <TouchableOpacity style={styles.actionButton} onPress={handleSMS}>
            <Text style={styles.actionButtonText}>💬 Text</Text>
            <Text style={styles.actionButtonDetail}>{resource.sms}</Text>
          </TouchableOpacity>
        )}

        {resource.url && (
          <TouchableOpacity 
            style={[styles.actionButton, styles.websiteButton]} 
            onPress={handleWebsite}
          >
            <Text style={styles.actionButtonText}>🌐 Website</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const CrisisScreen: React.FC = () => {
  const handleEmergency = () => {
    Alert.alert(
      'Emergency Services',
      'Call emergency services (911 in US, 999 in UK, 000 in AU)?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          style: 'destructive',
          onPress: () => {
            const emergencyNumber = '911'; // TODO: Detect country
            Linking.openURL(`tel:${emergencyNumber}`);
          },
        },
      ]
    );
  };

  const handleFindHelpline = () => {
    Linking.openURL('https://findahelpline.com/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Emergency Warning */}
        <View style={styles.emergencyBanner}>
          <Text style={styles.emergencyTitle}>⚠️ If you're in immediate danger</Text>
          <Text style={styles.emergencyText}>
            Call emergency services (911, 999, 000) or go to your nearest emergency room.
          </Text>
          <TouchableOpacity style={styles.emergencyButton} onPress={handleEmergency}>
            <Text style={styles.emergencyButtonText}>🚨 Call Emergency Services</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <Text style={styles.title}>Crisis Resources</Text>
        <Text style={styles.subtitle}>
          You're not alone. These free, confidential resources are available to help.
        </Text>

        {/* Resources List */}
        {crisisResources.map((resource) => (
          <CrisisResourceCard key={resource.id} resource={resource} />
        ))}

        {/* International Resources */}
        <View style={styles.internationalSection}>
          <Text style={styles.sectionTitle}>International Resources</Text>
          <Text style={styles.sectionText}>
            For crisis helplines in other countries, visit:
          </Text>
          <TouchableOpacity style={styles.linkButton} onPress={handleFindHelpline}>
            <Text style={styles.linkButtonText}>🌍 Find a Helpline</Text>
          </TouchableOpacity>
        </View>

        {/* Important Note */}
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerTitle}>Important Note</Text>
          <Text style={styles.disclaimerText}>
            This app is not a substitute for professional mental health care. If you're 
            experiencing ongoing mental health challenges, please reach out to a qualified 
            mental health professional.
          </Text>
        </View>

        {/* Self-Care Reminder */}
        <View style={styles.reminderBox}>
          <Text style={styles.reminderTitle}>💙 You matter</Text>
          <Text style={styles.reminderText}>
            Your feelings are valid. Reaching out for help is a sign of strength, not weakness. 
            There are people who care and want to help you through this.
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
  },
  emergencyBanner: {
    backgroundColor: '#FED7D7',
    borderColor: '#FC8181',
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  emergencyTitle: {
    ...fontStyles.titleM,
    fontSize: 18,
    color: '#742A2A',
    marginBottom: 8,
  },
  emergencyText: {
    ...fontStyles.bodyM,
    color: '#742A2A',
    marginBottom: 16,
    lineHeight: 22,
  },
  emergencyButton: {
    backgroundColor: '#E53E3E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  emergencyButtonText: {
    ...fontStyles.titleM,
    color: 'white',
    fontSize: 16,
  },
  title: {
    ...fontStyles.titleL,
    fontSize: 28,
    marginBottom: 8,
    color: '#1A202C',
  },
  subtitle: {
    ...fontStyles.bodyM,
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 24,
    lineHeight: 24,
  },
  resourceCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resourceHeader: {
    marginBottom: 12,
  },
  resourceName: {
    ...fontStyles.titleM,
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 4,
  },
  resourceCountry: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#718096',
  },
  resourceDescription: {
    ...fontStyles.bodyM,
    color: '#2D3748',
    marginBottom: 8,
    lineHeight: 22,
  },
  resourceAvailable: {
    ...fontStyles.bodyM,
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionButton: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#4A90B8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  websiteButton: {
    backgroundColor: '#718096',
  },
  actionButtonText: {
    ...fontStyles.titleM,
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
  },
  actionButtonDetail: {
    ...fontStyles.bodyM,
    color: 'white',
    fontSize: 12,
  },
  internationalSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    ...fontStyles.titleM,
    fontSize: 18,
    color: '#1A202C',
    marginBottom: 8,
  },
  sectionText: {
    ...fontStyles.bodyM,
    color: '#4A5568',
    marginBottom: 12,
  },
  linkButton: {
    backgroundColor: '#4A90B8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: {
    ...fontStyles.titleM,
    color: 'white',
  },
  disclaimerBox: {
    backgroundColor: '#FEF5E7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F39C12',
  },
  disclaimerTitle: {
    ...fontStyles.titleM,
    fontSize: 16,
    color: '#9A6E0B',
    marginBottom: 8,
  },
  disclaimerText: {
    ...fontStyles.bodyM,
    color: '#9A6E0B',
    lineHeight: 22,
  },
  reminderBox: {
    backgroundColor: '#E6F7FF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#4A90B8',
  },
  reminderTitle: {
    ...fontStyles.titleM,
    fontSize: 18,
    color: '#1A5276',
    marginBottom: 8,
  },
  reminderText: {
    ...fontStyles.bodyM,
    color: '#1A5276',
    lineHeight: 22,
  },
});

export default CrisisScreen;
