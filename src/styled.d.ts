import 'styled-components';
import { Theme } from './components/models/theme'; // путь от src

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}