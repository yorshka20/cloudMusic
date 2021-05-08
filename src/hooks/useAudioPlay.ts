import { useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";

export default function useAudioPlay() {
  const player = new AudioPlayer();

  useEffect(() => {
    player.init();

    return () => {
      player.destroy();
    };
  }, []);
}
