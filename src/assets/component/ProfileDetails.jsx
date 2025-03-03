// import React, { useState, useEffect } from "react";
// import { useProfile } from "../contextAPI/ProfileContext"; 
// import profile from '../images/profile.png';

// const ProfileDetails = () => {
//     const { currentUser, editUserProfile } = useProfile();
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "N/A",
//         role: "N/A",
//         email: "N/A",
//         username: "N/A",
//         password: "",
//         profileImage: profile,
//     });

//     useEffect(() => {
//         if (currentUser) {
//             setFormData({
//                 name: currentUser?.name || "N/A",
//                 role: currentUser?.role || "N/A",
//                 email: currentUser?.email || "N/A",
//                 username: currentUser?.username || "N/A",
//                 password: "",
//                 profileImage: currentUser?.profileImage || "https://via.placeholder.com/150",
//             });
//         }
//     }, [currentUser]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setFormData((prev) => ({ ...prev, profileImage: reader.result }));
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const updatedData = { ...formData };

//         if (!updatedData.password) {
//             delete updatedData.password;
//         }

//         if (currentUser) {
//             editUserProfile(currentUser.id, updatedData);
//         }
//         setIsEditing(false);
//     };

//     if (!currentUser) {
//         return <p className="text-center text-gray-600">Loading profile...</p>;
//     }

//     return (
//         <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
//             <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
//                 Profile Details
//             </h2>

//             <div className="flex flex-col items-center">
//                 <img
//                     src={formData.profileImage}
//                     alt="Profile"
//                     className="rounded-full w-24 h-24 object-cover border border-gray-300"
//                 />
//                 {isEditing && (
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         className="mt-2 text-sm text-gray-500"
//                     />
//                 )}
//             </div>

//             <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
//                 <div>
//                     <label className="block text-gray-700 font-medium">Name:</label>
//                     {isEditing ? (
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                         />
//                     ) : (
//                         <p className="text-gray-800">{formData.name}</p>
//                     )}
//                 </div>

//                 <div>
//                     <label className="block text-gray-700 font-medium">Role:</label>
//                     <p className="text-gray-800">{formData.role}</p>
//                 </div>

//                 <div>
//                     <label className="block text-gray-700 font-medium">Email:</label>
//                     {isEditing ? (
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                         />
//                     ) : (
//                         <p className="text-gray-800">{formData.email}</p>
//                     )}
//                 </div>

//                 <div>
//                     <label className="block text-gray-700 font-medium">Username:</label>
//                     {isEditing ? (
//                         <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                         />
//                     ) : (
//                         <p className="text-gray-800">{formData.username}</p>
//                     )}
//                 </div>

//                 <div>
//                     <label className="block text-gray-700 font-medium">Password:</label>
//                     {isEditing ? (
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Enter new password"
//                             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                         />
//                     ) : (
//                         <p className="text-gray-800">********</p>
//                     )}
//                 </div>

//                 <div className="flex justify-between mt-4">
//                     {isEditing ? (
//                         <>
//                             <button
//                                 type="submit"
//                                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                             >
//                                 Save Changes
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={() => setIsEditing(false)}
//                                 className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
//                             >
//                                 Cancel
//                             </button>
//                         </>
//                     ) : (
//                         <button
//                             type="button"
//                             onClick={() => {
//                                 console.log("Edit button clicked");
//                                 setIsEditing(true);
//                             }}
//                             className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
//                         >
//                             Edit Profile
//                         </button>
//                     )}
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ProfileDetails;

import React from 'react'

function ProfileDetails() {
  return (
    <div>ProfileDetails</div>
  )
}

export default ProfileDetails