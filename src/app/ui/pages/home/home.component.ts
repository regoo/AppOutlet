import { Component, OnInit } from '@angular/core';
import { Application } from '../../../model/application.model';
import { ApplicationService } from '../../../service/application/application.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    recentlyUpdatedApps: Application[] = [];
    recentlyAddedApps: Application[] = [];

    constructor(private applicationService: ApplicationService) {}

    ngOnInit(): void {
        this.getRecentlyAddedApps();
        this.getRecentlyUpdatedApps();
    }

    private getRecentlyAddedApps() {
        this.applicationService.getRecentlyAdded().then((apps) => {
            debugger;
            this.recentlyAddedApps = apps;
        });
    }

    private getRecentlyUpdatedApps() {
        this.applicationService.getRecentlyUpdated().then((apps) => {
            debugger;
            this.recentlyUpdatedApps = apps;
        });
    }
}