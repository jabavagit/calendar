import { ChangeEvent } from "react";

type HeaderProps = {
    month: number;
    year: number;
    handleMonthChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Header = ({month, year, handleMonthChange, handleYearChange}: HeaderProps) => {
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
  return (
    <div>
      <label>
        Mes:
        {/* <input type="select" value={nameOfMonth[month]} onChange={handleMonthChange} /> */}
        <select
          value={month} // ...force the select's value to match the state variable...
          onChange={handleMonthChange} // ... and update the state variable on any change!
        >
          {nameOfMonth.map((month: string, index: number) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </label>
      <label>
        Año:
        <input type="number" value={year} min="1" onChange={handleYearChange} />
      </label>
    </div>
  );
};

export default Header;
