const imgArr = ["./assets/images/original-2382696-2.jpg", './assets/images/Hang Man With Head.jpg', './assets/images/Hang Man With Head&Body.jpg', './assets/images/Hang Man With One Arm.jpg', './assets/images/Hang Man With Both Arms.jpg', './assets/images/Hang Man With One Leg.jpg', './assets/images/Hang Man With Both Legs.jpg']
const board = document.createElement('img');

const imgDiv = document.querySelector('.imgDiv');
// number that represents the index of the image array
let currentImg = -1;

export function changeImg() {
    imgDiv.append(board);
    currentImg++
    board.src = `${imgArr[currentImg]}`;
}
