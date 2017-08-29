import {Component, Input, OnInit} from '@angular/core';
import {Video} from "../video";

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input('selectedVideo')
  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
