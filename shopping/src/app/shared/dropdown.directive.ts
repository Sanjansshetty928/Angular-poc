import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective{
    @HostBinding('class.open') isOpen=false;
    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
    }
    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //     //to get base or root element
    //     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //   }
    //   constructor(private elRef: ElementRef) {}
}