import React, { useEffect } from 'react';
import './App.css';

export default function ConfirmModal({
  show = true,
  title = 'Confirmar',
  message = 'Deseja continuar?',
  confirmText = 'Excluir',
  cancelText = 'Cancelar',
  onConfirm,
  onClose
}) {
  // fecha com ESC e trava scroll do body enquanto o modal está aberto
  useEffect(() => {
    if (!show) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);

    // trava scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = prev;
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <h4>{title}</h4>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            {cancelText}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              onConfirm && onConfirm();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
