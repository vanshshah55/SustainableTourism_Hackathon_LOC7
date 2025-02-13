import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const publicHolidaysData = {
  [currentYear]: [
    { date: new Date(currentYear, 0, 26), name: 'Republic Day' },
    { date: new Date(currentYear, 2, 8), name: 'Holi' },
    { date: new Date(currentYear, 3, 14), name: 'Ambedkar Jayanti' },
    { date: new Date(currentYear, 4, 1), name: 'May Day' },
    { date: new Date(currentYear, 7, 15), name: 'Independence Day' },
    { date: new Date(currentYear, 9, 2), name: 'Gandhi Jayanti' },
    { date: new Date(currentYear, 10, 4), name: 'Diwali' },
    { date: new Date(currentYear, 11, 25), name: 'Christmas Day' },
  ],
  [nextYear]: [
    { date: new Date(nextYear, 0, 26), name: 'Republic Day' },
    { date: new Date(nextYear, 2, 8), name: 'Holi' },
    { date: new Date(nextYear, 3, 14), name: 'Ambedkar Jayanti' },
    { date: new Date(nextYear, 4, 1), name: 'May Day' },
    { date: new Date(nextYear, 7, 15), name: 'Independence Day' },
    { date: new Date(nextYear, 9, 2), name: 'Gandhi Jayanti' },
    { date: new Date(nextYear, 10, 4), name: 'Diwali' },
    { date: new Date(nextYear, 11, 25), name: 'Christmas Day' },
  ],
};

const PublicHolidays = () => {
  const [year, setYear] = useState(currentYear);
  const holidays = publicHolidaysData[year];

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const holiday = holidays.find(
        (holiday) => holiday.date.toDateString() === date.toDateString()
      );
      return holiday ? (
        <div className="text-red-500 font-bold">{holiday.name}</div>
      ) : null;
    }
  };

  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Public Holidays</h1>
        <p className="text-gray-400 text-lg mb-8">Know the public holidays before planning.</p>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${year === currentYear ? 'bg-[#FF6D00] text-white' : 'bg-neutral-800 text-gray-400'}`}
            onClick={() => setYear(currentYear)}
          >
            {currentYear}
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${year === nextYear ? 'bg-[#FF6D00] text-white' : 'bg-neutral-800 text-gray-400'}`}
            onClick={() => setYear(nextYear)}
          >
            {nextYear}
          </button>
        </div>
        <Calendar
          tileContent={tileContent}
          className="bg-neutral-800 text-white rounded-lg"
        />
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Holiday List</h2>
          <ul className="text-gray-400">
            {holidays.map((holiday, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold text-white">{holiday.name}</span> - {holiday.date.toDateString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicHolidays;