**Build & Deploy REST API with MongoDB Compass + Atlas + Express.js to Railway**

---

```markdown
# 🚀 Gym REST API — Express.js + MongoDB (Compass + Atlas) on Railway

This is a fully functional REST API built using **Express.js** and **MongoDB**, supporting both local development (via MongoDB Compass) and cloud deployment (via MongoDB Atlas and Railway).

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** (Compass for local, Atlas for cloud)
- **Railway** (for backend deployment)
- CORS + dotenv + JSON middleware

---

---

## 🛠️ Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gym-rest-api.git
   cd gym-rest-api/backend
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add `.env`**
   Create a `.env` file with the following:

   ```env
   MONGO_URI=your_mongodb_atlas_uri
   PORT=5000
   ```

4. **Run the server**

   ```bash
   node server.js
   ```

   or use

   ```bash
   nodemon server.js
   ```

5. **Test Endpoints**
   Use **Postman** or **Thunder Client** to test:

   * `GET /api/blogs`
   * `POST /api/trainers`
   * etc.

---

## ☁️ Deploy to Railway (Cloud)

1. Go to [https://railway.app](https://railway.app) and sign in.

2. Create a new project → "Deploy from GitHub Repo" → Select this repo.

3. Add environment variables:

   * `MONGO_URI` → From your MongoDB Atlas dashboard

4. Railway auto-installs & runs:

   ```
   npm install
   node server.js
   ```
---

## 🧪 Sample Endpoints

| Method | Route                | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/api/blogs`         | Fetch all blogs     |
| POST   | `/api/trainers`      | Add a new trainer   |
| GET    | `/api/schedule`      | Get class schedule  |
| GET    | `/api/testimonials`  | Get testimonials    |
| GET    | `/api/pricing-plans` | Fetch pricing plans |

---

## 🔐 Environment Variables

| Key        | Description                 |
| ---------- | --------------------------- |
| MONGO\_URI | MongoDB Atlas/Compass URI   |
| PORT       | Port number (default: 5000) |

---

## 🌐 MongoDB Setup Guide

* **Local (Compass)**: Use `mongodb://localhost:27017/gymdb`
* **Cloud (Atlas)**:

  1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  2. Create a cluster → Add database access user → Get connection string
  3. Paste into `.env` as `MONGO_URI`

---

## 👨‍💻 Author

**Yashesh Akbari**

* GitHub: [@yasheshakbari](https://github.com/yasheshakbari)

---

## 📄 License

This project is licensed under the MIT License.
