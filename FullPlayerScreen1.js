import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FullPlayerScreen({ route, navigation }) {
  const { currentSong } = route.params;

  return (
    <ImageBackground source={currentSong.image} style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.content}>
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.songArtist}>{currentSong.artist}</Text>
        <Image source={require('./assets/My_Library/Group.png')} />
        <View style={styles.controls}>
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="step-backward" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="play-circle" size={64} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="step-forward" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="share-alt" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Play</Text>
        <FontAwesome name="chevron-down" size={24} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  overlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 18,
    color: '#cccccc',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 40,
  },
  closeButton: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    paddingHorizontal: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
