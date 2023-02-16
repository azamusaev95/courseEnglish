const whatsappCourseContainer = document.getElementById(
  "whatsappCourseContainer"
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
  localStorage.setItem("WhatsappCourseCheck", JSON.stringify(boolean));
  return boolean;
};
console.log(whatsappCourseContainer);
const localStorageCourseValue =
  localStorage.getItem("WhatsappCourseCheck") === null
    ? createLocalStorage(false)
    : JSON.parse(localStorage.getItem("WhatsappCourseCheck"));

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
  console.log(count);
  setTimeout(() => {
    linkStatusShow.innerHTML = `Cабактар ачылуусуна ${count} бөлүшүү калды`;
  }, 5000);
};

const lessonsStatusCheker = () => {
  console.log(localStorageCourseValue);
  if (localStorageCourseValue === true) {
    console.log("ssss");
    try {
      lessonSix.setAttribute("href", "urok6/index.htm");
      lessonSixImg.setAttribute("href", "urok6/index.htm");
      lessonSeven.setAttribute("href", "urok7/index.htm");
      lessonSevenImg.setAttribute("href", "urok7/index.htm");
      lessonEight.setAttribute("href", "urok8/index.htm");
      lessonEigthImg.setAttribute("href", "urok8/index.htm");
    } catch (err) {
      console.log(err);
    }
  }
};

lessonsStatusCheker();
console.log(whatsappCourseContainer);
whatsappCourseContainer.append(linkStatusShow);

// const localStorageMektepValue =
//   localStorage.getItem("WhatsappMektepCheck") === null
//     ? localStorage.setItem(JSON.stringify("WhatsappMektepCheck", false))
//     : localStorage.getItem(localStorage.getItem("WhatsappMektepCheck"));

// if (!localStorageMektepValue) {
// }
