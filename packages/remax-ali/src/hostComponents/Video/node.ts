import { unique } from '@remax/shared';

export const alias = {
  className: 'class',
  src: 'src',
  id: 'id',
  style: 'style',
  poster: 'poster',
  posterSize: 'posterSize',
  objectFit: 'objectFit',
  initialTime: 'initial-time',
  duration: 'duration',
  controls: 'controls',
  autoplay: 'autoplay',
  direction: 'direction',
  loop: 'loop',
  muted: 'muted',
  showFullscreenBtn: 'show-fullscreen-btn',
  showPlayBtn: 'show-play-btn',
  showCenterPlayBtn: 'show-center-play-btn',
  showMuteBtn: 'show-mute-btn',
  enableProgressGesture: 'enableProgressGesture',
  mobilenetHintType: 'mobilenetHintType',
  onPlay: 'onPlay',
  onPause: 'onPause',
  onEnded: 'onEnded',
  onTimeUpdate: 'onTimeUpdate',
  onLoading: 'onLoading',
  onError: 'onError',
  onFullScreenChange: 'onFullScreenChange',
  onTap: 'onTap',
  onClick: 'onTap',
  onUserAction: 'onUserAction',
};

export const props = unique(Object.values(alias));
