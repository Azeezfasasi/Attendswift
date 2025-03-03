// import React, { useState } from "react";
// import { useUsers } from "../../contextAPI/TeacherContext"; // Import from UserContext

// function AddTeacherMain() {
//   const { addUser } = useUsers(); // Use addUser instead of addTeacher
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     password: "",
//     email: "",
//     role: "teacher", // Ensure the new user is marked as a teacher
//   });

//   // Handle form change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addUser(formData); // Use addUser instead of addTeacher
//     setFormData({ name: "", username: "", password: "", email: "", role: "teacher" }); // Reset form
//   };

//   return (
//     <div className="w-[95%] lg:w-[70%] bg-[#ffffff] rounded-[5px] flex flex-col gap-2.5 mx-auto lg:mx-0 shadow-lg p-5">
//       <h2 className="text-[#012970] text-lg font-medium">Add a Teacher</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div className="flex flex-col">
//           <label>Full Name</label>
//           <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border border-solid border-gray-400 rounded-[3px] py-[5px] pl-1" required />
//         </div>

//         <div className="flex flex-col">
//           <label>Username</label>
//           <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border border-solid border-gray-400 rounded-[3px] py-[5px] pl-1" required />
//         </div>

//         <div className="flex flex-col">
//           <label>Password</label>
//           <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border border-solid border-gray-400 rounded-[3px] py-[5px] pl-1" required />
//         </div>

//         <div className="flex flex-col">
//           <label>Email</label>
//           <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border border-solid border-gray-400 rounded-[3px] py-[5px] pl-1" required />
//           </div>
//         {/* <button type="submit">Submit</button> */}

//         <div className="pr-2 pl-0 flex flex-row gap-4 items-start justify-start shrink-0 relative">
//           <button type='submit' className="bg-[#0d6efd] rounded-md border-solid border-[#0d6efd] border pt-[7px] pr-[12.94px] pb-[7px] pl-[13px] flex flex-row gap-0 items-start justify-start shrink-0 relative">
//               <div className="text-[#ffffff] text-center font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center">
//                   Submit
//               </div>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTeacherMain;

import { useState } from "react";
import { useProfile } from "../../contextAPI/ProfileContext";

const AddTeacherMain = () => {
  const { register } = useProfile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "teacher",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    
    const response = await register(formData.name, formData.email, formData.password, formData.role);
    
    if (response.success) {
      setMessage({ type: "success", text: "User registered successfully!" });
      setFormData({ name: "", email: "", password: "", role: "teacher" });
    } else {
      setMessage({ type: "error", text: response.message });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New User</h2>

      {message && (
        <div className={`p-3 mb-4 rounded-md text-sm ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddTeacherMain;
