name = Simple
description = A simple 3 column layout demonstrating mobile first and Susy.
preview = preview.png
template = simple-layout

; Regions
regions[branding]       = Branding
regions[header]         = Header
regions[navigation]     = Navigation bar
regions[highlighted]    = Highlighted
regions[help]           = Help
regions[content]        = Content
regions[sidebar_first]  = First sidebar
regions[sidebar_second] = Second sidebar
regions[footer]         = Footer

; Stylesheets
stylesheets[all][] = css/layouts/simple/simple.layout.css
stylesheets[all][] = css/component.css
stylesheets[all][] = css/default.css
; this css is getting added successfully but I can't get the js to work?
; maybe it is because you have not adjusted the js to pickup the current menus

; Scripts
scripts[] = js/jquery.dlmenu.js
scripts[] = js/modernizr.custom.js