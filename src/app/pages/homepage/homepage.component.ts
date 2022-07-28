import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  img1="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Cs7lHNsJSCi1mkPzo8fT"
  img2="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Zk7d1MdoSJ6cEShVbfd0"
  img3="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/qi4s19xSKCmtaaRUqUFI"
  
  title1="Yazılım Geliştirici Yetiştirme Kampı (JavaScript)"
  title2="Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)"
  title3="Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)"
  

  progress="1%"

  constructor() { }

  ngOnInit(): void {
  }

}
