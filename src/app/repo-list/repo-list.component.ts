import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {RepoService} from "../repo.service";

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepoListComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,
              private location: Location,
             private repoService: RepoService ) { }


          
           
  ngOnInit() {
    const language = this.route.snapshot.paramMap.get('value');
    console.log(language);
  }
}
