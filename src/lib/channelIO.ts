declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void;
  }
}

export function openChannelChat(): void {
  window.ChannelIO?.('showMessenger');
}
