import factory from './factory';
import { CSSProperties } from 'react';

const Label = factory<LabelProps>('label');

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  for?: string; //  否 绑定控件的 id 1.0.0
  animation?: Array<Record<string, any>>;
  onClick?: (event: any) => any;
}

export default Label;
