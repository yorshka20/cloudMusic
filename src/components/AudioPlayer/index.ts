import EventEmitter from "events";

export enum PlayerState {
  Running = "running",
  Suspended = "suspended",
  Closed = "closed",
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

  private get currentState(): AudioContextState {
    return this.audioContext?.state || PlayerState.Closed;
  }

  private set currentState(state) {
    this.currentResource = state;
  }

  private currentResource: string;

  private audioContext: AudioContext;

  private timer: NodeJS.Timeout | null;

  static getInstance(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }

    return AudioPlayer.instance;
  }

  constructor() {
    super();

    this.timer = null;
    this.currentResource = "";
    this.currentState = PlayerState.Closed;
    this.audioContext = new AudioContext({});

    AudioPlayer.instance = this;

    return AudioPlayer.instance;
  }

  public init(): void {
    this.currentState = PlayerState.Closed;

    console.log(this.currentState);
    console.log(this.currentResource);

    this.timer = setInterval(() => {
      console.log("tick from audioplayer");
    }, 1000);
  }

  public destroy(): void {
    this.currentState = PlayerState.Closed;
    this.currentResource = "";

    clearInterval(this.timer as NodeJS.Timeout);

    console.log("audio player destroyed");
  }

  public next(): void {
    this.currentState = PlayerState.Running;
  }

  public prev(): void {
    this.currentState = PlayerState.Running;
  }

  public play(): void {
    this.currentState = PlayerState.Running;
    console.log(this.audioContext);
    this.audioContext.resume();
  }

  public pause(): void {
    this.currentState = PlayerState.Suspended;
    this.audioContext.suspend();
  }

  public stop(): void {
    this.currentState = PlayerState.Closed;
  }
}
