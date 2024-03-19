export interface IAudioInfo {
  id: string;
  speed: number;
  volume: number | undefined;
  duration: number;
  isPlaying: boolean;
  isPinned: boolean;
  blob: string;
}
