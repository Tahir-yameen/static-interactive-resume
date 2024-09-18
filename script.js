function toggleSectionVisibility() {
    var section = document.getElementById('toggleSection');
    if (section) {
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
        }
        else {
            section.classList.add('hidden');
        }
    }
}
// Set up the event listener on the button
window.onload = function () {
    var toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSectionVisibility);
    }
};
var experiences = [
    {
        title: "Front-end Developer",
        company: "Tech Company",
        date: "Jan 2022 - Present",
        description: "Developing and maintaining the company's main website."
    },
    {
        title: "Intern",
        company: "Web Solutions",
        date: "Jun 2021 - Dec 2021",
        description: "Assisted in developing small features and bug fixes."
    }
];
var skills = [
    {
        title: "HTML",
        description: "Hyper Text Markup Language"
    },
    {
        title: "CSS",
        description: "Cascading Style Sheets"
    },
    {
        title: "TS",
        description: "TypeScript"
    },
    {
        title: "NextJS",
        description: "React Framework"
    }
];
function populateExperience() {
    var experienceList = document.getElementById('experience-list');
    if (!experienceList)
        return;
    experiences.forEach(function (exp) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "<strong>".concat(exp.title, "</strong> at ").concat(exp.company, " (").concat(exp.date, ")<br>").concat(exp.description);
        experienceList.appendChild(listItem);
    });
}
document.addEventListener('DOMContentLoaded', populateExperience);
function populateSkills() {
    var skillsList = document.getElementById('skills-list');
    if (!skillsList)
        return;
    skills.forEach(function (ski) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "<strong>".concat(ski.title, "</strong> - ").concat(ski.description);
        skillsList.appendChild(listItem);
    });
}
document.addEventListener('DOMContentLoaded', populateSkills);
