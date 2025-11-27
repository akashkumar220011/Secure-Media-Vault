# MERN Stack

A full-stack MERN application that allows users to **sign up, log in, upload assets, view their assets, and manage files** with JWT authentication & multer file uploads.

---

## 🚀 Features

- User Signup / Login (JWT Auth)
- Protected routes for uploads
- File upload using `multer`
- Stores uploaded assets with metadata
- Displays user-specific assets
- React UI with Tailwind CSS
- Axios + Redux Toolkit for state management
- Responsive Dashboard UI

---

# 📦 Project Structure


---

# 🛠 Tech Stack

### **Frontend**
- React + Vite
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router DOM

### **Backend**
- Node.js / Express
- MongoDB + Mongoose
- Multer (file uploads)
- JWT Authentication
- dotenv

---

# ⚙️ Step-by-Step Setup Guide

## 1️⃣ Clone the Repository
```bash
https://github.com/akashkumar220011/Secure-Media-Vault.git
cd Secure-Media-Vault

📁 Backend Setup
2️⃣ Go to backend folder
cd backend

3️⃣ Install dependencies
npm install

4️⃣ Create a .env file

Create backend/.env:

PORT=5000
MONGO_URI=mongodb://localhost:27017/assetdb
JWT_SECRET=this_is_my_secret_key
UPLOAD_FOLDER=uploads

⚠ Create uploads folder
mkdir uploads

5️⃣ Start Backend Server
npm run dev


Backend will run at:

http://localhost:5000

📁 Frontend Setup
6️⃣ Move to frontend folder
cd ../frontend

7️⃣ Install dependencies
npm install

8️⃣ Create .env file

Create frontend/.env:

VITE_API_URL=http://localhost:5000

9️⃣ Start Frontend
npm run dev


Frontend runs at:

http://localhost:5173

🔗 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/signup	Create account
POST	/api/auth/login	Login & get token
Asset Routes (Protected)
Method	Endpoint	Description
POST	/api/assets/upload	Upload a file
GET	/api/assets/my-assets	Get user's assets
🔐 Authentication Flow

User logs in → backend returns JWT token

Frontend stores token in Redux / localStorage

Every protected API call uses:

axios.get("/my-assets", {
  headers: { Authorization: `Bearer ${token}` }
})

🖼 File Upload Process

User clicks Upload button

File sent to backend using multipart/form-data

Multer saves file in /uploads

Metadata stored in MongoDB

Frontend updates assets list

🧪 Testing Credentials (Optional)
email: test@gmail.com
password: 123456

🏁 Build for Production
Frontend build:
npm run build

Backend production:
npm start

🤝 Contributing

Feel free to submit issues or pull requests.

📜 License

This project is licensed under the MIT License.

🙌 Author

Akash Kumar




