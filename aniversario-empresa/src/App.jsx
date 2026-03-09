import { useState } from 'react';
import MonthCard from './components/MonthCard';
import MonthModal from './components/MonthModal';
import { employees, months } from './data/birthdays';
import './App.css';
import logoImg from '/img/LOGO-ALLCANCI-2048x1062.png';

function App() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const getEmployeesByMonth = (monthName) => {
    return employees.filter((emp) => emp.month === monthName);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const closeModal = () => {
    setSelectedMonth(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logoImg} alt="Allcanci Logo" className="app-logo" />
        <div>
          <h1 className="app-title">🎂 Aniversariantes do Ano - Allcanci</h1>
          <p className="app-subtitle">Confira os aniversários de todos os nossos colaboradores</p>
        </div>
      </header>

      <main className="app-main">
        <div className="months-grid">
          {months.map((month) => (
            <div key={month} onClick={() => handleMonthClick(month)} style={{ cursor: 'pointer' }}>
              <MonthCard
                month={month}
                employees={getEmployeesByMonth(month)}
              />
            </div>
          ))}
        </div>
      </main>

      {selectedMonth && (
        <MonthModal
          month={selectedMonth}
          employees={getEmployeesByMonth(selectedMonth)}
          onClose={closeModal}
        />
      )}

      <footer className="app-footer">
        <p>&copy; 2026 Allcanci Tecnologia - Todos os direitos reservados</p>
        <p style={{ marginTop: '8px', fontSize: '12px', opacity: 0.9 }}>Criado por Rennifer Teixeira</p>
      </footer>
    </div>
  );
}

export default App;
