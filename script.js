const quizQuestions = [
  {
    question: "Bà Maria có thai do quyền năng của ai? (Mt 1,18)",
    options: {
      A: "Thiên Thần",
      B: "Chúa Con",
      C: "Chúa Cha",
      D: "Chúa Thánh Thần",
    },
    correct: "D",
    used: false,
    type: "multiple_choice", // Quyền năng của Chúa Thánh Thần (Mt 1,18)
  },
  {
    question: "Đức Giêsu sinh ra tại miền nào? (Mt 2,1)",
    options: {
      A: "Galilê",
      B: "Samari",
      C: "Bê lem",
      D: "Giuđê",
    },
    correct: "D",
    used: false,
    type: "multiple_choice", // Bê-lem là thành thuộc miền Giuđê
  },
  {
    question: "Những bảo vật được dâng cho Hài Nhi Giêsu là gì? (Mt 2,11)",
    options: {
      A: "Nhũ hương, mật ong, mộc dược",
      B: "Nhũ hương, mộc dược, vàng",
      C: "Vàng, nhũ hương, rượu",
      D: "Mộc dược, bạch ngọc, nhũ hương",
    },
    correct: "B",
    used: false,
    type: "multiple_choice", // Vàng, Nhũ hương và Mộc dược
  },
  {
    question: "Thánh Gioan Baotixita sinh trước Chúa Giêsu bao lâu?",
    options: {
      A: "3 tháng",
      B: "9 tháng",
      C: "6 tháng",
      D: "1 năm",
    },
    correct: "C",
    used: false,
    type: "multiple_choice", // Thánh Gioan Baotixita sinh trước Chúa Giêsu 6 tháng (xem Lc 1)
  },
  {
    question:
      "Trong các sách Tin Mừng Nhất Lãm, Tin Mừng nào không kể đến biến cố Chúa Giêsu Giáng Sinh?",
    options: {
      A: "Tin Mừng Thánh Mác-cô",
      B: "Tin Mừng Thánh Mát-thêu",
      C: "Tin Mừng Thánh Lu-ca",
      D: "Tin Mừng Thánh Gioan", // (Tin Mừng Gioan không phải Nhất Lãm, nhưng cũng không kể biến cố Giáng sinh)
    },
    correct: "A",
    used: false,
    type: "multiple_choice", // Tin Mừng Mác-cô bắt đầu bằng việc Gioan Tẩy giả rao giảng.
  },
  {
    question: "Chúa Giêsu sinh ra ở đâu?",
    options: {
      A: "Bê-lem",
      B: "Na-da-rét",
      C: "Bê-ta-ni-a",
      D: "Giê-ru-sa-lem",
    },
    correct: "A",
    used: false,
    type: "multiple_choice", // Bê-lem là nơi sinh
  },
  {
    question: "Lễ Giáng sinh là cử hành phụng vụ với bao nhiêu Thánh lễ?",
    options: {
      A: "1",
      B: "3",
      C: "2",
      D: "4",
    },
    correct: "D",
    used: false,
    type: "multiple_choice", // 3 Thánh lễ: Lễ Vọng, Lễ Đêm, Lễ Rạng Đông, Lễ Ban Ngày.
  },
  {
    question:
      "Người dân ở quốc gia nào trao đổi sách vào đêm Giáng Sinh, sau đó dành buổi tối để đọc sách và ăn sô-cô-la?",
    options: {
      A: "New Zealand",
      B: "Iceland",
      C: "Na Uy",
      D: "Thụy Điển",
    },
    correct: "B",
    used: false,
    type: "multiple_choice", // Phong tục 'Jólabókaflóð' (lũ sách Giáng sinh) ở Iceland.
  },
  {
    question: "“Merry Christmas” trong tiếng Tây Ban Nha là gì?",
    options: {
      A: "Feliz Fiesta",
      B: "Hola Navidad",
      C: "Feliz Navidad",
      D: "Buena Fiesta",
    },
    correct: "C",
    used: false,
    type: "multiple_choice", // Feliz Navidad
  },
  {
    question:
      "Chiếc cây kẹo (Candy Cane) và những sọc trắng đỏ xuất hiện lần đầu ở quốc gia nào?",
    options: {
      A: "Ấn Độ",
      B: "Đức",
      C: "Mỹ",
      D: "Nga",
    },
    correct: "B",
    used: false,
    type: "multiple_choice", // Xuất hiện lần đầu ở Cologne, Đức vào năm 1670.
  },
  {
    question:
      "Tại Australia: xe trượt tuyết của ông già Noel được kéo bởi động vật gì?",
    options: {
      A: "Tuần lộc",
      B: "Nai",
      C: "Hươu",
      D: "Kangguru",
    },
    correct: "A",
    used: false,
    type: "multiple_choice", // Theo truyền thống vẫn là tuần lộc, mặc dù có những bài hát hoặc hình ảnh hài hước dùng kangaroo.
  },
  {
    question: "Hoàng đế Lamã thời Chúa Giêsu sinh ra là ai?",
    answer: "Hoàng đế Augúttô (Lc 2,1-20)", // Thay 'correct' bằng 'answer'
    used: false,
    type: "essay",
  },
  {
    question:
      "Lễ Giáng sinh là cử hành phụng vụ với bao nhiêu Thánh lễ, kể tên?",
    answer:
      "Thánh lễ Vọng, Thánh lễ Đêm, Thánh lễ Rạng đông, Thánh lễ Ban ngày", // Thay 'correct' bằng 'answer'
    used: false,
    type: "essay",
  },
  {
    question: "Con tuần lộc nào có mũi đỏ?",
    options: {
      A: "Dasher",
      B: "Cupid",
      C: "Vixen",
      D: "Rudolph",
    },
    correct: "D",
    used: false,
    type: "multiple_choice", // Rudolph
  },
  {
    question: "Những đứa trẻ ngoan sẽ treo gì để nhận quà của ông già Noel?",
    options: {
      A: "Chuông",
      B: "Tất",
      C: "Hộp bự",
      D: "Túi ba gang",
    },
    correct: "B",
    used: false,
    type: "multiple_choice", // Treo tất (Stockings)
  },
  {
    question:
      "Bên cạnh cây thông, đâu là một loại cây nổi tiếng vào dịp Giáng Sinh?",
    options: {
      A: "Cây bạch dương",
      B: "Cây bonsai",
      C: "Cây tầm gửi",
      D: "Không có, cây thông là nhất",
    },
    correct: "C",
    used: false,
    type: "multiple_choice", // Cây tầm gửi (Mistletoe)
  },
  {
    question: "Santa Claus (Ông già Noel) dựa trên ai ngoài đời thật?",
    options: {
      A: "Thánh Santa",
      B: "Thánh Claus",
      C: "Thánh Noel",
      D: "Thánh Nicholas",
    },
    correct: "D",
    used: false,
    type: "multiple_choice", // Dựa trên Thánh Nicholas (Thánh Ni-cô-la) thành Myra.
  },
  {
    question:
      "Trẻ em nhận được gì từ Ông già Noel nếu nằm trong danh sách “Trẻ hư”?",
    options: {
      A: "Một cục than",
      B: "Một cành khô",
      C: "Một túi muối",
      D: "Một cây kẹo gãy",
    },
    correct: "A",
    used: false,
    type: "multiple_choice", // Theo truyền thống, trẻ hư sẽ nhận được một cục than.
  },
  {
    question: "Bông tuyết tượng trưng cho điều gì trong Giáng Sinh?",
    options: {
      A: "Thời tiết lạnh",
      B: "Trang trí cho đẹp",
      C: "Dấu hiệu của mùa thu",
      D: "Sự tinh khiết và niềm vui",
    },
    correct: "D",
    used: false,
    type: "multiple_choice", // Tuyết trắng thường tượng trưng cho sự tinh khiết, niềm vui và sự bắt đầu mới.
  },
  {
    question: "Thắt lưng của ông già Noel màu gì?",
    options: {
      A: "Màu trắng",
      B: "Màu đen",
      C: "Màu đỏ",
      D: "Màu nâu",
    },
    correct: "B",
    used: false,
    type: "multiple_choice", // Thường là màu đen với khóa vàng/bạc.
  },
  {
    question: "Đồ chơi của ông già Noel đến từ đâu?",
    options: {
      A: "Ông tự hóa phép ra",
      B: "Trong xưởng nhà ông",
      C: "Ông lấy của người giàu chia cho người nghèo",
      D: "Ông bỏ tiền túi ra để mua",
    },
    correct: "B",
    used: false,
    type: "multiple_choice",
  },
  {
    question: "Sau khi sinh được bao ngày thì người ta đặt tên cho con trẻ ?",
    options: {
      A: "5 ngày",
      B: "6 ngày",
      C: "7 ngày",
      D: "8 ngày",
    },
    correct: "D",
    used: false,
    type: "multiple_choice",
  },
  {
    question: "Ông bà ngoại của Chúa Giêsu là ai?",
    answer: "Ông Gioankim và bà Anna", // Thay 'correct' bằng 'answer'
    used: false,
    type: "essay",
  },
  {
    question:
      "Đức Giêsu cùng với Mẹ Maria và thánh Giuse lên Đền Thờ Giêrusalem mừng lễ gì và khi đó Người bao nhiêu tuổi?",
    answer: "Lễ Vượt Qua và khi đó Người 12 tuổi", // Thay 'correct' bằng 'answer'
    used: false,
    type: "essay",
  },
];

// Cập nhật logic: Chỉ lấy 18 câu hỏi duy nhất (từ các câu gốc)
let availableQuestions = [...quizQuestions]; // Sao chép mảng gốc

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Xáo trộn mảng câu hỏi
availableQuestions = shuffle(availableQuestions);

// Cắt mảng để chỉ lấy 12 câu đầu tiên (duy nhất)
availableQuestions = availableQuestions.slice(0, 12);
// console.log(`Số câu hỏi được sử dụng: ${availableQuestions.length}`);

// BLUR
// Biến theo dõi tiến trình
let matchedCardsCount = 0; // Đếm số thẻ đã mở
const totalCards = 12; // Tổng số thẻ trên bảng
const iconFiles = [
  "assets/icon-1.png",  // Icon cho Thẻ 1
  "assets/icon-2.png",  // Icon cho Thẻ 2
  "assets/icon-3.png",  // ...
  "assets/icon-4.png",
  "assets/icon-5.png",
  "assets/icon-6.png",
  "assets/icon-7.png",
  "assets/icon-8.png",
  "assets/icon-9.png",
  "assets/icon-10.png",
  "assets/icon-11.png",
  "assets/icon-12.png"  // Icon cho Thẻ 12
];

// Bộ chọn phần tử nền (Giả sử là body hoặc một container nào đó)
const backgroundElement = document.getElementById("backgroundBlurLayer");
const initialBlurAmount = 12;

const correctSound = new Audio("audio/correct.mp3"); // Đổi đường dẫn nếu cần
const wrongSound = new Audio("audio/wrong.mp3");

const flashScreen = document.getElementById("flashScreen");

const board = document.getElementById("gameBoard");
const quizPopup = document.getElementById("quizPopup");
const quizQuestionEl = document.getElementById("quizQuestion");
const btnAnswers = document.querySelectorAll(".btn-answer");
const popupWrong = document.getElementById("popupWrong");

// --- BỘ CHỌN DOM MỚI CHO LOGIC TỰ LUẬN ---
const multipleChoiceContainer = document.getElementById(
  "multipleChoiceContainer"
);
const essayContainer = document.getElementById("essayContainer");
const essayRevealButton = document.getElementById("essayRevealButton");
const essayAnswerText = document.getElementById("essayAnswerText");
const essayContinueButton = document.getElementById("essayContinueButton");

// Biến toàn cục (Global Variables)
let lockBoard = false; // Thêm lại biến lockBoard
let currentQuestionIndex = 0; // Chỉ số của câu hỏi hiện tại trong availableQuestions
let activeCard = null; // Thẻ DOM đang được click

// Khởi tạo các biến liên quan đến modal kết quả
const resultModal = document.getElementById("resultModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const fireworksCanvas = document.getElementById("fireworksCanvas");

function handleCorrectAnswerFlow(callback) {
  const message = "Chính xác. Tiếp tục nhé!";

  triggerFlashEffect(true);

  showResultModal("🎉 Chính xác!", message, true, () => {
    // Hàm callback sau khi người dùng nhấn 'Tiếp tục'

    // ẨN POPUP QUIZ CHÍNH
    if (quizPopup) {
      quizPopup.classList.remove("show");
      quizPopup.setAttribute("aria-hidden", "true");
    }

    // Đánh dấu thẻ đã được hoàn thành
    activeCard.classList.add("matched");

    matchedCardsCount++; 
    updateBlurEffect();

    // Chuyển sang câu hỏi tiếp theo và reset
    currentQuestionIndex =
      (currentQuestionIndex + 1) % availableQuestions.length;
    activeCard = null;
    lockBoard = false;

    // Reset trạng thái hiển thị cho câu tự luận (đảm bảo ẩn khi mở câu hỏi mới)
    if (essayRevealButton) essayRevealButton.style.display = "block";
    if (essayAnswerText) {
      essayAnswerText.textContent = ""; // Xóa nội dung đáp án cũ
      essayAnswerText.style.display = "none";
    }

    if (typeof callback === "function") {
      callback();
    }
  });
}

if (backgroundElement) {
  // Chúng ta dùng style.filter trực tiếp vì JS sẽ cập nhật giá trị này
  backgroundElement.style.filter = `blur(${initialBlurAmount}px)`;
  // Không cần dùng initial-blur class nếu bạn đã dùng style.filter
}

// Render board ONCE
function initBoard() {
  board.innerHTML = "";
  const totalIcons = iconFiles.length;
  // CHỈ TẠO 12 THẺ BÀI (3x4)
  for (let idx = 0; idx < 12; idx++) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = idx; // Dùng để xác định vị trí thẻ

    const cardCover = document.createElement("div");
    cardCover.className = "card-cover";

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const front = document.createElement("div");
    front.className = "card-front";
    // const shape = document.createElement("div");
    // shape.className = "shape";
    // shape.textContent = "CHINH PHỤC";
    // front.appendChild(shape);

    // --- PHẦN BỔ SUNG ICON ---
    const icon = document.createElement("div");
    icon.className = "card-icon";
    if (idx < totalIcons) {
      icon.style.backgroundImage = `url(${iconFiles[idx]})`;
    }
    front.appendChild(icon);

    const num = document.createElement("div");
    num.className = "card-number";
    num.textContent = idx + 1;
    front.appendChild(num);

    cardInner.appendChild(front);
    card.appendChild(cardCover);
    card.appendChild(cardInner);

    // event: click to open quiz
    card.addEventListener("click", () => handleCardClick(card));

    board.appendChild(card);
  }
}

function handleCardClick(card) {
  if (card.classList.contains("matched") || lockBoard) return;

  activeCard = card;
  // KHÔNG CẦN lockBoard = true Ở ĐÂY. lockBoard sẽ được set sau khi chọn đáp án

  const currentQ = availableQuestions[currentQuestionIndex];
  if (!currentQ) {
    console.error("Không tìm thấy câu hỏi ở index hiện tại.");
    return;
  }

  // Hiển thị câu hỏi
  quizQuestionEl.textContent = currentQ.question;

  // --- LOGIC XỬ LÝ LOẠI CÂU HỎI MỚI ---
  // Reset trạng thái hiển thị tự luận
  if (essayRevealButton) essayRevealButton.style.display = "block";
  if (essayAnswerText) {
    essayAnswerText.textContent = "";
    essayAnswerText.style.display = "none";
  }
  if (essayContinueButton) essayContinueButton.style.display = "none";

  if (currentQ.type === "multiple_choice") {
    // 1. CÂU TRẮC NGHIỆM: Hiện 4 nút
    if (multipleChoiceContainer) multipleChoiceContainer.style.display = "grid";
    if (essayContainer) essayContainer.style.display = "none";

    // Cập nhật đáp án
    btnAnswers.forEach((btn) => {
      const optionKey = btn.dataset.answer; // 'A', 'B', 'C', 'D'
      // Đảm bảo chỉ những nút có data-answer là A, B, C, D mới được cập nhật
      if (optionKey) {
        btn.textContent = `${currentQ.options[optionKey]}`;
      }
    });
  } else if (currentQ.type === "essay") {
    // 2. CÂU TỰ LUẬN: Ẩn 4 nút, hiện nút tiết lộ
    if (multipleChoiceContainer) multipleChoiceContainer.style.display = "none";
    if (essayContainer) essayContainer.style.display = "block";
  } else {
    console.error("Loại câu hỏi không hợp lệ: " + currentQ.type);
    return;
  }

  // Hiện popup quiz
  quizPopup.classList.add("show");
  quizPopup.setAttribute("aria-hidden", "false");
}

// Xử lý khi chọn đáp án
btnAnswers.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!activeCard) return;

    const currentQ = availableQuestions[currentQuestionIndex];

    if (currentQ.type !== "multiple_choice") return;

    // Khóa bảng ngay khi người dùng chọn đáp án để ngăn click liên tục
    lockBoard = true;
    const selectedAnswer = btn.dataset.answer;
    // const answerResultEl = document.getElementById("answerResult"); // Không cần dùng nữa

    if (selectedAnswer === currentQ.correct) {
      // Đúng
      triggerFlashEffect(true);

      handleCorrectAnswerFlow();
    } else {
      // Sai
      triggerFlashEffect(false);

      const message = `Chúc bạn may mắn lần sau :>>`;

      showResultModal("❌ Sai rồi!", message, false, () => {
        // Hàm callback sau khi người dùng nhấn 'Tiếp tục'

        // ẨN POPUP QUIZ CHÍNH
        if (quizPopup) {
          quizPopup.classList.remove("show");
          quizPopup.setAttribute("aria-hidden", "true");
        }

        // Đẩy câu hỏi này xuống cuối danh sách chờ và chuyển sang câu hỏi tiếp theo
        const failedQ = availableQuestions.splice(currentQuestionIndex, 1)[0];
        availableQuestions.push(failedQ);

        // Nếu đã xóa 1 phần tử, index sẽ không cần thay đổi nếu không phải câu cuối.
        if (currentQuestionIndex >= availableQuestions.length) {
          currentQuestionIndex = 0;
        }

        activeCard = null; // Thẻ vẫn còn trên bảng, chỉ reset trạng thái active
        lockBoard = false;
      });
    }
  });
});

// Các biến cho hiệu ứng Tuyết rơi (giữ nguyên)
const snowflakes = [];
let browserWidth = 0;
let browserHeight = 0;
const numberOfSnowflakes = 222;
let resetPosition = false;

const transforms = [
  "transform",
  "msTransform",
  "webkitTransform",
  "mozTransform",
  "oTransform",
];
let transformProperty = null;

function getSupportedPropertyName(properties) {
  for (let property of properties) {
    if (typeof document.body.style[property] !== "undefined") {
      return property;
    }
  }
  return null;
}

function setup() {
  transformProperty = getSupportedPropertyName(transforms);
  generateSnowflakes();
  window.addEventListener("resize", handleResize);
}

function handleResize() {
  resetPosition = true;
}

function updateSnowflake(flake) {
  flake.counter += flake.speed / 5000;
  flake.xPos += (flake.sign * flake.speed * Math.cos(flake.counter)) / 40;
  flake.yPos += Math.sin(flake.counter) / 40 + flake.speed / 30;

  setTranslate3DTransform(
    flake.element,
    Math.round(flake.xPos),
    Math.round(flake.yPos)
  );

  if (flake.yPos > browserHeight) {
    flake.yPos = -50;
    flake.xPos = getRandomPosition(50, browserWidth);
  }
}

function generateSnowflakes() {
  const container = document.getElementById("snowflakeContainer");
  const originalSnowflake = document.createElement("p");
  originalSnowflake.className = "snowflake";
  originalSnowflake.innerHTML =
    "<span style=\"color:white; font-size:1em; font-family: 'Segoe UI Symbol', 'Arial Unicode MS', sans-serif;\">&#10052;</span>";

  browserWidth = document.documentElement.clientWidth;
  browserHeight = document.documentElement.clientHeight;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = originalSnowflake.cloneNode(true);
    container.appendChild(snowflake);

    const xPos = getRandomPosition(50, browserWidth);
    const yPos = getRandomPosition(50, browserHeight);
    const speed = 4 + Math.random() * 10;
    const radius = 5 + Math.random() * 40;

    const flake = {
      element: snowflake,
      radius,
      speed,
      xPos,
      yPos,
      counter: Math.random() * 20,
      sign: Math.random() < 0.5 ? 1 : -1,
    };

    snowflake.style.fontSize = 5 + Math.random() * 30 + "px";
    snowflake.style.opacity = (0.5 + Math.random() * 0.5).toString();

    snowflakes.push(flake);
  }

  moveSnowflakes();
}

function moveSnowflakes() {
  for (let flake of snowflakes) {
    updateSnowflake(flake);
  }

  if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (let flake of snowflakes) {
      flake.xPos = getRandomPosition(50, browserWidth);
      flake.yPos = getRandomPosition(50, browserHeight);
    }

    resetPosition = false;
  }

  requestAnimationFrame(moveSnowflakes);
}

function setTranslate3DTransform(element, x, y) {
  const val = `translate3d(${x}px, ${y}px, 0)`;
  element.style[transformProperty] = val;
}

function getRandomPosition(offset, size) {
  return Math.round(-offset + Math.random() * (size + 2 * offset));
}

window.onload = setup;

// Hàm trợ giúp mới: chỉ ẩn popup quiz và reset trạng thái mà không cần modal kết quả
function closeQuizPopupAndReset() {
  // ẨN POPUP QUIZ CHÍNH
  if (quizPopup) {
    quizPopup.classList.remove("show");
    quizPopup.setAttribute("aria-hidden", "true");
  }

  // Reset trạng thái hiển thị cho câu tự luận
  if (essayRevealButton) essayRevealButton.style.display = "block";
  if (essayAnswerText) {
    essayAnswerText.textContent = ""; // Xóa nội dung đáp án cũ
    essayAnswerText.style.display = "none";
  }
  if (essayContinueButton) essayContinueButton.style.display = "none";

  activeCard = null; // Thẻ vẫn còn trên bảng, chỉ reset trạng thái active
  lockBoard = false;
}

// Hàm trợ giúp tái sử dụng logic khi trả lời ĐÚNG (chỉ dùng cho Trắc nghiệm)
function handleCorrectAnswerFlow(callback) {
  const message = "Chính xác. Tiếp tục nhé!";

  showResultModal("🎉 Chính xác!", message, true, () => {
    // Hàm callback sau khi người dùng nhấn 'Tiếp tục'

    // Đánh dấu thẻ đã được hoàn thành
    if (activeCard) activeCard.classList.add("matched");

    matchedCardsCount++; 
    updateBlurEffect();

    // Chuyển sang câu hỏi tiếp theo và reset
    currentQuestionIndex =
      (currentQuestionIndex + 1) % availableQuestions.length;

    closeQuizPopupAndReset(); // Sử dụng hàm đóng quiz mới
  });
}

// --- LOGIC MỚI ĐÃ SỬA: Xử lý ESSAY (Tự luận) ---
if (essayRevealButton && essayContinueButton) {
  essayRevealButton.addEventListener("click", () => {
    if (!activeCard || lockBoard) return;

    const currentQ = availableQuestions[currentQuestionIndex];
    if (currentQ.type !== "essay") return;

    // 1. HIỂN THỊ ĐÁP ÁN
    if (essayAnswerText && currentQ.answer) {
      essayAnswerText.textContent = `Đáp án: ${currentQ.answer}`;
      essayAnswerText.style.display = "block";
      essayRevealButton.style.display = "none"; // Ẩn nút tiết lộ
      essayContinueButton.style.display = "block";
    }

    // Đảm bảo lockBoard là true trong quá trình hiển thị modal phụ
    lockBoard = true;
  });

  essayContinueButton.addEventListener("click", () => {
    if (!activeCard) return;

    // Đánh dấu thẻ đã được hoàn thành
    activeCard.classList.add("matched");

    matchedCardsCount++; 
    updateBlurEffect();

    // Chuyển sang câu hỏi tiếp theo
    currentQuestionIndex =
      (currentQuestionIndex + 1) % availableQuestions.length;

    // Đóng popup và reset trạng thái
    closeQuizPopupAndReset();
  });
}

// PHÁO HOA
// Hàm hiển thị modal
// Hàm hiển thị modal
function showResultModal(title, message, isCorrect, callback) {
  modalTitle.textContent = title;
  // ... (các thiết lập khác)

  if (isCorrect) {
    modalTitle.style.color = "#16a34a"; // Xanh lá
    // BƯỚC SỬA 1: Hiện Canvas
    fireworksCanvas.style.display = "block";
    launchFireworks(); // Bắn pháo hoa khi đúng
  } else {
    modalTitle.style.color = "#dc2626"; // Đỏ
    fireworksCanvas.style.display = "none"; // Đảm bảo ẩn Canvas khi sai
  }

  resultModal.classList.add("show-modal");
  resultModal.setAttribute("aria-hidden", "false");

  // Gán hàm xử lý tiếp tục cho nút đóng
  modalCloseBtn.onclick = () => {
    resultModal.classList.remove("show-modal");
    resultModal.setAttribute("aria-hidden", "true");

    // BƯỚC SỬA 2: Ẩn Canvas sau khi đóng modal
    if (!fireworksCanvas.animationFrameId) {
      fireworksCanvas.style.display = "none";
    }

    if (typeof callback === "function") {
      callback();
    }
  };
}

// Kích hoạt hiệu ứng pháo hoa/confetti
function launchFireworks() {
  const modalContent = resultModal.querySelector(".modal-content");

  // Lấy kích thước thực tế của modal content (phần tử cha)
  const rect = modalContent.getBoundingClientRect();

  // Gán kích thước cho Canvas.
  // Nếu CSS đã là width/height: 100%, bước này có thể dư thừa, nhưng nó đảm bảo Canvas luôn có kích thước > 0.
  fireworksCanvas.width = rect.width;
  fireworksCanvas.height = rect.height;

  const ctx = fireworksCanvas.getContext("2d");
  let particles = [];
  const particleCount = 100;

  // Xóa mọi animation cũ
  if (fireworksCanvas.animationFrameId) {
    cancelAnimationFrame(fireworksCanvas.animationFrameId);
  }

  // Tái tạo hạt (tại vị trí ngẫu nhiên thay vì chỉ ở đáy)
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      // Bắn ra từ giữa modal
      x: fireworksCanvas.width / 2 + (Math.random() - 0.5) * 50,
      y: fireworksCanvas.height / 2 + Math.random() * 50, // Bắn từ vùng giữa-dưới
      vx: (Math.random() - 0.5) * 10,
      vy: -5 - Math.random() * 10,
      radius: 2 + Math.random() * 4,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    });
  }

  function draw() {
    // RẤT QUAN TRỌNG: ClearRect cần phải ở đầu để xóa khung hình trước.
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3; // Trọng lực

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    particles = particles.filter(
      (p) =>
        p.y < fireworksCanvas.height + p.radius &&
        p.x > -50 &&
        p.x < fireworksCanvas.width + 50
    );

    if (particles.length > 0) {
      fireworksCanvas.animationFrameId = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(fireworksCanvas.animationFrameId);
      ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
      fireworksCanvas.animationFrameId = null;

      // Ẩn Canvas sau khi hiệu ứng kết thúc
      fireworksCanvas.style.display = "none";
    }
  }

  draw();
}

function triggerFlashEffect(isCorrect) {
  if (!flashScreen) return;

  // 1. Dừng và phát âm thanh
  const sound = isCorrect ? correctSound : wrongSound;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch((e) => console.error("Lỗi phát âm thanh:", e));

  // 2. Thiết lập màu sắc
  flashScreen.classList.remove("flash-correct", "flash-wrong");
  flashScreen.classList.add(isCorrect ? "flash-correct" : "flash-wrong");

  // 3. Kích hoạt Animation
  // Xóa lớp animation cũ để nó có thể chạy lại
  flashScreen.classList.remove("is-flashing");

  // Cần một slight delay (ví dụ: dùng requestAnimationFrame hoặc setTimeout 0)
  // để trình duyệt nhận biết rằng animation cần được reset/chạy lại
  requestAnimationFrame(() => {
    flashScreen.classList.add("is-flashing");
  });
}

function updateBlurEffect() {
  // Chỉ hoạt động nếu đã có phần tử nền
  if (!backgroundElement) return;

  // Tính toán số lượng thẻ cần mở để đạt được mục tiêu
  // Bạn muốn độ mờ giảm từ 0 thẻ mở đến 12 thẻ mở.
  const blurThreshold = 12;

  // Số thẻ đã mở từ 0 đến 12 sẽ ảnh hưởng đến độ mờ.
  // Nếu matchedCardsCount > blurThreshold, độ mờ = 0.
  const progress = Math.min(matchedCardsCount, blurThreshold);

  // Tính toán độ mờ hiện tại (giảm tuyến tính)
  // Ví dụ: 10px - (10px * 0/12) = 10px (0 thẻ)
  // Ví dụ: 10px - (10px * 6/12) = 5px (6 thẻ)
  // Ví dụ: 10px - (10px * 12/12) = 0px (12 thẻ)
  const currentBlur =
    initialBlurAmount - initialBlurAmount * (progress / blurThreshold);

  // Áp dụng bộ lọc CSS
  backgroundElement.style.filter = `blur(${currentBlur.toFixed(2)}px)`;

  // Kiểm tra trạng thái kết thúc trò chơi
  if (matchedCardsCount === totalCards) {
    // Có thể gọi hàm kết thúc trò chơi ở đây
    console.log("Trò chơi kết thúc!");
    // Thêm logic kết thúc game ở đây nếu cần
  }
}

// init
initBoard();
