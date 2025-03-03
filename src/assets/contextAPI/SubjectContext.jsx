// import React, { createContext, useContext, useEffect, useState } from "react";

// // Create Context
// const SubjectContext = createContext();

// // Custom Hook to use Subject Context
// export const useSubjects = () => useContext(SubjectContext);

// export const SubjectProvider = ({ children }) => {
//   // Load subjects from localStorage or use default subjects
//   const initialSubjects = JSON.parse(localStorage.getItem("subjects")) || [
//     { id: 1, studentClass: "JSS 1", name: "Mathematics", section: "A" },
//     { id: 2, studentClass: "JSS 2", name: "English Language", section: "B" },
//     { id: 3, studentClass: "JSS 3", name: "Physics", section: "A" },
//   ];

//   const [subjects, setSubjects] = useState(initialSubjects);

//   // Save to localStorage whenever subjects change
//   useEffect(() => {
//     localStorage.setItem("subjects", JSON.stringify(subjects));
//   }, [subjects]);

//   // Function to add a new subject
//   const addSubject = (newSubject, studentClass, section) => {
//     if (!newSubject || !studentClass || !section) return;

//     const updatedSubjects = [
//       ...subjects,
//       {
//         id: subjects.length + 1,
//         name: newSubject,
//         studentClass,
//         section,
//       },
//     ];
//     setSubjects(updatedSubjects);
//   };

//   return (
//     <SubjectContext.Provider value={{ subjects, addSubject }}>
//       {children}
//     </SubjectContext.Provider>
//   );
// };

import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const SubjectContext = createContext();

// Custom Hook to use Subject Context
export const useSubjects = () => useContext(SubjectContext);

export const SubjectProvider = ({ children }) => {
  // Load subjects from localStorage or use default subjects
  const initialSubjects = JSON.parse(localStorage.getItem("subjects")) || [
    { id: 1, studentClass: "JSS 1", name: "Mathematics", section: "A" },
    { id: 2, studentClass: "JSS 2", name: "English Language", section: "B" },
    { id: 3, studentClass: "JSS 3", name: "Physics", section: "A" },
  ];

  const [subjects, setSubjects] = useState(initialSubjects);

  // Save to localStorage whenever subjects change
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  // Function to add a new subject
  const addSubject = (newSubject, studentClass, section) => {
    if (!newSubject || !studentClass || !section) return;

    const updatedSubjects = [
      ...subjects,
      {
        id: subjects.length + 1,
        name: newSubject,
        studentClass,
        section,
      },
    ];
    setSubjects(updatedSubjects);
  };

  // Function to edit a subject
  const editSubject = (id, updatedName) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, name: updatedName } : subject
      )
    );
    alert("Subject updated successfully.");
  };

  // Function to delete a subject
  const deleteSubject = (id) => {
    setSubjects((prevSubjects) => prevSubjects.filter((subject) => subject.id !== id));
    alert("Subject deleted successfully.");
  };

  return (
    <SubjectContext.Provider value={{ subjects, addSubject, editSubject, deleteSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};
