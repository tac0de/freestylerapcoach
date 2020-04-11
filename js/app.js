import { KO } from "../Languages/ko.js";
import { EN } from "../Languages/en.js";
import { ES } from "../Languages/es.js";
import { IT } from "../Languages/it.js";
import { FR } from "../Languages/fr.js";
import { JA } from "../Languages/ja.js";
import { CS } from "../Languages/cs.js";
import { ZHHANS } from "../Languages/zh-Hans.js";
import { ZHHANT } from "../Languages/zh-Hant.js";

const h1 = document.querySelector(".words-container h1");
const picker = document.querySelector(".number-picker input[type='number']");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const wordsContainer = document.querySelector(".words-container");
const darkmode = document.querySelector(".dark-mode");
const fullscreen = document.querySelector(".fullscreen");

let randomWord = EN[Math.floor(Math.random() * EN.length)];
let count = 2;

(function () {
  h1.innerHTML = randomWord;

  darkmode.addEventListener("click", () => {
    wordsContainer.classList.toggle("black");
    darkmode.classList.toggle("black");
    fullscreen.classList.toggle("black");
  });

  fullscreen.addEventListener("click", toggleFullScreen, false);

  function toggleFullScreen() {
    fullscreen.classList.toggle("exit");
    if (!document.fullscreenElement) {
      wordsContainer.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  minus.addEventListener("click", () => {
    if (count > 1) {
      count--;
      picker.value = count;
      console.log(picker.value);
    }
  });

  plus.addEventListener("click", () => {
    if (count < 15) {
      count++;
      picker.value = count;
      console.log(picker.value);
    }
  });

  let timerId = setTimeout(function tick() {
    const ENSelected = document.querySelector(".en").selected;
    const ESSelected = document.querySelector(".es").selected;
    const FRSelected = document.querySelector(".fr").selected;
    const CSSelected = document.querySelector(".cs").selected;
    const ITSelected = document.querySelector(".it").selected;
    const KOSelected = document.querySelector(".ko").selected;
    const JASelected = document.querySelector(".ja").selected;
    const ZHHANSSelected = document.querySelector(".zh-hans").selected;
    const ZHHANTSelected = document.querySelector(".zh-hant").selected;

    if (ENSelected) {
      randomWord = EN[Math.floor(Math.random() * EN.length)];
    } else if (ESSelected) {
      randomWord = ES[Math.floor(Math.random() * ES.length)];
    } else if (FRSelected) {
      randomWord = FR[Math.floor(Math.random() * FR.length)];
    } else if (ITSelected) {
      randomWord = IT[Math.floor(Math.random() * IT.length)];
    } else if (CSSelected) {
      randomWord = CS[Math.floor(Math.random() * CS.length)];
    } else if (KOSelected) {
      randomWord = KO[Math.floor(Math.random() * KO.length)];
    } else if (JASelected) {
      randomWord = JA[Math.floor(Math.random() * JA.length)];
    } else if (ZHHANSSelected) {
      randomWord = ZHHANS[Math.floor(Math.random() * ZHHANS.length)];
    } else if (ZHHANTSelected) {
      randomWord = ZHHANT[Math.floor(Math.random() * ZHHANT.length)];
    }

    h1.innerHTML = randomWord;
    timerId = setTimeout(tick, count * 1000);
  }, 2000);
})();
