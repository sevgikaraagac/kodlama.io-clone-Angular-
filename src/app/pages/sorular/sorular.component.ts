import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorular',
  templateUrl: './sorular.component.html',
  styleUrls: ['./sorular.component.css']
})
export class SorularComponent implements OnInit {
  img="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BBLmG3XFTtm8XBTrzg4v"
  title="Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)"
  constructor() { }

  ngOnInit(): void {
  }

}
