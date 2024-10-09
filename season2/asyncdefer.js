//normal script tags: html parsing stops when script is encountered and script is fetched and executed and then html parsing continues
//script tag with async : html parsing and script fetching happens simultaneously and script execution happens as soon as the script is fetched and then html parsing continues
//script tag with defer: html parsing and script fetching happens simultaneously and script execution happens only after the html parsing is done.

//but when to async and when to use defer
//defer excutes the script in the order they are present in the html file it better to use defer when the script depends on the html elements
//async executes the script as soon as it is fetched and it is better to use async when the script does not depend on the html elements