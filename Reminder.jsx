import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEdit, FaTrash } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './Reminder.css'; // Import custom CSS file

const Reminder = () => {
  const [quote, setQuote] = useState('');
  const [reminder, setReminder] = useState({
    title: '',
    time: '',
    frequency: 'daily', // default frequency
    timesADay: 1,
  });
  const [remindersList, setRemindersList] = useState([
    { title: 'Take Vitamin D', time: '08:00', frequency: 'daily', timesADay: 1 }, // Faux reminder
  ]); // State to hold the list of reminders
  const [date, setDate] = useState(new Date()); // State to hold the selected date

  const quotes = [
    "Don't watch the clock; do what it does. Keep going.",
    "You are never too old to set another goal or to dream a new dream.",
    "Believe you can and you're halfway there.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Every moment is a fresh beginning.",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminder({
      ...reminder,
      [name]: value,
    });
  };

  const notifyUser = (title) => {
    if (Notification.permission === 'granted') {
      new Notification(`Time for your ${title}!`, {
        body: "Don't forget to take your meds on time.",
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          notifyUser(title);
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reminder Set:', reminder);
    setRemindersList([...remindersList, reminder]); // Add the new reminder to the list
    notifyUser(reminder.title); // For testing
    setReminder({ title: '', time: '', frequency: 'daily', timesADay: 1 }); // Reset the form
  };

  const handleDelete = (index) => {
    const newRemindersList = remindersList.filter((_, i) => i !== index);
    setRemindersList(newRemindersList);
  };

  const handleEdit = (index) => {
    const reminderToEdit = remindersList[index];
    setReminder(reminderToEdit);
    handleDelete(index); // Remove the reminder from the list while editing
  };

  return (
    <div className="container mx-auto p-5 flex justify-center">
      {/* Home Icon */}
      <div className="flex justify-end">
        <Link to="/" className="absolute top-4 right-4 text-[#001f3f] hover:text-white transition duration-300 hover:scale-105">
          <FaHome className="w-10 h-10" />
        </Link>
      </div>

      {/* Left Section - Calendar */}
      <div className="max-w-md mx-4 mt-16">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Calendar</h1>
        <Calendar
          onChange={setDate}
          value={date}
          className="rounded-lg shadow-lg modern-calendar" // Add custom class for styling
        />
      </div>

      {/* Right Section - Set Reminder Box */}
      <div className="bg-white shadow-lg rounded-lg p-5 max-w-md mx-4 mt-16">
        <h2 className="text-lg font-bold mb-4 text-center">✨ {quote} ✨</h2>
        <h1 className="text-2xl font-bold mb-4 text-center">Set a Medication Reminder</h1>

        {/* Reminder Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium" htmlFor="title">Reminder Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={reminder.title}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter reminder title"
            />
          </div>

          <div>
            <label className="block text-lg font-medium" htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={reminder.time}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium" htmlFor="frequency">Frequency:</label>
            <select
              id="frequency"
              name="frequency"
              value={reminder.frequency}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="once">Once</option>
              <option value="twice-a-week">Twice a Week</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium" htmlFor="timesADay">How Many Times a Day:</label>
            <input
              type="number"
              id="timesADay"
              name="timesADay"
              value={reminder.timesADay}
              onChange={handleChange}
              min="1"
              className="mt-1 p-3 border border-gray-300 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full transform hover:scale-105"
          >
            Set Reminder
          </button>
        </form>
      </div>

      {/* Reminders List Box */}
      <div className="bg-white shadow-lg rounded-lg p-5 max-w-md mx-4 mt-16">
        <h1 className="text-2xl font-bold mb-4 text-center">Your Reminders</h1>
        {remindersList.length === 0 ? (
          <p className="text-center text-lg">Add a reminder now!</p>
        ) : (
          <ul className="space-y-2">
            {remindersList.map((rem, index) => (
              <li key={index} className="border-b border-gray-300 pb-2 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{rem.title}</p>
                  <p>Time: {rem.time}</p>
                  <p>Frequency: {rem.frequency}</p>
                  <p>Times a Day: {rem.timesADay}</p>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700 transition duration-200">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700 transition duration-200">
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reminder;