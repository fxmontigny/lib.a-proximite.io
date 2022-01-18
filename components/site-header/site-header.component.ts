import { DOCUMENT } from "@angular/common";
import { Component, HostBinding, HostListener, Inject, AfterViewInit } from "@angular/core";
import { MainClass } from "lib/libs/main-class";

@Component({
  selector: "site-header",
  templateUrl: "./site-header.component.html",
  styleUrls: ["./site-header.component.scss"],
})
export class SiteHeaderComponent extends MainClass implements AfterViewInit {
  showPopupMenu: boolean = false;
	@HostBinding('class.is-scrolled') isScrolled = false;

  constructor(@Inject(DOCUMENT) private document: any) {
    super();
  }

  ngAfterViewInit() {
		this.updateHeaderStyle();
	}

  isActive(path) {
    return this.document.location.href === path;
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll() {
    this.updateHeaderStyle();
  }

  updateHeaderStyle() {
		if(window.scrollY) {
			this.isScrolled = true;
		} else {
			this.isScrolled = false;
		}
	}
}
