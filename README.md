#hed248_final_project
final project for Applied Internet Technology 


WILD 

Overview: 

WILD is a web application that provides users with an equipment list 
to go backpacking or sea kayaking, as well as a list of destinations. 
On on kayaking page, users can view a list of required equipment, as well 
as add equipment to that list. The same goes for the backpacking page. 

On the destinations page, the user can add destinations to the list, 
as well as filter destinations that are specifically for backpacking or 
kayaking. When filtering, the form is case sensitive so please use 'Backpacking'
or 'Kayaking'. Same for adding a destination, in the type input field, please use 
'Backpacking' or 'Kayaking'. Also on this page the user can view a destination of 
the month, view a map of this destination, as well as the current temperature and 
humidity of this destination. 

 

Data Model: 

WILD will store kayakLists, backpackLists, and destinationLists. 
- by clicking on kayaking, backpacking, or destination tab in the navigation bar, user will 
be taken to a new page that either shows a list of required equipment that they will 
need for their trip, which they can add to, or a list of destinations, which they can also add to 
- user can also filter destinations depending if they are meant for a kayaking trip or backpacking trip
- when filtering and adding a new destination, type is case sensitive; use Kayaking or Backpacking 

var KayakItem = new mongoose.Schema({
	name: String, 
	quantity: Number, 
	price: String, 
	description: String, 
	url: String 
}); 

var KayakList = new mongoose.Schema({
	kayakEquipment: [KayakItem]
}); 

var BackpackItem = new mongoose.Schema({
	name: String, 
	quantity: Number, 
	price: String, 
	description: String, 
	url: String 
}); 

var BackpackList = new mongoose.Schema({
	backpackEquipment: [BackpackItem]
}); 

var Destination = new mongoose.Schema({
	location: String, 
	description: String, 
	url: String, 
	type: String
}); 

var DestinationList = new mongoose.Schema({
	places: [Destination]
}); 


Wireframes: 
Hand drawn 

Site map: 
Hand drawn 

User Stories: 
1. as a user, I can view an equipment list for kayaking 
2. as a user, I can add items the kayaking equipment list  
3. as a user, I can view an equipment list for backpacking 
4. as a user, I can add items the backpacking equipment list  
5. as a user, I can view a list of destinations for kayaking or backpacking 
6. as a user, I can add destinations to that list
7. as a user, I can filter the list of destinations to only show destinations for 
kayaking or backpacking 
8. as a user, I can view a 'destination of the month', see a map of this destination, as well 
as the current temperature and humidity of this destination 

Reasearch Topics: 

(2 points) Use a CSS framework throughout your site
- Bootstrap 
- theme for the site 
- pulls the whole site together, makes it more visually appealing 
and easy to navigate 
- do not have a specific Bootstrap theme in mind yet 
- homepage carousel from Cluster - Creative Portfolio Template 
- use bootstrap grid feature to style the forms  

(4 points) Perform client side form validation using custom JavaScript 
- errors 
- each page, kayaking, backpacking, and destinations has its own js file 
that does not let the user add to a form if all of the fields are not filled out 

(1 point) Google Maps 
- uses API to display a map of the destination of the month 

(1 point) Weather API 
- displays the current temperature and current humidity of the destination of the month 


