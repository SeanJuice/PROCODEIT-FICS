import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LazyLoadScriptService } from './services/lazy-load-script.service';
declare var $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Role: number | 0;
  DashboardSettings: any;
  isLoaded:boolean = true;
  constructor(
    private Auth: AuthService,
    private lazyLoadService: LazyLoadScriptService
  ) {}

  ngOnInit(): void {
    this.Role = this.Auth.Role;
    this.RoleFilter(this.Role);
    this.lazyLoadService.loadScript('/assets/jquery.min.js').subscribe((_) => {
      console.log('Jquery is loaded!');
      this.loadJS();
    });
  }

  RoleFilter(role) {
    switch (role) {
      case 1:
        this.DashboardSettings = Admin;
        break;
      case 2:
        this.DashboardSettings = dashboards_settings_client;
        break;
      case 3:
        this.DashboardSettings = dashboards_settings_practitioner;
        break;
      case 4:
        this.DashboardSettings = dashboards_settings_trainer;
        break;
      case 5:
        this.DashboardSettings = dashboards_settings_trainee;
        break;
      default:
        console.log('No such day exists!');
        break;
    }
    this.isLoaded =false;
  }

  loadJS() {
    $(document).ready(function () {
      var zindex = 10;

      $('div.card').click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass('show')) {
          isShowing = true;
        }

        if ($('div.cards').hasClass('showing')) {
          // a card is already in view
          $('div.card.show').removeClass('show');

          if (isShowing) {
            // this card was showing - reset the grid
            $('div.cards').removeClass('showing');
          } else {
            // this card isn't showing - get in with it
            $(this).css({ zIndex: zindex }).addClass('show');
          }

          zindex++;
        } else {
          // no cards in view
          $('div.cards').addClass('showing');
          $(this).css({ zIndex: zindex }).addClass('show');

          zindex++;
        }
      });
    });
  }
}

/**
 * ?Client dashboard
 */
const dashboards_settings_client = [
  {
    NumberOfObject: 1,
    Header_Name: 'Book Sessions',
    Button_Name: 'Book',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'Booking',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 2,
    Header_Name: 'My Sessions',
    Button_Name: 'View Sessions',
    ImageLink:
      'https://kgdshgoixg1vrh3sdpjwgidf-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/first-therapy-session-sunday-edit-scaled.jpg',
    RouterLink: 'Sessions',
    icon: 'format_line_spacing',
    color: '#3D3B6D',
  },
  {
    NumberOfObject: 1,
    Header_Name: ' Purchase Package',
    Button_Name: 'Purchase',
    ImageLink:
      'https://blog.mercadoe.com/wp-content/uploads/2016/10/gestao-de-compras.jpg',
    RouterLink: 'PurchasePackage',
    icon: 'receipt',
    color: '',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'My Questionnaires',
    Button_Name: 'View Questionnaires',
    ImageLink:
      'https://cdn.paperpile.com/guides/img/research-paper-types-illustr-400x400.png',
    RouterLink: 'My_Questionnaires',
    icon: 'library_books',
    color: '#3a9b5a',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'My Tasks',
    Button_Name: 'View Tasks',
    ImageLink:
      'https://blog.gainapp.com/wp-content/uploads/2019/12/Blog-PrioritizeWork-2.jpg',
    RouterLink: 'tasks',
    icon: 'dns',
    color: '#b9a013',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Profile',
    Button_Name: 'View My Profile',
    ImageLink:
      'https://www.facebook.com/images/help/fbhc_redesign/card_images/yourprofile.png',
    RouterLink: 'Profile',
    icon: 'face',
    color: '#F68C81',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Trial Questionnaire',
    Button_Name: 'View Trial Questionnaire',
    ImageLink: 'https://blog.hubspot.com/hubfs/questionnaire-4.jpg',
    RouterLink: 'Trial_Questionnaire',
    icon: 'open_in_new',
    color: '#39B39B',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Progress Report',
    Button_Name: 'View Report',
    ImageLink:
      'https://www.pngix.com/pngfile/big/687-6877615_project-management-insights-and-data-and-insights-icon.png',
    RouterLink: 'ProgressReport',
    icon: 'trending_up',
    color: '#006A98',
  },
];

/**
 * ?Practitioner dashboard
 */
const dashboards_settings_practitioner = [
  {
    NumberOfObject: 1,
    Header_Name: 'Purchase Questionnaire',
    Button_Name: 'purchase',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'purchase-questionnaire',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Set Availability',
    Button_Name: 'View',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'set-availability',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Send Client Task',
    Button_Name: 'View',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'send-client-task',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Profile',
    Button_Name: 'View My Profile',
    ImageLink:
      'https://www.facebook.com/images/help/fbhc_redesign/card_images/yourprofile.png',
    RouterLink: 'Profile-Practitioner',
    icon: 'face',
    color: '#F68C81',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Send Feedbacks',
    Button_Name: 'View Tasks',
    ImageLink:
      'https://www.facebook.com/images/help/fbhc_redesign/card_images/yourprofile.png',
    RouterLink: 'feedbacks',
    icon: 'face',
    color: '#F68C81',
  }
];
/**
 * ? Trainer dashboard
 */

const dashboards_settings_trainer = [
  {
    NumberOfObject: 1,
    Header_Name: 'Send Feedback',
    Button_Name: 'View',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'send-feedback',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },{
    NumberOfObject: 1,
    Header_Name: 'send task to trainee',
    Button_Name: 'View',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'send-task-trainee',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },{
    NumberOfObject: 1,
    Header_Name: 'Set Availability',
    Button_Name: 'View',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'set-practitioner-availability',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Profile',
    Button_Name: 'View',
    ImageLink:
    'https://www.facebook.com/images/help/fbhc_redesign/card_images/yourprofile.png',
    RouterLink: 'trainer-profile',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
];
/**
 * ? Trainee dashboard
 */
const dashboards_settings_trainee = [
  {
    NumberOfObject: 1,
    Header_Name: 'Book Sessions',
    Button_Name: 'Book',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'booking',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Sessions',
    Button_Name: 'Book',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'sessions',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Upload Case Study',
    Button_Name: 'Upload',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'upload-case-study',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Performance Report',
    Button_Name: 'Book',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'performance',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'My Questionnaires',
    Button_Name: 'Book',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'questionnaire',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'My Tasks',
    Button_Name: 'Book',
    ImageLink:
      'https://cdn.britannica.com/29/153629-050-7590A6D1/calendar-datess.jpg',
    RouterLink: 'tasks',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Profile',
    Button_Name: 'View',
    ImageLink:
    'https://www.facebook.com/images/help/fbhc_redesign/card_images/yourprofile.png',
    RouterLink: 'trainee-profile',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
];
/**
 * ? Admin dashboard
 */
const Admin = [
  {
    NumberOfObject: 1,
    Header_Name: 'Client Management',
    Button_Name: 'View',
    ImageLink:
      'https://img.favpng.com/8/24/20/customer-client-clip-art-png-favpng-6F0gdttFJuRTZPvQC2HbnCxQf.jpg',
    RouterLink: 'client-management',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Access Management',
    Button_Name: 'View',
    ImageLink:
      'http://www.clipartbest.com/cliparts/9T4/L6z/9T4L6zMrc.png',
    RouterLink: 'access',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Application Requests ',
    Button_Name: 'View',
    ImageLink:
      'https://www.netclipart.com/pp/m/9-93978_chapter-questions-for-interviewer-to-ask-during-.png',
    RouterLink: 'application-requests',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Assign Users',
    Button_Name: 'View',
    ImageLink:
      'http://photos1.fotosearch.com/bthumb/CSP/CSP207/k2074736.jpg',
    RouterLink: 'assign',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Manage Questionnaires ',
    Button_Name: 'View',
    ImageLink:
      'https://image.freepik.com/free-vector/business-background-design_1167-77.jpg',
    RouterLink: 'questionnaire-management',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Assign Questionnaire',
    Button_Name: 'View',
    ImageLink:
      'https://thumbs.dreamstime.com/b/question-mark-character-notepad-cartoon-42449414.jpg',
    RouterLink: 'assign-questionnaire',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Audit Trail',
    Button_Name: 'View',
    ImageLink:
      'http://images.clipartpanda.com/surtax-clipart-60496-design-mascot-paper-trail.jpg',
    RouterLink: 'audit-trail',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Reports',
    Button_Name: 'View',
    ImageLink:
      'http://3.bp.blogspot.com/_O0OyyjHaqpo/SwISTQXBJ5I/AAAAAAAAAA8/5RPLkthofZY/s1600/report.jpg',
    RouterLink: 'Reports',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
  {
    NumberOfObject: 1,
    Header_Name: 'Administration',
    Button_Name: 'View',
    ImageLink:
      'https://www.netclipart.com/pp/m/91-911062_receptionist-clipart-admin-assistant-cartoon.png',
    RouterLink: 'Administrations',
    icon: 'library_add',
    color: 'rgb(15, 147, 255);',
  },
];
