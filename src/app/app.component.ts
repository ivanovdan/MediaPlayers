import { Component } from '@angular/core';
import * as sources from 'assets/sources.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bunny Player';
  showVideo = true;
  videoSource = (<any>sources).videoSource;
  audioSource = (<any>sources).audioSource;
  textSource = (<any>sources).textSource;
  imageSource = (<any>sources).imageSource;

  abortVideo(event: any) {
  // Can't use @ViewChild since it's not available
  const videoPLayer = event.currentTarget.parentElement.parentElement.children[0].children[0];
    videoPLayer.pause();
    this.showVideo = !this.showVideo;
  }

  playAudio(event: any) {
    const audioPlayer = event.currentTarget.parentElement.children[2];
    audioPlayer.play();
  }
}
