import { useEffect, useState } from 'react';
import '../styles/MonthModal.css';

export default function MonthModal({ month, employees, onClose }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Gerar confetes animados
    const generateConfetti = () => {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        color: ['#0052cc', '#ff6b6b', '#ffd93d', '#6bcf7f', '#ff9ff3'][Math.floor(Math.random() * 5)],
      }));
      setConfetti(newConfetti);
    };

    generateConfetti();
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Confetes animados */}
      <div className="confetti-container">
        {confetti.map((conf) => (
          <div
            key={conf.id}
            className="confetti"
            style={{
              left: `${conf.left}%`,
              backgroundColor: conf.color,
              animationDelay: `${conf.delay}s`,
              animationDuration: `${conf.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="modal-content birthday-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header birthday-header">
          <div className="birthday-decoration">🎉</div>
          <h2 className="modal-title">🎂 {month} 🎂</h2>
          <div className="birthday-decoration">🎉</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body birthday-body">
          {employees.length > 0 ? (
            <>
              <div className="birthday-intro">
                <p className="birthday-count">🎈 {employees.length} aniversariante{employees.length > 1 ? 's' : ''} em {month}! 🎈</p>
              </div>
              <ul className="modal-employees-list birthday-list">
                {employees.map((employee) => (
                  <li key={employee.id} className="modal-employee-item birthday-item">
                    <div className="employee-info">
                      <span className="modal-employee-name">🎂 {employee.name}</span>
                      <span className="modal-employee-date">{employee.date}</span>
                    </div>
                    <span className="birthday-emoji">🎉</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="modal-no-employees">Nenhum aniversariante neste mês</p>
          )}
        </div>
      </div>
    </div>
  );
}
