import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from "../video";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Output("eventEmitter")
  public eventEmitter = new EventEmitter();

  @Input("videos")
  videos: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectVideo: any) {
    this.eventEmitter.emit(selectVideo);
  }

}
