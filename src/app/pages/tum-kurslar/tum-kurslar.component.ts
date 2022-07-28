import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tum-kurslar',
  templateUrl: './tum-kurslar.component.html',
  styleUrls: ['./tum-kurslar.component.css']
})
export class TumKurslarComponent implements OnInit {
  img1="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Cs7lHNsJSCi1mkPzo8fT"
  img2="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Zk7d1MdoSJ6cEShVbfd0"
  img3="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/qi4s19xSKCmtaaRUqUFI"
  img4="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BBLmG3XFTtm8XBTrzg4v"

  title1="Yazılım Geliştirici Yetiştirme Kampı (JavaScript)"
  title2="Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)"
  title3="Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)"
  title4="Programlamaya Giriş için Temel Kurs"

  progress="1%"


  constructor() { }

  ngOnInit(): void {
  }

}
