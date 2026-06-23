
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};

export const resumeAPI = {
  upload: (formData) => api.post('/resumes/upload', formData),
  getUserResumes: (userId) => api.get(`/resumes/user/${userId}`),
};

export const analysisAPI = {
  analyze: (resumeId, userId, jobDescription) =>
    api.post(`/analysis/analyze?resumeId=${resumeId}&userId=${userId}`, jobDescription, {
      headers: { 'Content-Type': 'application/json' }
    }),
  getUserAnalyses: (userId) => api.get(`/analysis/user/${userId}`),
};

export default api;