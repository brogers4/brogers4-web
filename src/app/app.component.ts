import { Component, ViewChild, NgZone, Pipe, PipeTransform } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showNavButton = true;

  projects = [
    {name:'br-browser-detect',url:'https://brogers4.github.io/br-browser-detect'},
    {name:'br-helper-tooltip',url:'https://brogers4.github.io/br-helper-tooltip'},
    {name:'br-highchart',url:'https://brogers4.github.io/br-highchart'},
    {name:'br-json-tree',url:'https://brogers4.github.io/br-json-tree'},
    {name:'br-pager',url:'https://brogers4.github.io/br-pager'},
    {name:'br-zoomable-card',url:'https://brogers4.github.io/br-zoomable-card'},
    {name:'br-signal-strength',url:'https://brogers4.github.io/br-signal-strength'}
  ];

  selectedProjectUrl = 'about:blank';
  selectedProject = null;

  @ViewChild("sidenav") sideNav: MdSidenav

  constructor(private _ngZone:NgZone) { }

  ngOnInit() {
    window.onresize = (e) => {
      this.setSidenavOpen();
    }
    this.setSidenavOpen();
  }

  setSidenavOpen() {
    this._ngZone.run(() => {
      var w = window.innerWidth;
      if(w > 768) {
        this.sideNav.open();
        this.showNavButton = false;
      }
      else {
        this.sideNav.close();
        this.showNavButton = true;
      }
    })
  }

  onProjectSelect(index,url){
    // console.log("onProjectSelect e:",e,"url:",url);
    this.selectedProjectUrl = url;
    this.selectedProject = index;
  }
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
