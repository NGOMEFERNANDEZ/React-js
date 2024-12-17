import React, { useState } from "react";

const LanguageColors = () => {
  const initialLanguagesWithColors = [
  { language: "Python", color: "Blue" },
  { language: "JavaScript", color: "Yellow" },
  { language: "Java", color: "Red" },
  { language: "C#", color: "Purple" },
  { language: "C", color: "Black" },
  { language: "C++", color: "Gray" },
  { language: "PHP", color: "Cyan" },
  { language: "Swift", color: "Orange" },
  { language: "Kotlin", color: "Pink" },
  { language: "Ruby", color: "Maroon" },
  { language: "Go", color: "Teal" },
  { language: "TypeScript", color: "Navy" },
  { language: "Rust", color: "Brown" },
  { language: "SQL", color: "Beige" },
  { language: "R", color: "Green" },
  { language: "Dart", color: "Lime" },
  { language: "Shell", color: "Silver" },
  { language: "MATLAB", color: "Magenta" },
  { language: "Scala", color: "Gold" },
   { language: "Visual Basic", color: "White" },
  ];

  const [languagesWithColors, setLanguagesWithColors] = useState(initialLanguagesWithColors);
  const [language, setLanguage] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (language && color) {
      setLanguagesWithColors([...languagesWithColors, { language, color }]);
      setLanguage("");
      setColor("");
    }
  };

  return (
    <div>
     <h1>Programming Languages and Their Colors</h1>

  <ul>
 {languagesWithColors.map((item, index) => (
     <li key={index} style={{ color: item.color }}>
         {item.language} - {item.color}
    </li>
    ))}
   </ul>

 <h2>Add a New Language and Color</h2>
 <form onSubmit={handleSubmit}>
  <div>
   <label>
     Programming Language:{" "}
     <input
   type="text"
 value={language}
    onChange={(e) => setLanguage(e.target.value)}
     placeholder="Enter language"
    />
   </label>
  </div>
  <div>
  <label>
     Color:{" "}
     <input
      type="text"
       value={color}
      onChange={(e) => setColor(e.target.value)}
     placeholder="Enter color"
      />
    </label>
     </div>
   <button type="submit">Add</button>
   </form>
  </div>
  );
};

export default LanguageColors;
