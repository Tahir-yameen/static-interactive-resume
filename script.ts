function toggleSectionVisibility() {
    const section = document.getElementById('toggleSection');
    
    if (section) {
      if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    }
  }
  
  // Set up the event listener on the button
  window.onload = () => {
    const toggleButton = document.getElementById('toggleButton');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleSectionVisibility);
    }
  };

interface ExperienceItem {
    title: string;
    company: string;
    date: string;
    description: string;
}

const experiences: ExperienceItem[] = [
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

interface SkillsItem {
    title: string;
    description: string;
}

const skills: SkillsItem[] = [
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


function populateExperience(): void {
    const experienceList = document.getElementById('experience-list');
    if (!experienceList) return;

    experiences.forEach(exp => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${exp.title}</strong> ${exp.company} ${exp.date}<br>${exp.description}`;
        // listItem.innerHTML = `<strong>${exp.title}</strong> at ${exp.company} (${exp.date})<br>${exp.description}`;
        experienceList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', populateExperience);

function populateSkills(): void {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    skills.forEach(ski => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${ski.title}</strong> - ${ski.description}`;
        skillsList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', populateSkills);
