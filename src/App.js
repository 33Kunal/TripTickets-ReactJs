import React from "react";
import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="KATIE-PERRY.PNG"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
 function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  );
  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
        </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      function Panel({
  title,
  children,
  isActive,
  onShow
})
{
  return (
    <section className="panel">
      <h3>{title}</h3>s
      {isActive ? (
        <p>{children}</p>
      ): (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
<div>
     <ContactList
       contacts={contacts}
       selectedContact={to}
       onSelect={contact => setTo(contact)}
     />
     <Chat contact={to} />
   </div>
 )
 const contacts = [

  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

export default function TaskApp() {s
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

}
}

