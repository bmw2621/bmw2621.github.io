

function setStyleSheet(){
  let style = document.getElementById("ss").getAttribute("href");
  var stylesheet = document.getElementById("ss");
   let url;
   console.log(style);

   if(style == "styles.css"){
     url = "styles_light.css";
   } else if(style == "styles_light.css"){
     url = "styles.css";
   }
   console.log(url);

   stylesheet.setAttribute('href', url);
 }
