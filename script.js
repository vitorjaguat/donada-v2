const body = document.body;
const container = document.querySelector('.container');

for (i = 0; i < 24; i++) {
  const newImg = document.createElement('img');
  newImg.classList.add('pic');
  if (i < 9) {
    newImg.src = `./img/0${i + 1}.jpg`;
  } else {
    newImg.src = `./img/${i + 1}.jpg`;
  }

  newImg.style.zIndex = i;
  newImg.style.opacity = 0;

  container.append(newImg);
}

const pics = document.querySelectorAll('.pic');

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

pics[0].style.opacity = 1;
let activeIndex = 0;
const finger = document.querySelector('.finger-icon');

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
pics[0].style.zIndex = '1000';
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
