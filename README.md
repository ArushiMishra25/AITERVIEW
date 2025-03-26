# 🧠 AITERVIEW – AI-Powered Mock Interview Platform  

AI-Terview is an AI-driven **mock interview platform** that **generates dynamic interview questions, evaluates responses, and provides real-time AI feedback** using **Gemini AI**. It helps users practice technical interviews in an interactive way.  

Built with **Next.js, Drizzle ORM, PostgreSQL, and Clerk Auth**, AI-Terview ensures an **engaging, scalable, and secure** experience for users preparing for job interviews.  

---

## 🚀 Tech Stack  

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Drizzle ORM, PostgreSQL, NeonDB  
- **AI Integration:** Gemini AI API  
- **Authentication:** Clerk Auth  
- **Deployment:** Vercel (Frontend), Cloudflare Workers (Backend)  

---

## ✨ Features  

✅ **AI-generated interview questions** 📑  
✅ **Real-time AI feedback & scoring** using **Gemini AI** 🤖  
✅ **User authentication & role management** with Clerk 🔐  
✅ **Optimized database queries** using **Drizzle ORM & PostgreSQL** ⚡  
✅ **Configurable question count** for a personalized experience 🎯  
✅ **Seamless deployment** with **Vercel & Cloudflare Workers** 🚀  

---

## 📦 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/aiterview.git
cd aiterview
npm install
```
## Set up .env.local

# Clerk Authentication  
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
CLERK_SECRET_KEY=your_clerk_secret_key  

# Clerk Sign-in & Sign-up URLs  
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_clerk_signin_url  
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_clerk_signup_url  

# Database Credentials  
NEXT_PUBLIC_DRIZZLE_DATABASE_URL=your_database_url  

# AI Configuration  
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5  
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key  

```sh
npm run dev
```
