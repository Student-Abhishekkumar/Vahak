# 🚚 Replica of Vahak - Freight Loading System

This project is a **Freight Loading System** inspired by **Vahak**, developed using **React** for the frontend, **PHP** for the backend, and **MySQL** for database management.

## 📂 Project Structure

```
/client       --> React Frontend
/server       --> PHP Backend
/database     --> MySQL Database Scripts
```

## 🚀 Features

- User Authentication (Login/Signup)
- View Available Loads
- View Your Lorries
- Freight Marketplace
- Transport Directory
- OTP Verification (Planned)
- Responsive Navbar and Routing

## 🖥️ Tech Stack

| Tech             | Usage                  |
| ---------------- | ---------------------- |
| React            | Frontend (Vite Setup)  |
| PHP              | Backend (API Services) |
| MySQL            | Database               |
| React Router DOM | Routing                |

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/your-username/vahak-freight-system.git
```

2️⃣ **Install Frontend Dependencies**

```bash
cd client
npm install
```

3️⃣ **Run the React App**

```bash
npm run dev
```

4️⃣ **Setup PHP Backend**

- Copy `/server` folder to your XAMPP `htdocs/`
- Start **Apache** and **MySQL** via XAMPP
- Import the SQL file in `/database/vahak.sql` to your phpMyAdmin

5️⃣ **Environment Variables (Frontend)**

```
VITE_API_URL=http://localhost/vahak/server/api
```

## 🌐 Routing (React)

| Route Path             | Component           |
| ---------------------- | ------------------- |
| `/`                    | Home                |
| `/My_Loads`            | My Loads            |
| `/My_Lorries`          | My Lorries          |
| `/Marketplace`         | Marketplace         |
| `/Transport_Directory` | Transport Directory |

## 📸 Logo

![Logo](./assets/logo.png)

## 📄 ER Diagram

See `/assets/er-diagram.png` (Not provided)

## 👥 Contributors

- **Himanshu Paul** - Frontend Developer
- **Abhishek Kumar** - Backend Developer

---

## 🏁 Future Features

- ✅ OTP Verification Integration
- ✅ Advanced Search & Filters
- ✅ Booking Loads Functionality

## 📃 License

This project is open-source for educational purposes.

