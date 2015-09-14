var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills"></ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineStart = '<div class="education-online"></div>';
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var bio = {
	"name": "Ekaterina Zakharova",
	"role": "Web-developer",
	"contacts": {
		"mobile": "0468494740",
		"email": "ekaterina.zhr@gmail.com",
		"github": "zakharek",
		"location": "Sydney, Australia"
	},
	"welcomeMessage": "Lorem ipsum dolor sit amet, te populo splendide interpretaris vix, an eos praesent pericula reprehendunt.",
	"skills": ["HTML", "CSS", "JS","Python"],
	"bioPic": "images/my_picture.jpg"
}

var education = {
	"universities": [
	{
		"name":"Volgograd State Technical University",
		"location":"Volgograd,Volgorgadskaya oblast,Russia",
		"degree":"Master of economy",
		"majors":["world economy", "macroeconomy", "microeconomy", "statistics"],
		"dates":2007,
		"URL":"http://www.vstu.ru/en"
	}
	],
	"onlineCourses": [
	{
		"title":"Certificate IV Web-Based Technologies (design and development)",
		"school":"Nothern Sydney Institute (TAFE)",
		"dates":"July 2014 - July 2015",
		"URL":"http://www.holmesglen.edu.au/programs"
	},
	{
		"title":"Programming for Everybody (Python)",
		"school":"University of Michigan",
		"dates":"June 2015 - August 2015",
		"URL":"https://www.coursera.org/course/pythonlearn"	
	},
	{
		"title":"Front-End Web Developer Nanodegree",
		"school":"Udacity",
		"dates":"August 2015 - February 2016",
		"URL":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"	
	}
	]
}

var work = {
	"jobs": [
	{
		"employer":"Henkel",
		"title":"Purchasing Officer",
		"location":"Moscow, Russia",
		"dates":"Sept 2010 - 2012",
		"description":"Lorem ipsum dolor sit amet, te populo splendide interpretaris vix, an eos praesent pericula reprehendunt. Utroque laboramus est id. Postea semper eos ut, elit nobis postulant at eam. Error graecis recteque ut qui, populo alienum id usu. Pri eu simul zril, urbanitas dissentiet cu ius."		
	},
	{
		"employer":"Asics Oceania",
		"title":"Purchasing Officer",
		"location":"Sydney, Australia",
		"dates":"Sept 2012 - current",
		"description":"Lorem ipsum dolor sit amet, te populo splendide interpretaris vix, an eos praesent pericula reprehendunt. Utroque laboramus est id. Postea semper eos ut, elit nobis postulant at eam. Error graecis recteque ut qui, populo alienum id usu. Pri eu simul zril, urbanitas dissentiet cu ius."
	}
	]
}

var projects = {
	"projects": [
	{
		"title":"Project1",
		"dates":"July 2014",
		"description":"Lorem ipsum dolor sit amet, te populo splendide interpretaris vix, an eos praesent pericula reprehendunt. Utroque laboramus est id. Postea semper eos ut, elit nobis postulant at eam. Error graecis recteque ut qui, populo alienum id usu. Pri eu simul zril, urbanitas dissentiet cu ius.",
		"images": ["images/project1.jpg"]
	},
	{
		"title":"Project2",
		"dates":"September 2014",
		"description":"Lorem ipsum dolor sit amet, te populo splendide interpretaris vix, an eos praesent pericula reprehendunt. Utroque laboramus est id. Postea semper eos ut, elit nobis postulant at eam. Error graecis recteque ut qui, populo alienum id usu. Pri eu simul zril, urbanitas dissentiet cu ius.",
		"images": ["images/project2.jpg"]
	},
	{
		"title":"Project3",
		"dates":"November 2014",
		"description":"Lorem ipsum dolor sit amet, te populo splendide interpretaris vix, an eos praesent pericula reprehendunt. Utroque laboramus est id. Postea semper eos ut, elit nobis postulant at eam. Error graecis recteque ut qui, populo alienum id usu. Pri eu simul zril, urbanitas dissentiet cu ius.",
		"images": ["images/project3.jpg"]
	}
	]
};