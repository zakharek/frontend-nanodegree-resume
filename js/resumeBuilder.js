var headerWithName = HTMLheaderName.replace("%data%","Ekaterina Zakharova");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(headerWithName);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}

for (var i = 0; i < bio.skills.length; i++) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}

displayWork();
ProjectDisplay();
EducationDisplay();

function displayWork() {

	for (var i = 0; i < work.jobs.length; i++) {

		var job = work.jobs[i];

		$("#workExperience").append(HTMLworkStart);	

		var formatedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		var formattedEmployerTitle = formatedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}	
}	

  function ProjectDisplay() {
  	for (var i = 0; i < projects.projects.length; i++) {

  		var project = projects.projects[i];
  		$("#projects").append(HTMLprojectStart);  

  		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
  		$(".project-entry:last").append(formattedProjectTitle);

  		var formattedProjectDates = HTMLprojectDates.replace("%data%",project.dates);
  		$(".project-entry:last").append(formattedProjectDates);

  		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",project.description);
  		$(".project-entry:last").append(formattedProjectDescription);
  		var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
  		$(".project-entry:last").append(formattedProjectImage);
  	}
}

function EducationDisplay() {

	for (var i = 0; i < education.universities.length; i++) {

		$("#education").append(HTMLschoolStart); 

		var university = education.universities[i];
		var formattedSchoolName = HTMLschoolName.replace("%data%",university.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",university.degree);

		var formattedSchoolNameDegree = formattedSchoolName+formattedDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",university.dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",university.location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",university.majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}

	for (var i = 0; i < education.onlineCourses.length; i++) {

		$("#education").append(HTMLonlineStart);

		var onlineCourse = education.onlineCourses[i];
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);

		var formattedonlineTitleSchool = formattedonlineTitle+formattedonlineSchool;
		$(".education-online:last").append(formattedonlineTitleSchool);

		var formattedonlineDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
		$(".education-online:last").append(formattedonlineDates);

		var formattedonlineURL = HTMLonlineURL.replace("%data%",onlineCourse.URL);
		$(".education-online:last").append(formattedonlineURL);
	} 
}



