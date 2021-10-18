import { buildCssVariables } from './buildCssVariables';
import COLORS from './colors';
import CORNERS from './corners';
import MOTION from './motion';
import SHADOWS from './shadows';
import SPACING from './spacing';

const cssVariables = [
    buildCssVariables(COLORS, 'color'),
    buildCssVariables(CORNERS, 'corners'),
    buildCssVariables(SPACING, 'spacing'),
    buildCssVariables(MOTION),
    buildCssVariables(SHADOWS, 'shadow'),
].join('\n');

export { cssVariables, COLORS, CORNERS, MOTION };
