// Abstraction, the 3rd pillar of OOP

// interface MediaPlayer{
//   play() : void;
//   pause() : void;
//   stop() : void;
// }
// class MusicPlayer implements MediaPlayer{
//   play(): void {
//     console.log("Playing music");
//   }
//   pause(): void {
//     console.log("Music Pause");
//   }
//   stop(): void {
//     console.log("Music Stop");
//   }
// }
// const myPlayer = new MusicPlayer();
// myPlayer.play();

abstract class MediaPlayer{
  abstract pause():void;
  abstract play(): void;
  abstract stop():void;
}

class myPlayer extends MediaPlayer{
  play(): void {
    console.log("Playing music");
  }
  pause(): void {
    console.log("Music Pause");
  }
  stop(): void {
    console.log("Music Stop");
  }
}

const soyabPlayer = new myPlayer();
soyabPlayer.pause();