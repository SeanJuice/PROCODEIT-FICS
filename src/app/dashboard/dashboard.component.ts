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
  DashboardSettings:any =  dashboards_settings;

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


const dashboards_settings  =
[
   {
     NumberOfObject:1,
     Header_Name:"Book Sessions",
     Button_Name:"Book",
     ImageLink: "https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg",
     RouterLink:"",
     icon:"library_add",
     color:"rgb(15, 147, 255);"
   },
   {
    NumberOfObject:2,
    Header_Name:"My Sessions",
    Button_Name:"View Sessions",
    ImageLink: "https://kgdshgoixg1vrh3sdpjwgidf-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/first-therapy-session-sunday-edit-scaled.jpg",
    RouterLink:"Sessions",
    icon:"format_line_spacing",
    color:"#3D3B6D"
  },
  {
    NumberOfObject:1,
    Header_Name:" Purchase Package",
    Button_Name:"Purchase",
    ImageLink: "https://blog.mercadoe.com/wp-content/uploads/2016/10/gestao-de-compras.jpg",
    RouterLink:"PurchasePackage",
    icon:"receipt",
    color:""
  },
  {
    NumberOfObject:1,
    Header_Name:"My Questionnaires",
    Button_Name:"View Questionnaires",
    ImageLink: "https://cdn.paperpile.com/guides/img/research-paper-types-illustr-400x400.png",
    RouterLink:"My_Questionnaires",
    icon:"library_books",
    color:"#3a9b5a"
  },
  {
    NumberOfObject:1,
    Header_Name:"My Tasks",
    Button_Name:"View Tasks",
    ImageLink: "https://blog.gainapp.com/wp-content/uploads/2019/12/Blog-PrioritizeWork-2.jpg",
    RouterLink:"tasks",
    icon:"dns",
    color:"#b9a013"
  },
  {
    NumberOfObject:1,
    Header_Name:"Profile",
    Button_Name:"View My Profile",
    ImageLink: "https://www.facebook.com/images/help/fbhc_redesign/card_images/yourprofile.png",
    RouterLink:"Profile",
    icon:"face",
    color:"#F68C81"
  },
  {
    NumberOfObject:1,
    Header_Name:"Trial Questionnaire",
    Button_Name:"View Trial Questionnaire",
    ImageLink: "https://blog.hubspot.com/hubfs/questionnaire-4.jpg",
    RouterLink:"Trial_Questionnaire",
    icon:"open_in_new",
    color:"#39B39B"
  },
  {
    NumberOfObject:1,
    Header_Name:"Progress Report",
    Button_Name:"View Report",
    ImageLink: "https://www.pngix.com/pngfile/big/687-6877615_project-management-insights-and-data-and-insights-icon.png",
    RouterLink:"ProgressReport",
    icon:"trending_up",
    color:"#006A98"
  },

]