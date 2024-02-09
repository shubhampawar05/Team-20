// "content_scripts":[
//     {
//       "matches":["https://*.youtube.com/*"],
//       "js":["contentscript.js"]
//     }
//   ],

// ja bhi extenstion ko match url ke ander ka url milega us page ke anddar jo bhi changes kerna hai wo contenstscript.js file se krte hai 
// bole to existing content ke ander kuch bhi add krna like in our case adding + icon in youtube page and link in this case is https//:youtube.com 
alert('this is a youtube page')