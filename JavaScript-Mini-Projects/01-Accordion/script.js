const data = [
    {
      id: "1",
      question: "Accordion components",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: "2",
      question: "It's Use?",
      answer:
        "When readers only need a few key pieces of information: If readers only need some information on a page, then an accordion can help them more easily and efficiently find the information they're looking for.",
    },
    {
      id: "3",
      question: "As musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id: "4",
      question: "Can be created with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  const accordionWrapper = document.querySelector(".accordion");

  function createAccordionData() {
    accordionWrapper.innerHTML = data
      .map(
        (dataItem) => `
      <div class="accordion_item">
      <div class="accordion_title">
      <h3>${dataItem.question}</h3>
      <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="accordion_content">
      <p>${dataItem.answer}</p>
      </div>
      </div>
      `
      )
      .join(" ");
  }
  
  createAccordionData();
  
//   const getAccordionTitles = document.querySelectorAll(".accordion_title");
  
// //   console.log("====================================");
// //   console.log(getAccordionTitles);
// //   console.log("====================================");
  
//   getAccordionTitles.forEach((currentItem) => {
//     currentItem.addEventListener("click", (event) => {
//       if (currentItem.classList.contains("active")) {
//         currentItem.classList.remove("active");
//       } else {
//         // these two lines are for , if one is already expanded then it will be colapsed if another is opened
//         let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

//         getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
//           currentActiveItem.classList.remove("active");
//         });
  
//         currentItem.classList.add("active");
//       }
//     });
//   });

// -------------------------------------------------------------------------------


const getAccordionTitles = document.querySelectorAll(".accordion_title");

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", () => {
      const content = currentItem.nextElementSibling; // Select the corresponding accordion_content

      if (currentItem.classList.contains("active")) {
          // Collapse if already active
          currentItem.classList.remove("active");
          content.style.maxHeight = null; // Collapse
      } else {
          // Close any open accordion item
          document.querySelectorAll('.accordion_title.active').forEach((activeTitle) => {
              activeTitle.classList.remove("active");
              activeTitle.nextElementSibling.style.maxHeight = null; // Collapse all
          });

          // Expand the clicked item
          currentItem.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px"; // Set max-height to content's scrollHeight
      }
  });
});




// <!-- >>>>>>>>>>>>>>>>> FOR FOOTER >>>>>>>>>>>>>>>>>>>>>>>>> -->

var twelm = document.getElementById("twitter");
var gielm = document.getElementById("github");
var lielm = document.getElementById("linkedin");

var opac = 0.1;
var opacup=true;
renderLoop();

      function renderLoop() {
        setTimeout(function() {
          if(opacup==true)
             {opac+=0.1;
              if(opac>=1)opacup=false;
             }
         if(opacup==false)
             {opac-=0.1;
              if(opac<=0.3) opacup=true;
             }
        twelm.style.opacity = opac;
        gielm.style.opacity = opac;
        lielm.style.opacity = opac;
     
          
        window.requestAnimationFrame(renderLoop); 
        },300);
      }