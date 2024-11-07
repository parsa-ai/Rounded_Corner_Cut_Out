This is a component for an angular to create modern rounded corner so easy :)

how use this ? so so easy ! 
copy this folder and paste in your app folder. then import that shape you need, down you ceart your modern rounded ! 


*for create rounded in corner import CornerComponent and :

<div class="box">
  <app-corner style="position: absolute; right: 0;"  [property_corner]="{w: '6rem', h: '6rem', size: '3rem' ,main: '2rem', pos: 'tr',bg : '#fdfdfd'}"></app-corner>
</div>

in this code box is our main div and app-corner is our rounded , property_corner set the our rounded shape :
w -> width
h -> height
bg -> background-color
pos -> position (tr -> top right , tl -> top left , br -> bottom right , bl -> bottom left)
size -> this is rounded size 
main -> this is main rounded size if you dont set main = size 

*for create rounded in center import CenterComponent and :

<div class="box">
  <app-center [property]="{w: '6rem', h: '6rem', size: '3rem', pos: 'tr',bg : '#fdfdfd'}"></app-center>
</div>


in this code box is our main div and app-corner is our rounded , property  set the our rounded shape :
w -> width
h -> height
bg -> background-color
pos -> position (tr -> top right , tl -> top left , br -> bottom right , bl -> bottom left)
size -> this is rounded size 
main -> this is main rounded size if you dont set main = size 

if we want add a circle in this : 

<div class="box">
  <app-center [property]="{w: '6rem', h: '6rem', size: '3rem', pos: 'tr',bg : '#fdfdfd'}">
    <app-dote-center [property_dote]="{w: '3rem', h: '3rem', br: '3rem'}" ></app-dote-center>
  </app-center>
</div>

in this code box is our main div and app-corner is our rounded , property_dote set the our rounded shape :
w -> width
h -> height
bg -> background-color
br -> this is rounded size 
