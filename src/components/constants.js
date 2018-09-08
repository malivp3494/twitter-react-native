import { Dimensions } from 'react-native';
export const { height, width } = Dimensions.get('window');
export default {
  width: width,
  height: height,
};

export const touch = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};
