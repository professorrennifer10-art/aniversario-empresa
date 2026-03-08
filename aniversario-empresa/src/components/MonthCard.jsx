import '../styles/MonthCard.css';

export default function MonthCard({ month, employees }) {
  return (
    <div className="month-card">
      <h2 className="month-title">{month}</h2>
      <ul className="employees-list">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <span className="employee-name">{employee.name}</span>
            <span className="employee-date">{employee.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
