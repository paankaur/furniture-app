import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabMenu from '@/components/TabMenu';
import { colors } from '@/utils/colors';

export default function Favorites() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.subtitle}>Your favorite items will appear here.</Text>
            
        </View>
        <TabMenu atFavorites={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        
    
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
    },
});