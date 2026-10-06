# VerifyHub

VerifyHub is a student-focused employee verification platform designed to help users verify whether an employee and company relationship exists, helping reduce fake company and job-related scams.

## 🚀 Features

* Company registration and login
* JWT-based company authentication
* Company approval system
* Employee management
* Add and list employees
* Employee verification
* Public verification interface
* Company dashboard
* Employee search and management UI
* Backend API built with FastAPI
* Frontend built with Next.js

## 🛠️ Tech Stack

### Backend

* Python
* FastAPI
* PostgreSQL
* SQLAlchemy
* JWT Authentication
* Passlib / Bcrypt

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

## 📁 Project Structure

```text
VerifyHub/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── dependencies/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── security/
│   │   └── main.py
│   └── test_password.py
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
└── .gitignore
```

## 🔐 Security

The project uses JWT-based authentication for protected company operations.

Sensitive files such as `.env`, virtual environments, `node_modules`, and `.next` are excluded from the GitHub repository.

## ▶️ Running the Project

### Backend

Go to the backend folder:

```bash
cd backend
```

Run the FastAPI application using Uvicorn:

```bash
uvicorn app.main:app --reload
```

### Frontend

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 🎯 Purpose

VerifyHub aims to provide a simple and trustworthy way for students and users to verify employee information and reduce the risk of fake-company and fake-job scams.

## 📌 Project Status

This project is currently under development. The current repository contains the implemented backend and frontend components.
