const body = document.body;
const container = document.querySelector('.container');

const colors = ['green', 'pink', 'purple', 'orange', 'blue', 'black'];
const imgSrcs = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

for (i = 0; i < 24; i++) {
  //   const newDiv = document.createElement('div');
  //   newDiv.classList.add('pic');
  //   newDiv.style.background = colors[i];
  //   if (+imgSrcs[i] < 10) {
  //     newDiv.style.backgroundImage = `url(./img/0${i + 1}.jpg)`;
  //   } else {
  //     newDiv.style.backgroundImage = `url(./img/${i + 1}.jpg)`;
  //   }
  const newImg = document.createElement('img');
  newImg.classList.add('pic');
  if (i < 9) {
    newImg.src = `./img/0${i + 1}.jpg`;
  } else {
    newImg.src = `./img/${i + 1}.jpg`;
  }
  //   newDiv.style.background = 'url("./img/")';
  newImg.style.zIndex = i;
  newImg.style.opacity = 0;

  container.append(newImg);
}

const pics = document.querySelectorAll('.pic');

// const pics = document.querySelectorAll('.pic');

// pics.forEach((pic) => {
//   pic.addEventListener('mousemove', (e) => {
//     console.log(e.offsetX);
//   });
// });

// for (i = 0; i <= 5; i++) {
//   const newSpan = document.createElement('span');
//   newSpan.style.display = 'inline-block';
//   newSpan.style.height = '100%';
//   newSpan.style.width = 100 / 6 + '%';
//   newSpan.style.background = colors[i];
//   newSpan.style.zIndex = 10;
//   container.append(newSpan);
// }

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// function handleOpacity(element, children) {
//   element.addEventListener('mousemove', (e) => {
//     const x = e.offsetX;
//     const cWidth = element.offsetWidth;
//     children.forEach((child, number, array) => {
//       if (x >= (number * cWidth) / 6 && x < ((number + 1) * cWidth) / 6) {
//         children[number].style.opacity = scale(
//           x,
//           (number * cWidth) / 6,
//           cWidth / 6 + (number * cWidth) / 6,
//           1,
//           0
//         );
//         if (number < array.length - 1) {
//           array[number + 1].style.opacity = scale(
//             x,
//             (number * cWidth) / 6,
//             cWidth / 6 + (number * cWidth) / 6,
//             0,
//             1
//           );
//         } else {
//           child.style.opacity = 1;
//         }
//       }
//     });
//   });
// }

// handleOpacity(container, pics);

pics[0].style.opacity = 1;

container.addEventListener('mouseenter', (e) => {
  pics.forEach((pic) => (pic.style.opacity = 0));
});

container.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const cWidth = container.offsetWidth;
  const l = pics.length;
  pics.forEach((pic, i, arr) => {
    if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
      arr.forEach((p) => (p.style.opacity = 0));
      pic.style.opacity = 1;
    }
  });
});

container.addEventListener(
  'pointerenter',
  (e) => {
    // e.preventDefault();
    //erase all:
    pics.forEach((pic) => (pic.style.opacity = 0));
    //show pic:
    const x = e.offsetX;
    const cWidth = container.offsetWidth;
    const l = pics.length;
    console.log(x);
    pics.forEach((pic, i, arr) => {
      if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
        arr.forEach((p) => (p.style.opacity = 0));
        pic.style.opacity = 1;
      }
    });
  }
  // { passive: false }
);

container.addEventListener(
  'pointermove',
  (e) => {
    // e.preventDefault();
    const x = e.offsetX;
    const cWidth = container.offsetWidth;
    const l = pics.length;
    console.log(x);
    pics.forEach((pic, i, arr) => {
      if (x >= (cWidth / l) * i && x < (cWidth / l) * (i + 1)) {
        arr.forEach((p) => (p.style.opacity = 0));
        pic.style.opacity = 1;
      }
    });
  }
  // { passive: false }
);

// container.addEventListener('mousemove', (e) => {
//   const x = e.offsetX;
//   const cWidth = container.offsetWidth;
//   const l = pics.length;

//   if (x > 0 && x < cWidth / l) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[0].style.opacity = 1;
//   }
//   if (x >= cWidth / l && x < (cWidth / l) * 2) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[1].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 2 && x < (cWidth / l) * 3) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[2].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 3 && x < (cWidth / l) * 4) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[3].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 4 && x < (cWidth / l) * 5) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[4].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 5 && x < (cWidth / l) * 6) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[5].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 6 && x < (cWidth / l) * 7) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[6].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 7 && x < (cWidth / l) * 8) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[7].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 8 && x < (cWidth / l) * 9) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[8].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 9 && x < (cWidth / l) * 10) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[9].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 10 && x < (cWidth / l) * 11) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[10].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 11 && x < (cWidth / l) * 12) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[11].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 12 && x < (cWidth / l) * 13) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[12].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 13 && x < (cWidth / l) * 14) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[13].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 14 && x < (cWidth / l) * 15) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[14].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 15 && x < (cWidth / l) * 16) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[15].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 16 && x < (cWidth / l) * 17) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[16].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 17 && x < (cWidth / l) * 18) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[17].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 18 && x < (cWidth / l) * 19) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[18].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 19 && x < (cWidth / l) * 20) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[19].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 20 && x < (cWidth / l) * 21) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[20].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 21 && x < (cWidth / l) * 22) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[21].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 22 && x < (cWidth / l) * 23) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[22].style.opacity = 1;
//   }
//   if (x >= (cWidth / l) * 23 && x < (cWidth / l) * 24) {
//     pics.forEach((pic) => (pic.style.opacity = 0));
//     pics[23].style.opacity = 1;
//   }
// });
