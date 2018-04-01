import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
