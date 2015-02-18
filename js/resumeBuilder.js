$(document).ready(function(){
    $("#clickCircle").click(function(){
        $("#circle").css({

        //for firefox
        "-moz-animation-name":"rotatebox",
        "-moz-animation-duration":"2s",
        "-moz-animation-iteration-count":"1",
            "-moz-animation-fill-mode":"forwards",

        //for safari & chrome
        "-webkit-animation-name":"rotatebox",
        "-webkit-animation-duration":"2s",
        "-webkit-animation-iteration-count":"1",
        "-webkit-animation-fill-mode" : "forwards",

        }).toggle("scale", {percent: 200}, 2000);
       
    });
});

//begin bio section---------------------------------------------
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
  "skills": ["programming", "illustration", "front-end web design"],
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $("#topContacts").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart); 

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
    }

    var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
    $("#header").prepend(formattedPic);
  }
};

//begign education section---------------------------------------------
var education = {
  "schools": [
    {
      "name": "University of Arizona",
      "location": "Tucson, AZ",
      //"degree": "",
      "major": ["French, Creative Writing"],
      "dates": "2009-2011",
      "url": "www.arizona.edu"
    },
    {
      "name": "Code Fellows",
      "location": "Seattle, WA",
      "degree": "certificate, not complete",
      "major": ["Front-End Web Development"],
      "dates": "2014",
      "url": "www.codefellows.org"
    }
  ],

  "onlineCourses": [
    {
      "title": "Front-End Web Development",
      "school": "Udacity",
      "dates": "2015",
      "URL": "https://www.udacity.com/"
    }
  ],
  "display": function() {
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

    for (course in education.onlineCourses) {
      $("#education").append(HTMLonlineClasses);

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      $(".online-entry:last").append(formattedTitle);

      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".online-entry:last").append(formattedSchool);

      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".online-entry:last").append(formattedDates);

      var formattedURL = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].URL);
      $(".online-entry:last").append(formattedURL);
    }
  }
};

//begin work section---------------------------------------------
var work = {
  "jobs": [
    {
      "employer": "Company X",
      "title": "Person A",
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
  ],
  "display": function() {
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
};

//begin projects section---------------------------------------------
var projects = {
  "projects": [
    {
      "title": "N/A",
      "dates": "N/A",
      "description": "N/A",
      "images": "",
    },
    {
      "title": "N/A",
      "dates": "N/A",
      "description": "N/A",
      "images": ""
    }
  ],
  "display": function() {
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
};

//call functions
bio.display();
education.display();
work.display();
projects.display();

//google map
$("#mapDiv").append(googleMap);