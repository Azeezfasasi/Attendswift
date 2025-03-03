// import React, { useState } from "react";

// const StudentReport = () => {
//   const [subject, setSubject] = useState("Advance Java");
//   const [section, setSection] = useState("A");
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
//   const [filteredData, setFilteredData] = useState([]);

//   // Mock data for different subjects & sections
//   const today = new Date().toISOString().split("T")[0]; // Get current date in "YYYY-MM-DD" format

//   const allData = [
//     // JSS 1
//     { id: 100001, name: "Maria", age: "11 years", subject: "JSS 1", section: "A", date: today, class: "JSS 1", section: "A" },
//     { id: 100002, name: "John", age: "8 years", subject: "JSS 1", section: "A", date: today, class: "JSS 1", section: "A" },
//     { id: 100003, name: "Bimpe", age: "13 years", subject: "JSS 1", section: "B", date: today, class: "JSS 1", section: "B" },
//     { id: 100004, name: "Vic", age: "11 years", subject: "JSS 1", section: "B", date: today, class: "JSS 1", section: "B" },

//     // JSS 2
//     { id: 100005, name: "Alex", age: "11 years", subject: "JSS 2", section: "B", date: today, class: "JSS 2", section: "B" },
//     { id: 100006, name: "Azeez", age: "9 years", subject: "JSS 2", section: "A", date: today, class: "JSS 2", section: "A" },
//     { id: 100007, name: "Mike", age: "14 years", subject: "JSS 2", section: "B", date: today, class: "JSS 2", section: "B" },
//     { id: 100008, name: "Jodan", age: "12 years", subject: "JSS 2", section: "A", date: today, class: "JSS 2", section: "A" },

//     // JSS 3
//     { id: 100007, name: "Wasiu", age: "11 years", subject: "JSS 3", section: "A", date: today, class: "JSS 3", section: "A" },
//     { id: 100010, name: "Bama", age: "13 years", subject: "JSS 3", section: "A", date: today, class: "JSS 3", section: "A" },
//     { id: 100011, name: "Judith", age: "19 years", subject: "JSS 3", section: "B", date: today, class: "JSS 3", section: "B" },
//     { id: 100012, name: "Paul", age: "9 years", subject: "JSS 3", section: "B", date: today, class: "JSS 3", section: "B" },

//     // SSS 1
//     { id: 1000013, name: "Maria", age: "11 years", subject: "SSS 1", section: "A", date: today, class: "SSS 1", section: "A" },
//     { id: 1000014, name: "John", age: "13 years", subject: "SSS 1", section: "A", date: today, class: "SSS 1", section: "A" },
//     { id: 1000015, name: "Bimpe", age: "12 years", subject: "SSS 1", section: "B", date: today, class: "SSS 1", section: "B" },
//     { id: 1000016, name: "Vic", age: "15 years", subject: "SSS 1", section: "B", date: today, class: "SSS 1", section: "B" },

//     // SSS 2
//     { id: 1000017, name: "Alex", age: "11 years", subject: "SSS 2", section: "B", date: today, class: "JSS 2", section: "B" },
//     { id: 1000018, name: "Azeez", age: "17 years", subject: "SSS 2", section: "A", date: today, class: "SSS 2", section: "A" },
//     { id: 1000019, name: "Mike", age: "16 years", subject: "SSS 2", section: "B", date: today, class: "SSS 2", section: "B" },
//     { id: 1000020, name: "Jodan", age: "12 years", subject: "SSS 2", section: "A", date: today, class: "SSS 2", section: "A" },

//     // SSS 3
//     { id: 1000021, name: "Wasiu", age: "11 years", subject: "SSS 3", section: "A", date: today, class: "SSS 3", section: "A" },
//     { id: 100022, name: "Bama", age: "10 years", subject: "SSS 3", section: "A", date: today, class: "SSS 3", section: "A" },
//     { id: 100023, name: "Judith", age: "10 years", subject: "SSS 3", section: "B", date: today, class: "SSS 3", section: "B" },
//     { id: 100024, name: "Paul", age: "13 years", subject: "SSS 3", section: "B", date: today, class: "SSS 3", section: "B" },
//   ];

//   // Function to filter data when "Generate Sheet" is clicked
//   const generateReport = () => {
//     const filtered = allData.filter(
//       (item) => item.subject === subject && item.section === section && item.date === date
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
//       {/* Filters Section */}
//       <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap items-center gap-4 mb-6">
//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-700">Class</label>
//           <select
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           >
//             <option>Select a Class</option>
//             <option>JSS 1</option>
//             <option>JSS 2</option>
//             <option>JSS 3</option>
//             <option>SSS 1</option>
//             <option>SSS 2</option>
//             <option>SSS 3</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-700">Section</label>
//           <select
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//             value={section}
//             onChange={(e) => setSection(e.target.value)}
//           >
//             <option>A</option>
//             <option>B</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-700">Date</label>
//           <input
//             type="date"
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={generateReport}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition cursor-pointer mt-[20px]"
//         >
//           Generate Sheet
//         </button>
//       </div>

//       {/* Subject Report Table */}
//       <h2 className="text-lg font-semibold text-[#012970] mb-3">Subject Report</h2>
//       <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-blue-50 text-left text-[#012970] text-sm font-medium">
//             <tr>
//               <th className="p-3">Student ID</th>
//               <th className="p-3">Student name</th>
//               <th className="p-3">Age</th>
//               <th className="p-3">Class</th>
//               <th className="p-3">Arm</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {filteredData.length > 0 ? (
//               filteredData.map((item, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="p-3">{item.id}</td>
//                   <td className="p-3">{item.name}</td>
//                   <td className="p-3">{item.age}</td>
//                   <td className="p-3">{item.class}</td>
//                   <td className="p-3">{item.section}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="p-3 text-center text-gray-500">
//                   No records found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentReport;

import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useSchool } from "../../contextAPI/SchoolContext";

const CurrentStudents = () => {
  const { students, deleteStudent, editStudent } = useSchool();
  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const handleSave = () => {
    editStudent(editingStudent);
    setEditingStudent(null);
  };

  const handleChange = (e) => {
    setEditingStudent({ ...editingStudent, [e.target.name]: e.target.value });
  };

  const filteredStudents = students?.filter(student =>
    student.name?.toLowerCase().includes(search.toLowerCase()) ||
    student.email?.toLowerCase().includes(search.toLowerCase()) ||
    student.username?.toLowerCase().includes(search.toLowerCase()) ||
    student.id?.toString().includes(search.toLowerCase()) ||
    student.grade?.toLowerCase().includes(search.toLowerCase()) ||
    student.section?.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-[#012970]">Current Students</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-blue-50 text-left text-[#012970] text-sm font-medium">
            <tr>
              <th className="p-3">Student ID</th>
              <th className="p-3">Student Name</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Section</th>
              <th className="p-3">Email</th>
              <th className="p-3">Username</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.grade}</td>
                <td className="p-3">{student.section}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Student Modal */}
      {editingStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-3">Edit Student</h2>
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editingStudent.name}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                placeholder="Student Name"
              />
              
              <label>Grade</label>
              <select name="grade" value={editingStudent.grade} onChange={handleChange} className="border rounded-md p-2 w-full">
                <option value="">Select Grade</option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
                <option value="SSS 1">SSS 1</option>
                <option value="SSS 2">SSS 2</option>
                <option value="SSS 3">SSS 3</option>
              </select>

              <label>Section</label>
              <select name="section" value={editingStudent.section} onChange={handleChange} className="border rounded-md p-2 w-full">
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={editingStudent.email}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                placeholder="Email"
              />

              <label>Username</label>
              <input
                type="text"
                name="username"
                value={editingStudent.username}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                placeholder="Username"
              />

              {/* Change Password */}
              <label>Change Password</label>
              <input
                type="password"
                name="password"
                value={editingStudent.password}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                placeholder="New Password"
              />
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={() => setEditingStudent(null)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentStudents;
