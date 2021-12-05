import { useEffect, useRef } from "react";
import AudioPlayer, { PlayerState } from "../components/AudioPlayer";

export default function useAudioPlay(): void {
  const audioPlayerRef = useRef<AudioPlayer>(new AudioPlayer());

  useEffect(() => {
    const player = audioPlayerRef.current;
    player.init();

    return () => {
      player.destroy();
    };
  }, []);
}
