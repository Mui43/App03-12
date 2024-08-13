import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonChip, IonAvatar, IonIcon, IonDatetime, IonList, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import { closeCircle } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonInput, IonList, IonDatetime, IonIcon, IonAvatar, IonChip, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem,IonLabel, ]
})
export class Tab2Page {
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };


  constructor() {
    addIcons({closeCircle})
  }

}
