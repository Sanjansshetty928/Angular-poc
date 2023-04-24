import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
selector:'[appBasicHighlight]'
 
})
export class BasicHighDirective implements OnInit{
    constructor(private elementRef:ElementRef){}
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        this.elementRef.nativeElement.style.backgroundColor='grey';
    }

}