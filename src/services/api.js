import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const API = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

// Attach token dynamically to all requests
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Auth APIs
export const registerUser = (data) => API.post("/auth/register", data);

export const loginUser = async (data) => {
    const response = await API.post("/auth/login", data);
    return response;
};

export const logoutUser = async () => {
    try {
        await API.get("/auth/logout");
        localStorage.removeItem("token");
    } catch (error) {
        console.error("Logout failed:", error.response?.data || error.message);
    }
};

// Fetch user details
export const fetchUser = async () => {
    try {
        const response = await API.get("/auth/user");
        return response.data;
    } catch (error) {
        console.error("Error fetching user details:", error.response?.data || error.message);
        return null;
    }
};

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await API.get("/auth/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
        return null;
    }
};

// Fetch Student APIs
export const fetchStudents = async (query = {}) => { // Provide a default empty object
    try {
        const response = await API.get("/students/filter", { params: query });
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error.response?.data || error.message);
        return;
    }
};

// Keep filterStudents as it is
export const filterStudents = (query) => API.get(`/students/filter`, { params: query });



export const addStudent = async (data) => {
    try {
      console.log("Sending request to /students/add with:", data);
      const response = await API.post("/students/add", data);
      console.log("Response from /students/add:", response.data);
      return response.data;
    } catch (error) {
      console.error("API error adding student:", error.response?.data || error.message);
      throw error;
    }
  };
  

export const editStudent = async (studentId, updates) => {
    const response = await API.put(`/students/edit/${studentId}`, updates);
    return response.data;
};

export const deleteStudent = async (studentId) => {
    await API.delete(`/students/${studentId}`);
};

// Password Reset APIs
export const forgotPassword = (email) => API.post("/forgot-password", { email });

export const resetPassword = (token, newPassword) => API.post("/reset-password", { token, newPassword });

// Attendance Management
export const getStudentsByClassAndSection = async (grade, section) => {
    return axios.get(`/students?grade=${grade}&section=${section}`, { withCredentials: true });
  };

// mark attendance
// export const markAttendance = async (data) => {
//     try {
//         const response = await API.post("/students/mark-attendance", data);
//         return response.data;
//     } catch (error) {
//         console.error("Error marking attendance:", error.response?.data || error.message);
//         throw error;
//     }
// };
export const markAttendance = async (data) => {
    try {
        const response = await API.post("/students/mark-attendance", data);
        return response.data;
    } catch (error) {
        console.error("Error marking attendance:", error.response?.data || error.message);
        throw error;
    }
};

// Get attendance records
// export const getAttendanceRecords = () => API.get(`/students/attendance`);
export const getAttendanceRecords = async (grade, section) => {
    return axios.get(`/students?grade=${grade}&section=${section}`, { withCredentials: true });
  };

// Filter students
// export const filterStudents = (query) => API.get(`/students/filter`, { params: query });

// Absence Requests
export const submitAbsenceRequest = (data) => API.post("/students/absence-request", data);
export const viewAbsences = (studentId) => API.get(`/students/absences/${studentId}`);

// Profile Image Upload API
export const uploadProfileImage = (file) => {
    const formData = new FormData();
    formData.append("profileImage", file);
    return API.post("/upload-profile", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
};
