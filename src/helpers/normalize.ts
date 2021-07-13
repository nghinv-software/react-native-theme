import { PixelRatio, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/** Design based on iphone6 */
const defaultPixelRatio = 1;
const designWidth = 375;
const designHeight = 667;

const dpWidth = designWidth / defaultPixelRatio;
const dpHeight = designHeight / defaultPixelRatio;

const scale = Math.min(height / dpHeight, width / dpWidth);

/**
 * Hàm làm tròn kích thước theo pixel của màn hình
 * @param size Kích thước
 */
export const px = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * scale);
};
