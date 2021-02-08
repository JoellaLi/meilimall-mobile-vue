const devBaseURL = "http://152.136.185.210:7878/api/m5"
const proBaseURL = "http://123.207.32.32:8000"
export const BASE_URL = process.env.NODE_ENV === 'development'? devBaseURL:proBaseURL
export const TIMEOUT = 5000