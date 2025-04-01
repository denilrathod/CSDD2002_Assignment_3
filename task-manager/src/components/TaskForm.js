// import { useState } from "react";
// import '../styles.css'; 

// const TaskForm = ({ addTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTask(title, description);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Task Title"
//       />
//       <textarea
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         placeholder="Task Description"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;


// import { useState } from "react";

// const TaskForm = ({ addTask }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim() || !description.trim()) return;

//     addTask(title, description);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Task Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Task Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;


import { useState, useRef, useEffect } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleInputRef = useRef(null); // Create a ref for the title input

  // Auto-focus input field when component mounts
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addTask(title, description);
    setTitle("");
    setDescription("");
    titleInputRef.current.focus(); // Re-focus after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleInputRef} // Attach ref to input field
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;


