import React from 'react';
import {decode, encode} from 'base-64'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

class HomeScreen extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    const counter = this.state.counter;

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>Counter: {counter}</Text>
        <Text style={styles.note}>Increase me to 10 please</Text>
        <TouchableOpacity 
          style={styles.floatingButton}
          onPress={this.onIncrement}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onIncrement = () => {
    if (this.state.counter == 2) {
      alert("Increase button has already been broken.")
      return;
    }

    this.setState({
      counter: this.state.counter + 1,
    })

    if (this.state.counter == 9) {
      alert("You win !!")
    }
  };
}

export default function App() {
  return (
      <HomeScreen />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  counter: {
    fontSize: 25,
  },
  note: {
    fontSize: 15,
  }
});