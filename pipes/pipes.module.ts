import { NgModule } from '@angular/core';
import { UcFirstPipe } from './uc-first/uc-first.pipes';
import { SlugString } from './slug-string/slug-string.pipes';
import { SanitizeStylePipe } from './sanitize-style/sanitize-style.pipe';
import { SanitizeHtmlPipe } from './sanitize-html/sanitize-html.pipe';
import { SanitizeUrlPipe } from './sanitize-url/sanitize-url.pipe';
import { SanitizeResourceUrlPipe } from './sanitize-resource-url/sanitize-resource-url.pipe';

const list = [ UcFirstPipe, SlugString, SanitizeStylePipe, SanitizeHtmlPipe, SanitizeUrlPipe, SanitizeResourceUrlPipe ];

@NgModule({
	declarations: [ ...list ],
	exports: list
})
export class PipesModule {}
