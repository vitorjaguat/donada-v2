const body = document.body;
const container = document.querySelector('.container');

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

//load images and prepare events:

const spinner = document.querySelector('.loader-img');
const progressBar = document.querySelector('.progress-bar');
const progressBarLoaded = document.querySelector('.bar-loaded');
const totalFrames = 24;
let loadedFrames = 0;

const load = () => {
  for (i = 0; i < 24; i++) {
    const newImg = document.createElement('img');
    newImg.classList.add('pic');
    if (i < 9) {
      newImg.src = `./img/0${i + 1}.jpg`;
    } else {
      newImg.src = `./img/${i + 1}.jpg`;
    }
    newImg.style.opacity = 0;
    container.append(newImg);
    newImg.onload = function () {
      loadedFrames++;
      progressBarLoaded.style.width = `${(loadedFrames / totalFrames) * 100}%`;
      console.log(loadedFrames);
      if (loadedFrames === totalFrames) {
        progressBar.style.zIndex = '0';
        progressBar.style.display = 'none';
        progressBar.style.opacity = 0;
        progressBarLoaded.style.display = 'none';
        progressBarLoaded.style.opacity = 0;
      }
    };
  }

  const pics = document.querySelectorAll('.pic');
  pics[0].style.opacity = 1;
  const finger = document.querySelector('.finger-icon');

  pics[0].style.zIndex = '10';
  pics[0].addEventListener('pointermove', (e) => {
    finger.style.display = 'none';
    const x = e.offsetX;
    // console.log(x);
    const cWidth = pics[0].offsetWidth;
    const l = pics.length;
    pics.forEach((pic, i, arr) => {
      pic.classList.remove('on');
      if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
        pic.style.opacity = 1;
        pic.classList.add('on');
        arr.forEach((p) => {
          if (!p.classList.contains('on')) {
            p.style.opacity = 0;
          }
        });
      }
    });
  });

  pics[0].addEventListener('pointerleave', () => {
    finger.style.display = 'block';
  });
};

load();

//OTHER EVENTS:
//Events:
// pics[0].addEventListener('mouseenter', (e) => {
//   const cWidth = pics[0].offsetWidth;
//   const x = e.offsetX;
//   if (x > 0 && x < cWidth) {
//     finger.style.display = 'none';
//   }
//   const l = pics.length;
//   pics.forEach((pic, i, arr) => {
//     pic.classList.remove('on');
//     if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
//       pic.style.opacity = 1;
//       pic.classList.add('on');
//       arr.forEach((p) => {
//         if (!p.classList.contains('on')) {
//           p.style.opacity = 0;
//         }
//       });
//     }
//   });
// });

// pics[0].addEventListener('mousemove', (e) => {
//   const x = e.offsetX;
//   const cWidth = pics[0].offsetWidth;
//   const l = pics.length;
//   pics.forEach((pic, i, arr) => {
//     pic.classList.remove('on');
//     if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
//       pic.style.opacity = 1;
//       pic.classList.add('on');
//       arr.forEach((p) => {
//         if (!p.classList.contains('on')) {
//           p.style.opacity = 0;
//         }
//       });
//     }
//   });
// });

// container.addEventListener('mouseleave', (e) => {
//   finger.style.display = 'block';
// });

// pics[0].addEventListener('pointerenter', (e) => {
//   const x = e.offsetX;
//   const cWidth = pics[0].offsetWidth;
//   const l = pics.length;
//   pics.forEach((pic, i, arr) => {
//     pic.classList.remove('on');
//     if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
//       pic.style.opacity = 1;
//       pic.classList.add('on');
//       arr.forEach((p) => {
//         if (!p.classList.contains('on')) {
//           p.style.opacity = 0;
//         }
//       });
//     }
//   });
// });
