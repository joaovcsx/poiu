import { Component, Input, OnInit }    from '@angular/core';
import { MessageService }              from 'src/services/message.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

    constructor(
        private message: MessageService
    ) { }

    @Input() title: string = '';

    ngOnInit(): void {
    }

    collapsedMenu() {
        this.message.sendMessage('menuToggle');
    }

}
