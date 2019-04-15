import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GapiTestService {

  gapi = require('gapi');
  gapi.server.load('calendar-json.googleapis.com','v3',function(){
    var request = gapi.server.plus.people.get({userId: '1032421433050-udre26bkmd8q7j0deet6ardtk34lp1c1.apps.googleusercontent.com'});
    request.execute(function(resp){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(resp));
    });
  });

  constructor() { }

}
