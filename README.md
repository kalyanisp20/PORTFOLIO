# 🌟 Personal Portfolio Website

Welcome to my **MERN Stack Portfolio Website**! This project showcases my skills, experience, and projects in a beautifully designed and fully responsive layout. The site includes a **contact form** that sends real emails using **Nodemailer** and the **SMTP protocol**, styled with **Tailwind CSS** for a clean and modern look.


---

## 🚀 Tech Stack

| Frontend       | Backend       | Styling       | Features                |
|----------------|---------------|---------------|-------------------------|
| React.js       | Node.js       | Tailwind CSS  | Contact Form            |
| JSX            | Express.js    |               | Nodemailer + SMTP       |
| Axios          | MongoDB*      |               | Email Notifications     |

> 📌 *MongoDB is optional if you choose to store messages.*

---

## 📸 Features

- ✨ Modern and attractive portfolio design
- 📱 Fully responsive across all devices
- 📁 Sections for About Me, Projects, Skills, Resume, and Contact
- 📬 Working contact form integrated with Nodemailer (SMTP)
- 💌 Sends real emails to your inbox
- ⚡ Smooth transitions, animations, and interactive UI
- 🧠 Clean, modular code structure for easy customization

---

## 📂 Project Structure
my-portfolio/ ├── backend/ │ ├── server.js │ ├── routes/ │ ├── controllers/ │ └── .env ├── frontend/ │ ├── public/ │ └── src/ │ ├── assets/ │ ├── components/ │ ├── pages/ │ ├── App.jsx │ └── main.jsx ├── README.md └── package.json



---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mern-portfolio.git
cd mern-portfolio


2️⃣ Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
🌐 Frontend will run on http://localhost:5173


3️⃣ Run Backend
bash
Copy
Edit
cd backend
npm install
npm run dev
🔁 Backend runs on http://localhost:5000


📤 Contact Form Flow
User fills out the contact form

Data is sent to backend via Axios POST request

Nodemailer sends email using SMTP credentials

Response sent back to frontend with confirmation


🖼️ Screenshots
Add screenshots of your portfolio here


About Page	Contact Form
![image](https://github.com/user-attachments/assets/32c856a8-0fdb-474a-a4f2-a6ada14715dd)

![image](https://github.com/user-attachments/assets/0a3eb3b4-8fcb-40f9-b0f3-9aa9805eabe0)



