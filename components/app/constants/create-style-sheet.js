import { StyleSheet } from 'react-native';

export default function createStyleSheet(width, height) {
  const MIN = Math.min(width, height);
  const LUNGS = 0.9 * MIN;
  const TEXT = 0.05 * MIN;
  return StyleSheet.create({
    lungs: {
      alignItems: 'center',
      backgroundColor: '#455A64',
      borderColor: '#263238',
      borderStyle: 'solid',
      borderWidth: 0.0125 * LUNGS,
      borderRadius: 0.5 * LUNGS,
      flex: 1,
      justifyContent: 'center',
      maxHeight: LUNGS,
      maxWidth: LUNGS,
      minHeight: LUNGS,
      minWidth: LUNGS
    },
    lungs2: {
      alignItems: 'center',
      backgroundColor: '#607D8B',
      borderRadius: 0.5 * LUNGS,
      flex: 1,
      justifyContent: 'center',
      maxHeight: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      minWidth: '100%',
      position: 'relative'
    },
    text: {
      color: '#202020',
      fontFamily: '"Roboto Condensed", sans-serif',
      fontSize: TEXT,
      fontWeight: 'bold'
    }
  })
};
