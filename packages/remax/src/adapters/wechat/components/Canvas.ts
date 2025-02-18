import factory from './factory';

const Canvas = factory<CanvasProps>('canvas');

export interface CanvasProps {
  readonly dataset?: DOMStringMap;
  type?: string; //  否 指定 canvas 类型，当前仅支持 webgl 2.7.0
  canvasId?: string; //  否 canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性 1.0.0
  disableScroll?: boolean; // false 否 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 1.0.0
  onClick?: (event: any) => any;
  onTouchStart?: (event: any) => any; //  否 手指触摸动作开始 1.0.0
  onTouchMove?: (event: any) => any; //  否 手指触摸后移动 1.0.0
  onTouchEnd?: (event: any) => any; //  否 手指触摸动作结束 1.0.0
  onTouchCancel?: (event: any) => any; //  否 手指触摸动作被打断，如来电提醒，弹窗 1.0.0
  onLongClick?: (event: any) => any; //  否 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 1.0.0
  onError?: (event: any) => any; //  否 当发生错误时触发 error 事件，detail = {errMsg} 1.0.0
}

export default Canvas;
