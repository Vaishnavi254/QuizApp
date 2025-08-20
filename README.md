# 📘 Quiz App

A simple and interactive **Quiz App** built using **HTML, CSS, JavaScript, and jQuery**.  
Users can choose from different categories (Science, Maths, Hindi, Computer, General Knowledge) and attempt quizzes.  
The app displays the score with motivational feedback after submission.

---

## 🚀 Features

- 🎯 Multiple quiz categories:
  - Science
  - Maths
  - Hindi
  - Computer
  - General Knowledge (GK)
- 📑 Questions and answers are stored in **JSON files**.
- 🖱️ Category selection via image click.
- ✅ Score calculation with feedback:
  - Perfect → 🎉 "You're a genius!"
  - Good → 👍 "Keep it up!"
  - Low → 📚 "Keep practicing!"
- 🖼️ Simple UI with logo and category images.
- 💾 Uses **localStorage** to store selected category.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3
- **Scripting:** JavaScript (ES6), jQuery
- **Data:** JSON files
- **Assets:** Images for categories and logo

---

## 📂 Project Structure

quiz-app/
│
├── index.html # Home page (category selection)
├── questionpage.html # Question display page
│
├── css/
│ ├── style.css # Styles for home page
│ └── question.css # Styles for question page
│
├── js/
│ ├── script.js # Category selection logic
│ └── home.js # Quiz rendering and evaluation
│
├── data/
│ ├── science.json # Science questions
│ ├── maths.json # Maths questions
│ ├── hindi.json # Hindi questions
│ ├── computer.json # Computer questions
│ └── GK.json # GK questions
│
├── images/
│ ├── logo.png
│ ├── science.avif
│ ├── maths.jpg
│ ├── hindi.webp
│ ├── computer.webp
│ └── GK.jpg
│
└── README.md


## ▶️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Vaishnavi254/QuizApp
)
Open index.html in your browser.

Click on any category to start the quiz.  
or 
go on this link https://vaishnavi254.github.io/QuizApp/
