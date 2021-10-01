import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { LazyLoadScriptService } from 'src/app/dashboard/services/lazy-load-script.service';
import { AuthService } from '../../auth.service';
declare var $;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  name = 'Video events';
  videoSource = "https://vimeo.com/616460114/1ddc7de038";

@ViewChild('videoPlayer') videoplayer: any;
public startedPlay:boolean = false;
public show:boolean = false;

  isLoggedIn$: Observable<boolean> | undefined;
  isLoaded: boolean = true;
  constructor(private authService: AuthService,  private lazyLoadService: LazyLoadScriptService) { }

  ngOnInit() {
    timer(4000).subscribe(x => { this.isLoaded=false })

    this.lazyLoadService.loadScript('/assets/jquery.min.js').subscribe((_) => {
      console.log('Jquery is loaded!');
      this.loadJS();
    });
  }

  pauseVideo(videoplayer)
{
  videoplayer.nativeElement.play();
  // this.startedPlay = true;
  // if(this.startedPlay == true)
  // {
     setTimeout(() =>
     {
      videoplayer.nativeElement.pause();
       if(videoplayer.nativeElement.paused)
      {
        this.show = !this.show;
      }
     }, 5000);
  // }
}
scroll(el: HTMLElement) {
  el.scrollIntoView();
}

loadJS() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const container = document.querySelector(".container");

  left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
  });

  left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
  });

  right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
  });

  right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
  });

}
}
