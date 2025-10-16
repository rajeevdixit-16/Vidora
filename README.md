# 🎬 Vidora – YouTube-like Video Platform Backend

**Vidora** is a scalable, modern backend API built with **Node.js**, **Express**, and **MongoDB**, designed to power a YouTube-style video streaming platform.  
It supports user authentication, video uploads, likes, subscriptions, and comments — all with a clean modular architecture.

---

## 🚀 Key Features

- 🔐 **Authentication & Authorization** – Secure login and signup using JWT.
- 🎥 **Video Management** – Upload, update, and delete videos with Cloudinary integration.
- 💬 **Comments System** – Engage with content through threaded comments.
- 👍 **Like Functionality** – Like videos or comments with toggle support.
- 👥 **Subscriptions** – Follow other creators to get their latest uploads.
- 📦 **Modular Codebase** – Clean separation of controllers, routes, and utilities.
- 🧠 **Async Error Handling** – Centralized error handling with custom utilities.
- ☁️ **Cloud Storage** – Integrated with Cloudinary for fast and reliable video hosting.

---

## 🧩 Project Structure

```
src/
├── controllers/
│ └── user.controller.js
├── db/
│ └── index.js
├── middlewares/
│ ├── auth.middleware.js
│ └── multer.middleware.js
├── models/
│ ├── comment.model.js
│ ├── like.model.js
│ ├── subscription.model.js
│ ├── user.model.js
│ └── video.model.js
├── routes/
│ ├── like.routes.js
│ ├── subscription.routes.js
│ ├── user.routes.js
│ └── video.routes.js
├── utils/
│ ├── Apierror.js
│ ├── Apiresponse.js
│ ├── asyncHandler.js
│ └── cloudinary.js
├── app.js
├── constants.js
└── index.js
```


---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT |
| **File Uploads** | Multer |
| **Cloud Storage** | Cloudinary |
| **Environment Config** | dotenv |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rajeevdixit-16/Vidora.git
cd Vidora
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Configure environment variables
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
### 4️⃣ Run the server
```
npm start
```

### 🔗 API Endpoints (Overview)
### 👤 User

  POST /api/v1/users/register – Register a new user
  
  POST /api/v1/users/login – Login user
  
  GET /api/v1/users/profile – Get user profile

### 🎥 Video

  POST /api/v1/videos/upload – Upload new video
  
  GET /api/v1/videos/:id – Get single video
  
  DELETE /api/v1/videos/:id – Delete video

### 💬 Comments

  POST /api/v1/comments/:videoId – Add comment
  
  GET /api/v1/comments/:videoId – Fetch comments

### 👍 Likes

  POST /api/v1/likes/toggle/:videoId – Like or unlike a video

### 👥 Subscriptions

  POST /api/v1/subscriptions/:userId – Subscribe to a user
  
  DELETE /api/v1/subscriptions/:userId – Unsubscribe

### 🧠 Error Handling

  Centralized error and response structure using:
  
  ApiError.js for consistent error responses
  
  ApiResponse.js for standardized success messages
  
  asyncHandler.js for safe async execution

### 🧑‍💻 Future Enhancements

  🔍 Video search and filtering
  
  🧩 Playlists and watch later support
  
  📊 Analytics dashboard for creators
  
  🧠 AI-based video recommendations

### 🏁 Author

#👤 Rajeev Dixit
  📧 [dixitrajeev5202@gmail.com]
  💼 [https://www.linkedin.com/in/rajeev-dixit-892526346/]

# 📝 License

This project is licensed under the MIT License – feel free to use and modify it.

