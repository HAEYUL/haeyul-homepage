declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void;
  }
}

// 채널톡 사용 여부. 다시 사용하려면 true로 바꾸고, 각 HTML 파일의 채널톡 스크립트 주석을 해제하세요.
export const CHANNEL_TALK_ENABLED = false;

export function openChannelChat(): void {
  window.ChannelIO?.('showMessenger');
}
