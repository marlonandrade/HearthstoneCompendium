/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var CardList = require('./js/CardList');

var HeathstoneCompendium = React.createClass({
  getInitialState: function() {
    return {
      cards: []
    };
  },

  componentDidMount: function() {
    fetch('https://raw.githubusercontent.com/pdyck/hearthstone-db/master/cards/all-cards.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cards: data.cards
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  render: function() {
    return (
      <CardList
        style={styles.container}
        cards={this.state.cards}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HeathstoneCompendium', () => HeathstoneCompendium);
