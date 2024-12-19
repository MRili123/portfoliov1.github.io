// Dynamic Text Rotation
const textArray = ["3D Designer", "Web Developer", "Freelancer"];
const dynamicText = document.querySelector(".dynamic-text");
let i = 0;

function changeText() {
  // Update the text content
  dynamicText.textContent = textArray[i];
  i = (i + 1) % textArray.length;

  // Restart the animation
  const span = dynamicText.parentElement.querySelector("span");
  span.style.animation = "none"; // Temporarily disable animation
  requestAnimationFrame(() => {
    span.style.animation = ""; // Reapply animation
  });
}

// Call immediately to avoid initial delay
changeText();

// Set interval to change text every 5 seconds
setInterval(changeText, 5000);

// Handle Small Screens Navigation Toggle
function handleSmallScreens() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-menu');
  const modelContainer = document.querySelector('#model-container');

  navbarToggler.addEventListener('click', () => {
    const isMenuOpen = navbarMenu.classList.toggle('active'); // Toggle menu visibility

    if (isMenuOpen) {
      // Menu is open, add margin to #model-container
      modelContainer.classList.remove('nav-closed');
      modelContainer.classList.add('nav-opened');
    } else {
      modelContainer.classList.remove('nav-opened');
      modelContainer.classList.add('nav-closed');
    }
  });
}

// CV Download Functionality
document.getElementById('downloadCV').addEventListener('click', function () {
  const select = document.getElementById("languageSelect");
  const selectedLanguage = select.value;
  
  // Declare fileUrl outside the if/else block
  let fileUrl;
  if (selectedLanguage === "en") {
    fileUrl = 'asset/cv_en.pdf';
  } else {
    fileUrl = 'asset/cv_fr.pdf';
  }

  const fileName = 'IliasJebraneCV.pdf';

  // Create an anchor element
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;

  // Append to the body and trigger download
  document.body.appendChild(link);
  link.click();

  // Remove the link after triggering the download
  document.body.removeChild(link);
});


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', handleSmallScreens);

/* Created by Tivotal */

// projects 
/* Created by Tivotal */
// Projects 
var swiper = new Swiper(".slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    invert: false,
  },
});

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalButtons = document.querySelector(".model_btn");
  const closeModal = document.querySelector(".close-btn");

  // Define project data
  const projectData = [
    {
      title: "UPSCALE AI",
      desc_en: "The upscale AI is a powerful tool I developed to enhance the resolution and quality of images efficiently. Built using Python's robust `pip` library ecosystem, it leverages advanced algorithms to upscale images while preserving their original details and sharpness. Whether you're working with low-resolution graphics, pixelated photos, or any imagery requiring refinement, this tool ensures a smooth and professional enhancement process, making it ideal for designers, photographers, and anyone seeking high-quality visuals. Its implementation demonstrates the versatility of Python in creating practical, user-friendly solutions in the field of image processing.",
      desc_fr:"L'IA haut de gamme est un outil puissant que j'ai développé pour améliorer efficacement la résolution et la qualité des images. Construit à l'aide de l'écosystème robuste de la bibliothèque `pip` de Python, il utilise des algorithmes avancés pour augmenter la taille des images tout en préservant leurs détails et netteté d'origine. Que vous travailliez avec des graphiques de faible résolution, des photos pixelisées, ou toute image nécessitant un raffinement, cet outil garantit un processus d'amélioration fluide et professionnel, ce qui en fait un choix idéal pour les designers, photographes et toute personne recherchant des visuels de haute qualité. Sa mise en œuvre démontre la polyvalence de Python dans la création de solutions pratiques et conviviales dans le domaine du traitement d'images."
,
      demoLink: "https://example.com/upscale-demo",
      githubLink: "https://github.com/username/upscale",
      status: 'complete',
    },
    {
      title: "CHAT APP",
      desc_en: "The chat app is a dynamic platform designed to enable seamless communication among users directly within the application. It offers features such as real-time messaging, media sharing, and notifications, ensuring an engaging and interactive user experience. Whether for personal conversations, professional collaboration, or community interaction, the app provides a secure and intuitive environment for meaningful connections.",
      desc_fr: "L'application de chat est une plateforme dynamique conçue pour permettre une communication fluide entre les utilisateurs directement au sein de l'application. Elle offre des fonctionnalités telles que la messagerie en temps réel, le partage de médias et les notifications, garantissant une expérience utilisateur engageante et interactive. Que ce soit pour des conversations personnelles, une collaboration professionnelle ou des interactions communautaires, l'application offre un environnement sécurisé et intuitif pour des connexions significatives.",

      status: 'in-process',
    },
    {
      title: "Auto-pitch AI",
      desc_en: "Auto-pitch AI is an innovative tool that adjusts vocal audio pitch in real time, ensuring perfect harmony and pitch accuracy during live performances or recordings. Powered by advanced machine learning algorithms, it seamlessly detects and corrects pitch deviations, delivering polished and professional-sounding vocals instantly. Ideal for singers, podcasters, and streamers, Auto-pitch AI enhances vocal quality without compromising natural tone, making it an essential tool for both amateurs and professionals in the audio industry.",
      desc_fr: "Auto-pitch AI est un outil innovant qui ajuste la hauteur du pitch vocal en temps réel, garantissant une harmonie parfaite et une précision du pitch lors de performances en direct ou d'enregistrements. Alimenté par des algorithmes avancés d'apprentissage automatique, il détecte et corrige de manière transparente les écarts de hauteur, offrant des voix polies et professionnelles instantanément. Idéal pour les chanteurs, podcasteurs et streamers, Auto-pitch AI améliore la qualité vocale sans compromettre le ton naturel, en faisant un outil essentiel tant pour les amateurs que pour les professionnels de l'industrie audio.",

      status: 'in-process',
    },
  ];

  const readMoreButtons = document.querySelectorAll(".btn");

  // Add event listeners for each "Read More" button
  readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the current project
      const project = projectData[index];

      // Update modal content
      modalTitle.textContent = project.title;
      const select = document.getElementById("languageSelect");

    const selectedLanguage = select.value;
    if (selectedLanguage === "en") {
      modalDesc.textContent = project.desc_en;
    } else {
      modalDesc.textContent = project.desc_fr;
    }
      
    


      // Clear previous buttons in modal
      modalButtons.innerHTML = "";

      // Show "In Process" or action buttons based on project status
      if (project.status === 'in-process') {
        const inProcessImage = document.createElement('img');
        inProcessImage.src = "asset/images/in_progress.jpg"; // Replace with your image path
        inProcessImage.alt = "In Process";
        inProcessImage.className = "In_Process";
        inProcessImage.style.cssText =
          "display: block; margin: 0 auto; width: 350px; height: auto;";
        modalButtons.appendChild(inProcessImage);
      } else {
        const demoButton = document.createElement('a');
demoButton.textContent = "Demo";
demoButton.href = project.demoLink;
demoButton.className = "demo";
demoButton.style.cssText =
  "color: white; background-color: #333; border-radius: 50px; padding: 10px 20px; margin-right: 10px; width: 200px; height: 100px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: transform 0.3s, background-color 0.3s;";
modalButtons.appendChild(demoButton);

const githubButton = document.createElement('a');
githubButton.href = project.githubLink;
githubButton.target = "_blank";
githubButton.className = "githube";
githubButton.style.cssText = "display: inline-block; border: solid black 1px; border-radius: 50px; width: 200px; height: 100px; position: relative; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;";

// Create GitHub Image
const githubImage = document.createElement('img');
githubImage.src = "asset/githube_img.png"; // Replace with your GitHub logo image path
githubImage.alt = "GitHub";
githubImage.style.cssText = "width: 250px; height: 150px; object-fit: contain; max-width: 100%; max-height: 100%; margin: auto; ";

// Append the image inside the GitHub button
githubButton.appendChild(githubImage);

// Hover Effects
demoButton.addEventListener('mouseenter', () => {
  demoButton.style.transform = 'scale(1.1)';
  demoButton.style.backgroundColor = '#444'; // Darken background on hover
});

demoButton.addEventListener('mouseleave', () => {
  demoButton.style.transform = 'scale(1)';
  demoButton.style.backgroundColor = '#333'; // Revert background color
});

githubButton.addEventListener('mouseenter', () => {
  githubButton.style.transform = 'scale(1.1)';
  githubButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Add shadow on hover
});

githubButton.addEventListener('mouseleave', () => {
  githubButton.style.transform = 'scale(1)';
  githubButton.style.boxShadow = 'none'; // Revert shadow
});

// Append both buttons to the modal container
modalButtons.appendChild(demoButton);
modalButtons.appendChild(githubButton);

        
      }

      // Show modal
      modal.style.display = "flex";
    });
  });

  // Close modal functionality
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal by clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


 // Get the button and form elements
 const sendButton = document.getElementById('sendButton');
 const formName = document.getElementById('formName');
 const formEmail = document.getElementById('formEmail');
 const formMessage = document.getElementById('formMessage');

 // Add event listener to the button
 sendButton.addEventListener('click', function(event) {
   event.preventDefault(); // Prevent the form from submitting
   
   // Get the values from the form fields
   const name = formName.value;
   const email = formEmail.value;
   const message = formMessage.value;

   if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Prepare the email parameters
  const templateParams = {
    to_name: name,
    from_name: email,
    message: message
  };
  emailjs.send('default_service', 'template_1h84quw', templateParams)
  .then(function(response) {
    alert('Message sent successfully!');
  }, function(error) {
    alert('Failed to send message: ' + error.text);
  });

 });


 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      let offset = 0;
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed for mobile

      if (isMobile) {
          if (targetId === 'section_1') {
              offset = 200; // Custom offset for Section 1 on mobile
          } else if (targetId === 'section_2') {
              offset = 0; // Custom offset for Section 2 on mobile
          } else if (targetId === 'section_3') {
              offset = 150; // Custom offset for Section 3 on mobile
          } else if (targetId === 'section_4') {
              offset = 0; // Custom offset for Section 4 on mobile
          }
      } else {
          if (targetId === 'section_1') {
              offset = 550; // Custom offset for Section 1
          } else if (targetId === 'section_2') {
              offset = 200; // Custom offset for Section 2
          } else if (targetId === 'section_3') {
              offset = 200; // Custom offset for Section 3
          } else if (targetId === 'section_4') {
              offset = 400; // Custom offset for Section 4
          }
      }

      window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
      });
  });
});
