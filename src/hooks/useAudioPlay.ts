import { useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";

export default function useAudioPlay(): void {
  useEffect(() => {
    const player = new AudioPlayer();
    player.init();

    // eslint-disable-next-line
    // @ts-ignore
    window.player = player;

    return () => {
      player.destroy();
    };
  }, []);
}
