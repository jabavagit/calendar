import React, { useState, ChangeEvent } from 'react';

const Calendar: React.FC = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const daysInMonth: number = new Date(year, month + 1, 0).getDate();
  console.log(`${daysInMonth}, ${year},${month}`);
  let firstDayOfMonth: number = new Date(year, month, 1).getDay();
  firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Ajusta el primer día del mes para que el lunes sea el primer día de la semana

  const daysOfWeek: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const nameOfMonth: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const days: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(Number(event.target.value));
  };

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className="shadow-xl card lg:card-side bg-base-100">
      <div className="card-body">
        <h2 className="card-title">Dashboard</h2>
        <div>
          <label>
            Mes:
            {/* <input type="select" value={nameOfMonth[month]} onChange={handleMonthChange} /> */}
            <select
              value={month} // ...force the select's value to match the state variable...
              onChange={handleMonthChange} // ... and update the state variable on any change!
            >
              {nameOfMonth.map((month: string, index: number) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
          </label>
          <label>
            Año:
            <input type="number" value={year} min="1" onChange={handleYearChange} />
          </label>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((dayOfWeek: string, index: number) => (
            <div key={index} className="flex items-center justify-center">
              {dayOfWeek}
            </div>
          ))}
          {Array(firstDayOfMonth)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} className="h-12 bg-gray-200 border border-gray-300">
                {' '}
              </div>
            ))}
          {days.map((day: number, index: number) => (
            <div key={index} className="flex items-center justify-center h-12 border border-gray-300">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
