import {Component, OnInit} from "@angular/core";
import {RepoService} from "../repo.service";
import { Item } from '../item';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
 
})
export class RepoComponent implements OnInit {
  selectedRepo: Item;
  _repoArray: Item[] =[];
  langArray: String[]  =[];
  value : String;
  constructor(private repoSerivce: RepoService) { }

  getReposByLanguage(): void {
      this.repoSerivce.getRepos()
          .subscribe(
              resultArray => {this._repoArray = resultArray;
              
                for(var i=0;  i<this._repoArray.length; i++ ){
                 // Will remove all falsy values: undefined, null, 0, false, NaN and "" (empty string) but not working              
                  if(this._repoArray[i].language){
                    this.langArray[i]=this._repoArray[i].language;
                  }   
                } 
                this.getUniqueElements();  
              })  
  }
 getUniqueElements(){
  this.langArray= Array.from(new Set(this.langArray));
 }
  onSelect(repo: Item): void {
    console.log(this._repoArray);
    
    this.selectedRepo = repo;
   
  }
  ngOnInit(): void {
      this.getReposByLanguage();
    }
  ngAfterContentInit(){}	

}
