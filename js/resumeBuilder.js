'use strict';

var data = "%data%";

bio.display = function(){

	var $header = $("#header");
	var $topContacts = $("#topContacts");
	var $footerContacts = $("#footerContacts");
	var formattedbioPic = HTMLbioPic.replace(data, this.bioPic);
	var formattedMobile = HTMLmobile.replace(data, this.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, this.contacts.email);
	var formattedGithub = HTMLgithub.replace(data, this.contacts.github);
	var formattedLocation = HTMLlocation.replace(data, this.contacts.location);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, this.welcomeMessage);

	$header.append(formattedbioPic);
	$topContacts.append(formattedMobile);
	$footerContacts.append(formattedMobile);
	$topContacts.append(formattedEmail);
	$footerContacts.append(formattedEmail);
	$topContacts.append(formattedGithub);
	$footerContacts.append(formattedGithub);
	$topContacts.append(formattedLocation);
	$footerContacts.append(formattedLocation);
	$header.append(formattedWelcomeMsg);

	if (this.skills.length) {
		$header.append(HTMLskillsStart);
	}

	var $skills = $("#skills");
	var formattedSkill = "";

	for (var i = 0; i < this.skills.length; i++) {
		
		formattedSkill = formattedSkill + HTMLskills.replace(data, this.skills[i]);
	}
	
	$skills.append(formattedSkill);
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
	var workEntrySections = "";

	for (var i = 0; i < this.jobs.length; i++) {

		var job = this.jobs[i];
		var formatedEmployer = HTMLworkEmployer.replace(data, job.employer);
		var formattedTitle = HTMLworkTitle.replace(data, job.title);
		var formattedEmployerTitle = formatedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace(data, job.location);
		var formattedDates = HTMLworkDates.replace(data, job.dates);
		var formattedDescription = HTMLworkDescription.replace(data, job.description);
		var workEntry = formattedEmployerTitle + formattedLocation + formattedDates + formattedDescription;
		
		workEntrySections = workEntrySections + HTMLworkStart.replace(data, workEntry);
	}

	$workExperience.append(workEntrySections);
}	

projectHistory.display = function() {

	var $projects = $("#projects");
	var projectDetailsSections = "";

  	for (var i = 0; i < this.projects.length; i++) {

  		var project = this.projects[i];
  		var formattedProjectTitle = HTMLprojectTitle.replace(data,project.title);  		
  		var formattedProjectDates = HTMLprojectDates.replace(data,project.dates);
  		var formattedProjectDescription = HTMLprojectDescription.replace(data,project.description);
  		var formattedProjectImage = HTMLprojectImage.replace(data, project.images);
  		var projectDetails = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;

  		projectDetailsSections = projectDetailsSections + HTMLprojectStart.replace(data, projectDetails);
  	}

  	$projects.append(projectDetailsSections);
}

education.display = function() {

	var $education = $("#education");
	var EducationHistorySections = "";

	for (var i = 0; i < this.universities.length; i++) {

		var university = this.universities[i];
		var formattedSchoolName = HTMLschoolName.replace(data,university.name);
		var formattedDegree = HTMLschoolDegree.replace(data,university.degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
		var formattedSchoolDates = HTMLschoolDates.replace(data,university.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data,university.location);
		var formattedSchoolMajor = HTMLschoolMajor.replace(data,university.majors);
		var educationHistory = formattedSchoolNameDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

		EducationHistorySections = EducationHistorySections + HTMLschoolStart.replace(data,educationHistory);
	}

	$education.append(EducationHistorySections);

	var onlineCoursesHistorySections = "";

	if (this.onlineCourses.length) {
		$education.append(HTMLonlineClasses);
	}

	for (var i = 0; i < this.onlineCourses.length; i++) {

		var onlineCourse = education.onlineCourses[i];
		var formattedonlineTitle = HTMLonlineTitle.replace(data,onlineCourse.title);
		var formattedonlineSchool = HTMLonlineSchool.replace(data,onlineCourse.school);
		var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
		var formattedonlineDates = HTMLonlineDates.replace(data,onlineCourse.dates);
		var formattedonlineURL = HTMLonlineURL.replace(data,onlineCourse.URL);
		var onlineCoursesHistory = formattedonlineTitleSchool + formattedonlineDates + formattedonlineURL;

		onlineCoursesHistorySections =  onlineCoursesHistorySections + HTMLonlineStart.replace(data,onlineCoursesHistory);
	} 

	$education.append(onlineCoursesHistorySections);
}

DisplayHeader();
bio.display();
work.display();
projectHistory.display();
education.display();
