'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  View,
  StyleSheet
} = React;

var Card = React.createClass({
  render: function() {
    return (
      <View style={styles.card}>
        <Image
          source={
            { uri: this.props.card.image_url }
          }
          style={styles.cardImage}
        />
        <View style={styles.metadata}>
          <Text style={styles.name}>{this.props.card.name}</Text>
          <Text style={styles.description}>{this.props.card.description}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    padding: 5,
    height: 90
  },
  cardImage: {
    width: 50,
    height: 75
  },
  metadata: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 80,
    paddingLeft: 10
  },
  name: {
    fontSize: 18
  },
  description: {
    fontSize: 14
  }
});

module.exports = Card;
