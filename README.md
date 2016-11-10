#hed248_final_project
final project for Applied Internet Technology 


WILD 

Overview: 

WILD is a web application that provides users with an equipment list 
to go backpacking. Once a user is logged in, he or she
keep track of the equipment they already own, as well as what equipment 
they still need to buy. They can also add personal items to the list 
that they wish to take that are not necessarily required. The site will 
have pictures next to each piece of required equipment to offer clearity 
for first time adventure seekers. 

WILD will also have a page of recommended places to backpack and sea-kayak. 
The user can add destinations to this list as he or she wishes. 

The last feature of WILD will be a place users can start recording travel 
plans. 

Data Model: 

WILD will store users, lists, and items. 
- User logs in 
- Required equipment list provided, user can check off equipment as they 
pack it; user can add equipment to the list 
- Recommended places to go provided, user can add to the list 
- User can add create a diary of his or her travel plans 

var User = new mongoose.Schema({
  //not exactly sure how to make user login with username and password 
  //will figure it out though 
}); 

var EquipmentItem = new mongoose.Schema({
  name: String, 
  quantity: Number, 
  checked: Boolean
}); 

var EquimentList = new mongoose.Schema({
  user: //user that logged in has control over this list 
  name: String, 
  items: [EquipmentItem]
}); 

var DestinationItem = new mongoose.Schema({
  location: String, 
  description: String 
});

var DestinationList = new mongoose.Schema({
  name: String, 
  place: [DestinationItem]
});

Wireframes: 
Hand drawn 

Site map: 
Hand drawn 

User Stories: 
1. as a user, I can login 
2. as a user, I can view a required equipment list 
3. as a user, I can check things off that list 
4. as a user, I can add items to that list 
5. as a user, I can view a recommended destinations list 
6. as a user, I can add destinations to that list


Reasearch Topics: 

(2 points) Use a CSS framework throughout your site
- Bootstrap 
- theme for the site 
- pulls the whole site together, makes it more visually appealing 
and easy to navigate 
- do not have a specific Bootstrap theme in mind yet 

(6 points) Integrate user authentification 
- login with username and password 
- so that the site is unique for each user who visits it 




