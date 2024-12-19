// Translations for the portfolio
const translations = {
    en: {
      aboutMe: "About Me",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      welcomeHeading: "Hi, It's Ilias",
      welcomeSubHeading: "I am a",
      aboutMeSection: " Web Developer with 3 years of using Java and PHP and their frameworks - Javascript, React, Python , blender. Developed over 11 websites from scratch at Siteground, improved security by 25%, and attracted 500K new customers to SportsBet after developing & implementing new data-driven features. Seeking opportunity to leverage front-end & back-end skills and increase customer engagement at Hopper.",
      downloadCV: "Download CV",
       talkWithUs:"talk to us",
       sendMS:"send message",
       readMore:"read more",
       upscaleDesc:"The upscale AI, a tool for upscaling images.",
       chatappDes:"  The chat app, for real time communication.",
       autopitchDesc:"    Auto-pitch AI, a vocal correcter tool ."
    },
    fr: {
      aboutMe: "À propos de moi",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      welcomeHeading: "Salut, c'est Ilias",
      welcomeSubHeading: "Je suis un",
      talkWithUs:"contacter nous",
      sendMS :"envoyer un message",
      readMore:"lire plus",
      upscaleDesc: "Upscale AI, un outil pour améliorer la résolution des images.",
      chatappDes: "Chat App, pour une communication en temps réel.",
      autopitchDesc: "Auto-pitch AI, un outil de correction vocale.",
      aboutMeSection: "Développeur web avec 3 ans d'expérience en Java et PHP ainsi que leurs frameworks - Javascript, React, Python, Blender. J'ai développé plus de 11 sites web à partir de zéro chez Siteground, amélioré la sécurité de 25 % et attiré 500 000 nouveaux clients chez SportsBet après avoir développé et mis en œuvre de nouvelles fonctionnalités basées sur les données. Je recherche une opportunité pour exploiter mes compétences en front-end et back-end et augmenter l'engagement des clients chez Hopper.",
      downloadCV: "Télécharger le CV",
    }
  };
  
  // Function to change language
  function changeLanguage() {
    const select = document.getElementById("languageSelect");

    const selectedLanguage = select.value;
    const selectedOption = select.options[select.selectedIndex];
    const flagSrc = selectedOption.getAttribute("data-flag");
  
    // Update the background image of the select element
    select.style.backgroundImage = `url(${flagSrc})`;
  
    // Update text content dynamically
    const langData = translations[selectedLanguage];
    document.querySelector('[data-lang="about-me"]').textContent = langData.aboutMe;
    document.querySelector('[data-lang="services"]').textContent = langData.services;
    document.querySelector('[data-lang="projects"]').textContent = langData.projects;
    document.querySelector('[data-lang="contact"]').textContent = langData.contact;
    document.querySelector(".btn-primary").textContent = langData.sendMS;
    const readMoreButtons = document.querySelectorAll(".swiper-slide .content .btn");

readMoreButtons.forEach((button) => {
  button.textContent = langData.readMore; 
});


document.getElementById("desc1").textContent = langData.upscaleDesc;
document.getElementById("desc2").textContent = langData.chatappDes;
document.getElementById("desc3").textContent = langData.autopitchDesc;
    document.querySelector(".welcome h1").textContent = langData.welcomeHeading;
    document.querySelector(".welcome span").textContent = langData.welcomeSubHeading;
    document.querySelector(".info h1").textContent = langData.aboutMe;
  
    document.querySelector(".info_text p").textContent = langData.aboutMeSection;
    document.querySelector(".from_title").textContent = langData.talkWithUs;
    document.getElementById("downloadCV").textContent = langData.downloadCV;
  
   
  }
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", () => {
    changeLanguage();
  });
  