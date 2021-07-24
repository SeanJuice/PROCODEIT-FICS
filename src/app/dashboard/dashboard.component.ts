import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LazyLoadScriptService } from './services/lazy-load-script.service';
declare var $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Role: Number | 0;
  constructor(private Auth:AuthService,private lazyLoadService: LazyLoadScriptService) { }

  ngOnInit(): void {
    this.Role = Number(this.Auth.Role)

    this.lazyLoadService.loadScript('/assets/jquery.min.js').subscribe(_ => {
      console.log('Jquery is loaded!')
      this.loadJS()
  
  });
  }




  loadJS(){
    $(document).ready(function(){
      var zindex = 10;
      
      $("div.card").click(function(e){
        e.preventDefault();
    
        var isShowing = false;
    
        if ($(this).hasClass("show")) {
          isShowing = true
        }
    
        if ($("div.cards").hasClass("showing")) {
          // a card is already in view
          $("div.card.show")
            .removeClass("show");
    
          if (isShowing) {
            // this card was showing - reset the grid
            $("div.cards")
              .removeClass("showing");
          } else {
            // this card isn't showing - get in with it
            $(this)
              .css({zIndex: zindex})
              .addClass("show");
    
          }
    
          zindex++;
    
        } else {
          // no cards in view
          $("div.cards")
            .addClass("showing");
          $(this)
            .css({zIndex:zindex})
            .addClass("show");
    
          zindex++;
        }
        
      });
    });
  }

}
