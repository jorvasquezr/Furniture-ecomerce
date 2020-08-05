import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouserl-image',
  templateUrl: './carouserl-image.component.html',
  styleUrls: ['./carouserl-image.component.scss']
})
export class CarouserlImageComponent implements OnInit {

  constructor() { }

  public images = [
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F9%2F5%2F1157535-empty-office-wallpaper-1920x1080-for-4k-monitor.jpg&f=1&nofb=1"
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2DIGKd2pbpU%2Fmaxresdefault.jpg&f=1&nofb=1"
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUhLObjL-s3o%2Fmaxresdefault.jpg&f=1&nofb=1"
    }
];

  ngOnInit(): void {
  }


}
