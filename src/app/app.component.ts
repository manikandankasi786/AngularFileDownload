import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FileDownload';

  constructor(private http: HttpClient) {

  }

  download() {


    this.http.get('http://localhost:8080/download', 
    { responseType: "blob", headers: { 'Accept': 'application/octet-stream' } })
      .subscribe(blob => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "test.xlsx";
        a.click();
      });
  }
}
