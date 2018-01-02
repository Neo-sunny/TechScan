import {Component, OnInit} from "@angular/core";
import {RepoService} from "./repo.service";
import {Repos} from "./repo";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent {
    
    title = 'TechScan';
}