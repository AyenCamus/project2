var bio = {
  "name": "ADRIENNE CAMUS",
  "role": "Front-End Web Developer",
  "contacts": 
    {
      "mobile": "(928) 202-0039",
      "email": "adrienne.camus@gmail.com",
      "twitter": "AyenCamus",
      "gitHub": "AyenCamus",
      "blog": "blog site",
      "location": "Seattle, WA"
    },
  "pictureURL": "images/ayen.jpg",
  "welcomeMessage": "Welcome!",
  "skills": ["programming", "illustration", "front-end web design"]
};

var education = {
  "schools": [
    {
      "name": "University of Arizona",
      "degree": "",
      "dates": "2009-2012",
      "location": "Tucson, AZ",
      "major": ["French, Creative Writing"]
    },
    {
      "name": "Code Fellows",
      "degree": "certificate, not complete",
      "dates": "2014",
      "location": "Seattle, WA",
      "major": ["Front-End Web Development"]
    }
  ],

  "onlineClasses": [
    {
      "title": "Front-End Web Development",
      "school": "Udacity",
      "dates": "2015",
      "URL": "https://www.udacity.com/"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Pimpin' Daddy",
      "title": "Bottom Bitch",
      "location": "Seattle, WA",
      "dates": "2010-2012",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
         aliquip ex ea commodo consequat."
    },
    {
      "employer": "A Company",
      "title": "Worst Employee",
      "location": "Tucson, AZ",
      "dates": "2012-2013",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
        aliquip ex ea commodo consequat."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "N/A",
      "dates": "N/A",
      "description": "N/A",
      "images": ""
    },
    {
      "title": "N/A",
      "dates": "N/A",
      "description": "N/A",
      "images": ""
    }
  ]
}

function displayName() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
}

displayName();

function displayContacts() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  // var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  // $("#topContacts").append(formattedTwitter);

  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
  $("#topContacts").append(formattedGitHub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
}

displayContacts();

function displayPicSkills() {
  var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").prepend(formattedPic);
  // var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  // $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart); 

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
  }
}

displayPicSkills();



function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  var wholeName = name.trim().split(" ");

  var firstName = wholeName[0].toLowerCase();
  var firstLetter = firstName.substring(0,1).toUpperCase();
  var formattedFirst = firstLetter + firstName.substring(1); 

  var lastName = wholeName[1].toUpperCase();
  
  return formattedFirst + " " + lastName;
}

$("#main").append(internationalizeButton);



projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();

education.display = function (){
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
  }

  for (course in education.onlineClasses) {
    $("#education").append(HTMLonlineClasses);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
    $(".online-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
    $(".online-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
    $(".online-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].URL);
    $(".online-entry:last").append(formattedURL);
  }
}

education.display();

$("#mapDiv").append(googleMap);