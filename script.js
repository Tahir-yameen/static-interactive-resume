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
        title: "Fresher",
        company: "",
        date: "",
        description: "Developing and maintaining different websites."
    },
    {
        title: "Learning Skills",
        company: "",
        date: "",
        description: "Creating new features & exploring differnt bug fixes."
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
    },
    {
        title: "Sanity Studio",
        description: "A real-time content creation and management application"
    }
];
function populateExperience() {
    var experienceList = document.getElementById('experience-list');
    if (!experienceList)
        return;
    experiences.forEach(function (exp) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "<strong>".concat(exp.title, "</strong> ").concat(exp.company, " ").concat(exp.date, "<br>").concat(exp.description);
        // listItem.innerHTML = `<strong>${exp.title}</strong> at ${exp.company} (${exp.date})<br>${exp.description}`;
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
