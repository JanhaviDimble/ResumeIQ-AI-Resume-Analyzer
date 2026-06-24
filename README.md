<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=45&duration=3000&pause=1000&color=6C63FF&center=true&vCenter=true&width=700&lines=ResumeIQ+🚀;✨+✨AI+Powered+Resume+Analyzer✨+✨;✨✨Land+Your+Dream+Job+Faster!+💼)](https://git.io/typing-svg)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-6C63FF?style=for-the-badge)](https://resumeiq-ai-resume-analyzer-1.netlify.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()

<br/>

> 🎯 **ResumeIQ** is an AI-powered resume analyzer platform that helps job seekers match their resume against any job description — delivering instant match scores, missing keyword detection, and personalized improvement suggestions.

</div>

---

## 🛠️ Tech Stack

<div align="center">

### Backend
![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Deployment
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

---
## ✨ Screenshots

<div align="center">
<img width="1920" height="1080" alt="Screenshot (2285)" src="https://github.com/user-attachments/assets/6990dd3a-5543-4d7c-af89-f23ef3ea5012" />
<img width="1920" height="1080" alt="Screenshot (2287)" src="https://github.com/user-attachments/assets/8e847489-67a1-4c37-b826-2bf6d4b0b7ed" />
<img width="1920" height="1080" alt="Screenshot (2288)" src="https://github.com/user-attachments/assets/54d61f76-0461-4412-9e9e-454d61b2be7e" />
<img width="1920" height="1080" alt="Screenshot (2278)" src="https://github.com/user-attachments/assets/ed556caf-609d-4fd6-bd10-ea13d08ae978" />
<img width="1920" height="1080" alt="Screenshot (2281)" src="https://github.com/user-attachments/assets/2d824118-4f44-4b50-99ab-2ac6fe796718" />
<img width="1920" height="1080" alt="Screenshot (2283)" src="https://github.com/user-attachments/assets/da2f1dc5-0627-4d27-b659-cd0c1f05458d" />
</div>

---

## 🚀 Features

<table>
<tr>
<td>

### 🔐 Authentication
- Secure registration & login
- JWT-based authentication
- BCrypt password encryption

</td>
<td>

### 📄 Resume Management
- PDF upload & parsing (Apache PDFBox)
- Store multiple resumes
- Resume history tracking

</td>
</tr>
<tr>
<td>

### 🤖 AI-Powered Analysis
- Paste any job description (LinkedIn, Naukri)
- LLM API integration
- Instant match score (0–100%)
- Missing keywords detection
- Personalized suggestions

</td>
<td>

### 📊 Dashboard & Analytics
- View all past analyses
- Track best match score
- Average quality score
- Visual progress bars

</td>
</tr>
</table>

---

## 📁 Project Structure

```
ResumeIQ/
├── resumeIQ/                          # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/resumeiq/
│   │       │   ├── controller/
│   │       │   ├── model/
│   │       │   ├── repository/
│   │       │   ├── service/
│   │       │   └── security/
│   │       └── resources/
│   ├── Dockerfile
│   └── pom.xml
│
└── resumeiq-frontend/                 # React Frontend
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── services/
    ├── public/
    └── package.json
```

---

## ⚙️ Local Setup

### Backend

```bash
# Clone repo
git clone https://github.com/JanhaviDimble/resumeiq.git

# Open resumeIQ in STS/IntelliJ
# Update application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/resumeiq_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
claude.api.key=YOUR_API_KEY

# Run Spring Boot App
```

### Frontend

```bash
cd resumeiq-frontend
npm install
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/resumes/upload` | Upload PDF resume |
| GET | `/api/resumes/user/{userId}` | Get user resumes |
| POST | `/api/analysis/analyze` | Analyze resume vs JD |
| GET | `/api/analysis/user/{userId}` | Get analysis history |

---

## 🗄️ Database Schema

```sql
users       → id, name, email, password, created_at
resumes     → id, user_id, file_name, file_path, uploaded_at
analyses    → id, user_id, resume_id, job_description,
              match_score, quality_score, missing_keywords,
              suggestions, created_at
```

---

## 👩‍💻 Developer

<div align="center">

**Janhavi Dimble**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/janhavidimble)

</div>

---
