# ResumeIQ — AI Powered Resume Analyzer

> ResumeIQ is an AI-powered resume analyzer platform built with Java Spring Boot and React, enabling job seekers to upload their resume and match it against any job description using LLM API integration. The platform delivers instant match scores, missing keyword detection, and personalized improvement suggestions through a secure JWT-authenticated full-stack application with PDF parsing capabilities and analysis history tracking.

🌐 **Live at:** [resumeiq-ai-resume-analyzer.netlify.app](https://resumeiq-ai-resume-analyzer.netlify.app)

---

## 🚀 Features

- User Authentication & Authorization
  - Secure registration and login
  - JWT-based authentication
  - BCrypt password encryption

- Resume Management
  - PDF resume upload and parsing using Apache PDFBox
  - Store and manage multiple resumes
  - Resume history tracking

- AI-Powered Analysis
  - Paste any job description from LinkedIn, Naukri, etc.
  - LLM API integration for intelligent resume analysis
  - Instant match score (0-100%) generation
  - Missing keywords detection
  - Personalized improvement suggestions

- Dashboard & Analytics
  - View all past analyses
  - Track best match score
  - Average quality score monitoring
  - Analysis history with visual progress bars

- Security & Performance
  - JWT secured REST APIs
  - Spring Security integration
  - Docker containerized deployment

---

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot 3
- Spring Security + JWT
- Spring Data JPA + Hibernate
- Apache PDFBox (PDF Parsing)
- LLM API Integration (AI Analysis)
- MySQL

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Deployment
- Frontend → Netlify
- Backend → Render
- Database → MySQL

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

**Janhavi Dimble**
- LinkedIn: [linkedin.com/in/janhavidimble](https://linkedin.com/in/janhavidimble)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

