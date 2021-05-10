import { useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";

export default function useAudioPlay(): void {
  useEffect(() => {
    const player = new AudioPlayer();
    player.init();

    return () => {
      player.destroy();
    };
  }, []);
}
