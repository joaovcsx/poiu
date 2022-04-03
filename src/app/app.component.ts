import { Component, HostListener }  from '@angular/core';
import { Subscription }             from 'rxjs';
import { Menu }                     from 'src/interface/menu';
import { MessageService }           from 'src/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    
    @HostListener('window:resize', ['$event'])
    onResize() {
        let width = window.innerWidth
        if (width <= 425)
            this.platform = 'mobile'
        else if (width <= 768)
            this.platform = 'tablet'
        else
            this.platform = 'desktop';
    }

    constructor(
        private message: MessageService
    ) { }

    ngOnInit() {
        this.onResize();
    }

    private subscription$: Subscription = this.message.getData().subscribe((msg: string) => {
        if (msg == 'menuToggle')
            this.collapsed = !this.collapsed;
    });
    public collapsed = false;
    public platform = '';
    public menu_items: Array<Menu> = [
        { title: 'Initial page', icon: 'home'}
    ];

    public ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }
}
