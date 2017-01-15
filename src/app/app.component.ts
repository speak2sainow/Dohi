import { Component } from '@angular/core';
import{HTTPTestComponent} from "./http-test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lat: number = 64.720079209609111;
  lng: number = 21.116065979003906;
  zoom: number = 10;
  data: bundle = { paths: [
     {  
         path_name:"Test trail 1",
         places:[  
            {  
               place_image:"http://www8.tfe.umu.se/personliga/bt/p8ume_radhus_500.jpg",
               place_radius:25,
               place_position:{  
                  lat:63.825537805635527,
                  lng:20.265387296676636
               },
               place_info:"",
               place_media:[  
                  {  
                     media_type:"text",
                     media_contents:"",
                     media_name:"",
                     media_image:""
                  }
               ],
               place_name:""
            },
            {  
               place_image:"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xaf1/t31.0-8/c0.187.851.315/p851x315/10492967_789556684400140_3481776385337974598_o.jpg",
               place_radius:25,
               place_position:{  
                  lat:63.825428956712742,
                  lng:20.265859365463257
               },
               place_info:"",
               place_media:[  
                  {  
                     media_type:"text",
                     media_contents:"",
                     media_name:"",
                     media_image:""
                  }
               ],
               place_name:""
            }
         ],
         path_length:"4",
         path_polyline:[  
            [  
               {  
                  lat:63.825552003290262,
                  lng:20.264759659767151
               },
               {  
                  lat:63.825395828696379,
                  lng:20.264148116111755
               },
               {  
                  lat:63.825362700640881,
                  lng:20.263268351554871
               },
               {  
                  lat:63.825466817255517,
                  lng:20.262570977210999
               },
               {  
                  lat:63.825750769702616,
                  lng:20.262517333030701
               },
               {  
                  lat:63.825888012359052,
                  lng:20.263128876686096
               },
               {  
                  lat:63.825869082377231,
                  lng:20.263976454734802
               },
               {  
                  lat:63.825675049330016,
                  lng:20.264384150505066
               },
               {  
                  lat:63.825552003290262,
                  lng:20.264759659767151
               }
            ]
         ],
         path_image:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/54/S%C3%B5rve_tuletorn_2013.jpg/1000px-S%C3%B5rve_tuletorn_2013.jpg",
         path_time:"1",
         path_info:""
      }
  ],
                  bundle_info: "Test",
                  bundle_more_info: "Test"  
};
 
 markers: coord[] =[
   {
      lat: 64.720079209609111,
      lng: 21.116065979003906
   },
   {
      lat: 64.772808400877082,
      lng: 21.008949279785156
   },

   {
      lat: 64.719639367354873,
      lng: 21.136665344238281
   },
   {
      lat: 64.723304501022909,
      lng: 21.107139587402344
   },
  {
      lat: 64.720079209609111,
      lng: 21.116065979003906
   }
 ]

 test: String;

  public changeData(): void {
    //this.lat = 49.3307;
    //this.lng = 11.0579; 
    this.data = this.data;
    this.markers = this.data.paths[0].path_polyline[0];
    this.test = JSON.stringify(this.data.paths[0].path_polyline[0]);
  }
}

interface marker{
  lat: number;
  lng: number;
}

interface bundle{
  paths?: path[];
  bundle_info?: String;
  bundle_more_info?: String;
}

interface path{
  path_name?: String;
  places?: place[];
  path_length?: String;
  path_polyline?: coord[][];
  path_image?: String;
  path_time?: String;
  path_info?: String;
}

interface place{
  place_image?: String;
  place_radius?: number;
  place_position?: coord;
  place_info?: String;
  place_media?: media[];
  place_name?: String;
}

interface polyline{
  positions?: coord[];
}

interface coord{
  lat?: number;
  lng?: number;
}

interface media{
  media_type?: String;
  media_contents?: String;
  media_name?: String;
  media_image?: String;
}