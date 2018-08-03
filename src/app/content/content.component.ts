import { Component, OnInit } from '@angular/core';
import { Compte } from '../domaine/compte';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data: Compte[];

  constructor(private _service: ComptesService) { }

  ngOnInit() {
     this._service.getAllCompts().subscribe(
      res => this.data = res
    );
  }

}
