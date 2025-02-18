import factory from './factory';
import { CSSProperties } from 'react';

const Text = factory<TextProps>('text');

export interface TextProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  selectable?: boolean; // false 否 文本是否可选 1.1.0
  space?: string; //  否 显示连续空格 1.4.0
  decode?: boolean; // false 否 是否解码 1.4.0
  onClick?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default Text;
