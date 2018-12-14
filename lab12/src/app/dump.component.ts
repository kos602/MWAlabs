import { Component, Input } from '@angular/core'

@Component({
	selector: 'myLi',
	template: '<li>{{item}}</li>',
	styles: [],
})
export class DumpComponent{
	@Input() item: string;
}
