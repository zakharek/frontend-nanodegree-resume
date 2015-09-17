'use strict';

var data = "%data%";

bio.display = function(){

	var $header = $("#header");
	var $topContacts = $("#topContacts");
	var $footerContacts = $("#footerContacts");
	var $skills = $("#skills");

	var formattedbioPic = HTMLbioPic.replace(data, this.bioPic);
	$header.append(formattedbioPic);

	var formattedMobile = HTMLmobile.replace(data, this.contacts.mobile);
	$topContacts.append(formattedMobile);
	$footerContacts.append(formattedMobile);

	var formattedEmail = HTMLemail.replace(data, this.contacts.email);
	$topContacts.append(formattedEmail);
	$footerContacts.append(formattedEmail);

	var formattedGithub = HTMLgithub.replace(data, this.contacts.github);
	$topContacts.append(formattedGithub);
	$footerContacts.append(formattedGithub);

	var formattedLocation = HTMLlocation.replace(data, this.contacts.location);
	$topContacts.append(formattedLocation);
	$footerContacts.append(formattedLocation);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, this.welcomeMessage);
	$header.append(formattedWelcomeMsg);

	if (this.skills.length) {
		$header.append(HTMLskillsStart);
	}

	for (var i = 0; i < this.skills.length; i++) {
		var formattedSkill = HTMLskills.replace(data, this.skills[i]);
		$skills.append(formattedSkill);
	}
}

function DisplayHeader(){

	var $header = $("#header");
	var headerWithName = HTMLheaderName.replace(data,"Ekaterina Zakharova");

	var role = "Web Developer";
	var formattedRole = HTMLheaderRole.replace(data,role);

	$header.prepend(formattedRole);
	$header.prepend(headerWithName);
}


work.display = function () {

	var $workExperience = $("#workExperience");

	for (var i = 0; i < this.jobs.length; i++) {

		var job = this.jobs[i];

		$workExperience.append(HTMLworkStart);	

		var formatedEmployer = HTMLworkEmployer.replace(data, job.employer);
		var formattedTitle = HTMLworkTitle.replace(data, job.title);
		var formattedLocation = HTMLworkLocation.replace(data, job.location);
		var formattedDates = HTMLworkDates.replace(data, job.dates);
		var formattedDescription = HTMLworkDescription.replace(data, job.description);
		var formattedEmployerTitle = formatedEmployer + formattedTitle;

		$(".work-entry:last").append(
			formattedEmployerTitle,
			formattedLocation,
			formattedLocation,
			formattedDescription);
	}	
}	

projectHistory.display = function() {

	var $projects = $("#projects");

  	for (var i = 0; i < this.projects.length; i++) {

  		var project = this.projects[i];
  		$projects.append(HTMLprojectStart);  

  		var formattedProjectTitle = HTMLprojectTitle.replace(data,project.title);  		
  		var formattedProjectDates = HTMLprojectDates.replace(data,project.dates);
  		var formattedProjectDescription = HTMLprojectDescription.replace(data,project.description);
  		var formattedProjectImage = HTMLprojectImage.replace(data, project.images);
  		
  		$(".project-entry:last").append(
  			formattedProjectTitle,
  			formattedProjectDates,
  			formattedProjectDescription,
  			formattedProjectImage);
  	}
}

education.display = function() {

	var $education = $("#education");

	for (var i = 0; i < this.universities.length; i++) {

		$education.append(HTMLschoolStart); 

		var university = this.universities[i];
		var formattedSchoolName = HTMLschoolName.replace(data,university.name);
		var formattedDegree = HTMLschoolDegree.replace(data,university.degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
		var formattedSchoolDates = HTMLschoolDates.replace(data,university.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data,university.location);
		var formattedSchoolMajor = HTMLschoolMajor.replace(data,university.majors);
		
		$(".education-entry:last").append(
			formattedSchoolNameDegree,
			formattedSchoolDates,
			formattedSchoolLocation,
			formattedSchoolMajor);
	}

	if (this.onlineCourses.length) {
		$education.append(HTMLonlineClasses);
	}

	for (var i = 0; i < this.onlineCourses.length; i++) {

		$education.append(HTMLonlineStart);

		var onlineCourse = education.onlineCourses[i];
		var formattedonlineTitle = HTMLonlineTitle.replace(data,onlineCourse.title);
		var formattedonlineSchool = HTMLonlineSchool.replace(data,onlineCourse.school);
		var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
		var formattedonlineDates = HTMLonlineDates.replace(data,onlineCourse.dates);
		var formattedonlineURL = HTMLonlineURL.replace(data,onlineCourse.URL);
		
		$(".education-online:last").append(
			formattedonlineTitleSchool,
			formattedonlineDates,
			formattedonlineURL);
	} 
}

DisplayHeader();
bio.display ();
work.display ();
projectHistory.display ();
education.display ();
