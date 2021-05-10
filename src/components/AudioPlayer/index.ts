import EventEmitter from "events";
import axios from "axios";

enum PlayerState {
  Playing,
  Pause,
  Stopped,
}

/**
 * 音频播放器
 * 单例，全局控制
 *
 * @export
 * @class AudioPlayer
 * @extends {EventEmitter}
 */
export default class AudioPlayer extends EventEmitter {
  static instance: AudioPlayer;

  private currentResource: any = "";
  private currentState: PlayerState = PlayerState.Stopped;

  // private audio: AudioNode

  private timer: NodeJS.Timeout | undefined;

  constructor() {
    super();

    if (AudioPlayer.instance) {
      return AudioPlayer.instance;
    }

    this.currentResource = "";
    this.currentState = PlayerState.Stopped;

    AudioPlayer.instance = this;

    return AudioPlayer.instance;
  }

  public init(): void {
    this.currentState = PlayerState.Stopped;

    console.log(this.currentState);
    console.log(this.currentResource);

    this.timer = setInterval(() => {
      console.log("tick from audioplayer");
    }, 1000);
  }

  public destroy(): void {
    this.currentState = PlayerState.Stopped;
    this.currentResource = "";

    clearInterval(this.timer as NodeJS.Timeout);

    console.log("audio player destroyed");
  }

  public next(): void {
    this.currentState = PlayerState.Playing;
  }

  public prev(): void {
    this.currentState = PlayerState.Playing;
  }

  public play(): void {
    this.currentState = PlayerState.Playing;
  }

  public pause(): void {
    this.currentState = PlayerState.Pause;
  }

  public stop(): void {
    this.currentState = PlayerState.Stopped;
  }
}
