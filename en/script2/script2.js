const whatsappCourseContainer = document.getElementById(
  "whatsappMektepContainer"
);
const lessonSix = document.getElementById("lessonSix");
const lessonSixImg = document.getElementById("lessonSixImg");
const lessonSeven = document.getElementById("lessonSeven");
const lessonSevenImg = document.getElementById("lessonSevenImg");
const lessonEight = document.getElementById("lessonEight");
const lessonEigthImg = document.getElementById("lessonEigthImg");

const lessonNine = document.getElementById("lessonNine");
const lessonNineImg = document.getElementById("lessonNineImg");
const lessonEleven = document.getElementById("lessonEleven");
const lessonElevenImg = document.getElementById("lessonElevenImg");
const lessonTwenty = document.getElementById("lessonTwenty");
const lessonTwentyImg = document.getElementById("lessonTwentyImg");
const linkStatusShow = document.createElement("p");

const createLocalStorage = (boolean) => {
  localStorage.setItem("WhatsappMektepCheck", JSON.stringify(boolean));
  return boolean;
};
console.log(whatsappCourseContainer);
const localStorageCourseValue =
  localStorage.getItem("WhatsappMektepCheck") === null
    ? createLocalStorage(false)
    : JSON.parse(localStorage.getItem("WhatsappMektepCheck"));

console.log("localStorageCourseValue", localStorageCourseValue);

let count = 4;
linkStatusShow.innerHTML = `Сабактар ачылуусуна ${count} бөлүшүү калды`;
const linkFunction = (link) => {
  if (count === 0) {
    const shareButton = document.getElementById("shareButton");

    const shareButtonLink = document.getElementById("shareButtonLink");
    shareButtonLink.setAttribute("href", link);
    createLocalStorage(true);
    shareButtonLink.setAttribute("href", "../index.htm");
    shareButton.innerText = "Башкы бетке отуу";
  } else if (count === 1) {
    shareButton.innerText = "Башкы бетке отуу";
    const shareButtonLink = document.getElementById("shareButtonLink");
  }
  lessonsStatusCheker();
  count--;
  setTimeout(() => {
    linkStatusShow.innerHTML = `Cабактар ачылуусуна ${count} бөлүшүү калды`;
  }, 5000);
};

const lessonsStatusCheker = () => {
  console.log(localStorageCourseValue);
  if (localStorageCourseValue === true) {
    console.log("ssss");
    try {
      lessonNine.setAttribute("href", "urok10/index.htm");
      lessonNineImg.setAttribute("href", "urok10/index.htm");
      lessonEleven.setAttribute("href", "urok11/index.htm");
      lessonElevenImg.setAttribute("href", "urok11/index.htm");
      lessonTwenty.setAttribute("href", "urok12/index.htm");
      lessonTwentyImg.setAttribute("href", "urok12/index.htm");
    } catch (err) {
      console.log(err);
    }
  }
};

lessonsStatusCheker();
console.log(whatsappCourseContainer);
whatsappCourseContainer.append(linkStatusShow);
