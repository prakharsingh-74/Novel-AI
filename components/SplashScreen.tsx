import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedReanimated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat,
  withSequence,
  Easing 
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const COLORS = {
  backgroundStart: '#f8f4ff',
  backgroundEnd: '#ffffff',
  logoPurple: '#9c27b0',
  logoBlue: '#2196f3',
  badgeBlue: '#2196f3',
  badgeOrange: '#ff9800',
  badgePink: '#f06292',
  textGray: '#757575',
  pillsBg: '#f5f0ff',
  pillsBorder: '#e0d5ff',
  pillsText: '#9c27b0',
};

const SplashScreen = () => {
  const progress = useSharedValue(0);
  
  useEffect(() => {
    progress.value = withTiming(1, { 
      duration: 2500,
      easing: Easing.inOut(Easing.quad) 
    });
  }, []);

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <LinearGradient
      colors={[COLORS.backgroundStart, COLORS.backgroundEnd]}
      style={styles.container}
    >
      {/* Central Logo Section */}
      <View style={styles.logoWrapper}>
        <View style={styles.logoContainer}>
            <LinearGradient
                colors={[COLORS.logoPurple, COLORS.logoBlue]}
                style={styles.logoBorder}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.logoInner}>
                    <Ionicons name="sparkles" size={60} color={COLORS.logoPurple} />
                </View>
            </LinearGradient>
            
            {/* Badges */}
            <View style={[styles.badge, styles.badgeTopRight, { backgroundColor: COLORS.badgeBlue }]}>
                <MaterialCommunityIcons name="brain" size={24} color="white" />
            </View>
            <View style={[styles.badge, styles.badgeBottomRight, { backgroundColor: COLORS.badgeOrange }]}>
                <MaterialCommunityIcons name="flash" size={24} color="white" />
            </View>
            <View style={[styles.badge, styles.badgeBottomLeft, { backgroundColor: COLORS.badgePink }]}>
                <Ionicons name="book" size={24} color="white" />
            </View>
        </View>

        {/* Branding */}
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                <Text style={{ color: COLORS.logoPurple }}>L</Text>
                <Text style={{ color: COLORS.badgePink }}>earn</Text>
                <Text style={{ color: COLORS.logoBlue }}>AI</Text>
            </Text>
            <Text style={styles.subtitle}>Your intelligent learning companion</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
            <View style={styles.progressTrack}>
                <AnimatedReanimated.View style={[styles.progressBar, progressStyle]}>
                    <LinearGradient
                        colors={[COLORS.logoPurple, COLORS.logoBlue]}
                        style={StyleSheet.absoluteFill}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                </AnimatedReanimated.View>
            </View>
        </View>

        {/* Pills */}
        <View style={styles.pillsContainer}>
            {['AI-Powered', 'Personalized', 'Interactive'].map((text, index) => (
                <View key={index} style={styles.pill}>
                    <Text style={styles.pillText}>{text}</Text>
                </View>
            ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️ AOSSIE</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    position: 'relative',
    padding: 20,
    marginBottom: 20,
    zIndex: 1,
  },
  logoBorder: {
    padding: 4,
    borderRadius: 28,
    shadowColor: COLORS.logoPurple,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  logoInner: {
    width: 140,
    height: 140,
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  badgeTopRight: {
    top: 5,
    right: 5,
  },
  badgeBottomRight: {
    bottom: 25,
    right: -10,
  },
  badgeBottomLeft: {
    bottom: 0,
    left: 0,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 52,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textGray,
    marginTop: 8,
    fontWeight: '500',
  },
  progressContainer: {
    width: '70%',
    height: 8,
    marginTop: 40,
  },
  progressTrack: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  pillsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
  pill: {
    backgroundColor: COLORS.pillsBg,
    borderColor: COLORS.pillsBorder,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  pillText: {
    color: COLORS.pillsText,
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
  },
  footerText: {
    color: COLORS.textGray,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default SplashScreen;
