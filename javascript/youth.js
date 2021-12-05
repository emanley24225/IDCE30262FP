var youthicon = L.icon({
       iconUrl: 'https://img.icons8.com/ios/50/000000/tire-swing--v1.png',
       iconSize: [20,20]
 });
    var youth1 = L.marker([42.249809, -71.814774], {icon: youthicon}).addTo(map);{}
    youth1.bindPopup("<b> Boys & Girls Club Worcester </b> <br> <p> Our Mission is to help youth, especially those who need us most, develop the qualities needed to become responsible citizens and community leaders.</p> <br> <p> 65 Tainter Street Worcester, MA 01610 </p> <br> <a href= https://www.bgcworcester.org/ /> Here is the website </a>").openPopup();
     youth1.on("click", function(e) {
     map.setView(e.latlng, 14);
 });
   var youth2 = L.marker([42.271150, -71.844620], {icon: youthicon}).addTo(map);{}
   youth2.bindPopup("<b>Latino Education Institute </b> <br> <p>The mission of the Latino Education Institute is to improve the academic achievement and well-being of Latino students (grades K-16) and their families from the City of Worcester.</p> <br> <p>486 Chandler St, Worcester, MA 01602</p> <br> <a href=https://www.worcester.edu/Latino-Education-Institute/ /> Here is the website </a>").openPopup();
    youth2.on("click", function(e) {
    map.setView(e.latlng, 14);
 });
  var youth3 = L.marker([42.262770, -71.802520], {icon: youthicon}).addTo(map);{}
  youth3.bindPopup("<b></b>The Southeast Asian Coalition<br> <p> The Southeast Asian Coalition supports, promotes and advocates for the success of the Southeast Asian population of Central Massachusetts in their pursuit of naturalization while also maintaining their own unique cultural identity.</p> <br> <p>484 Main St STE 400, Worcester, MA 01608</p> <br> <a href=http://www.seacma.org/ /> Here is the website </a>").openPopup();
   youth3.on("click", function(e) {
   map.setView(e.latlng, 14);
 });
 var youth4 = L.marker([42.248160, -71.793020], {icon: youthicon}).addTo(map);{}
 youth4.bindPopup("<b>Division of Youth Opportunities, City of Worcester</b> <br> <p> Our Mission is to provide leadership, support and advocacy for youth through the introduction of coordinated programs focused on positive youth development and youth employment.</p> <br> <p> 128 Providence St, Worcester, MA 01604 </p> <br> <a href= http://www.worcesterma.gov/youth-opportunities /> Here is the website </a>").openPopup();
  youth4.on("click", function(e) {
  map.setView(e.latlng, 14);
 });
var youth5 = L.marker([42.261900, -71.825750], {icon: youthicon}).addTo(map);{}
youth5.bindPopup("<b> Worcester Youth Center</b> <br> <p> Our Mission is to to provide a safe haven where young people can make lasting, positive changes in their lives while sharpening skills, establishing relationships and realizing their full potential.</p> <br> <p>326 Chandler St, Worcester, MA 01602</p> <br> <a href= https://worcesteryouthcenter.org/ /> Here is the website </a>").openPopup();
 youth5.on("click", function(e) {
 map.setView(e.latlng, 14);
 });
