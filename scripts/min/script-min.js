$(document).ready(function(){for(var e=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}}),n=document.querySelectorAll("section.panel"),o=0;o<n.length;o++)new ScrollMagic.Scene({triggerElement:n[o]}).setPin(n[o]).addIndicators().addTo(e)});