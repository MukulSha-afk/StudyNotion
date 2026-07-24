# 📚 StudyNotion

StudyNotion is a **fully functional Ed-Tech platform** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It enables users to create, consume, and rate educational content while providing a seamless learning experience for students and a powerful teaching platform for instructors.

---

## 🚀 Project Overview

StudyNotion is designed to bridge the gap between students and instructors by providing an interactive online learning environment.

### 🎯 Objectives

- Provide a seamless and interactive learning experience for students.
- Make education more accessible through online learning.
- Enable instructors to create, manage, and publish high-quality courses.
- Allow students to rate and review educational content.
- Deliver a secure and scalable platform using modern web technologies.

---

# ✨ Features

### 👨‍🎓 Student Features

- User Registration & Login
- Email Verification (OTP)
- Forgot Password
- Browse Available Courses
- Purchase Courses
- Watch Course Videos
- Track Learning Progress
- Wishlist Management
- Course Ratings & Reviews
- Profile Management

### 👨‍🏫 Instructor Features

- Instructor Dashboard
- Create Courses
- Edit & Delete Courses
- Upload Course Videos
- Organize Sections & Lectures
- View Course Analytics
- Manage Published Courses

---

# 🏗️ System Architecture

StudyNotion follows a **Client-Server Architecture** consisting of three major components:

```
                +----------------------+
                |      React Frontend  |
                +----------+-----------+
                           |
                     REST API Calls
                           |
                +----------v-----------+
                | Node.js + Express.js |
                |      Backend API     |
                +----------+-----------+
                           |
                     Mongoose ODM
                           |
                +----------v-----------+
                |      MongoDB Atlas   |
                +----------------------+
```

### Components

### Frontend

- React.js
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router

The frontend provides an intuitive interface for students and instructors while communicating with the backend through REST APIs.

---

### Backend

Built using:

- Node.js
- Express.js
- MongoDB
- Mongoose

Responsible for:

- Authentication
- Course Management
- Payment Handling
- Media Upload
- Business Logic
- API Services

---

### Database

MongoDB stores:

- Users
- Profiles
- Courses
- Categories
- Sections
- SubSections
- Ratings
- Course Progress

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Redux Toolkit
- Tailwind CSS
- React Router
- Axios
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Nodemailer
- Razorpay
- Cloudinary
- Multer

---

# 📂 Project Structure

```
StudyNotion
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── mail
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication

StudyNotion uses secure authentication mechanisms including:

- JWT Authentication
- Password Hashing using Bcrypt
- OTP Email Verification
- Forgot Password
- Role-Based Authorization

---

# 📚 API Design

The backend follows REST API architecture.

### Authentication APIs

```
POST   /auth/signup
POST   /auth/login
POST   /auth/sendOTP
POST   /auth/reset-password-token
POST   /auth/reset-password
```

### Course APIs

```
GET    /course/getAllCourses
GET    /course/getCourseDetails
POST   /course/createCourse
PUT    /course/editCourse
DELETE /course/deleteCourse
```

### Profile APIs

```
GET    /profile/getUserDetails
PUT    /profile/updateProfile
PUT    /profile/updateDisplayPicture
```

### Payment APIs

```
POST /payment/capturePayment
POST /payment/verifyPayment
```

---

# ☁️ Deployment

The application is deployed using cloud-based services.

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render / Railway |
| Database | MongoDB Atlas |
| Media Storage | Cloudinary |
| Payment Gateway | Razorpay |

---

# 🧪 Testing

Testing includes:

- API Testing
- Authentication Testing
- Database Validation
- Payment Flow Testing
- User Interface Testing

---

# 📈 Future Enhancements

Some planned improvements include:

- 🎮 Gamification (Badges & Leaderboards)
- 🤖 AI-powered Course Recommendations
- 📱 Mobile Application
- 👥 Social Learning & Discussion Forums
- 🥽 AR/VR Learning Modules
- 📊 Advanced Instructor Analytics
- 🎓 Personalized Learning Paths

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/StudyNotion.git
```

Move into project directory

```bash
cd StudyNotion
```

Install Frontend Dependencies

```bash
cd client
npm install
```

Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ▶️ Run Locally

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm start
```

---

# 🌟 Highlights

- Full Stack MERN Project
- Secure Authentication with JWT
- Cloudinary Media Management
- Razorpay Payment Integration
- Responsive UI
- Role-Based Access Control
- RESTful APIs
- MongoDB Database
- Instructor Dashboard
- Student Learning Dashboard

---

# 👨‍💻 Author

**Mukul Sharma**

- GitHub: https://github.com/MukulSha-afk
- LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

## ⭐ If you found this project useful, don't forget to give it a Star on GitHub!