import React from 'react';
import '../styles/RobotDetail.css';

const RobotDetail = ({ robot, onClose }) => {
  if (!robot) return null; 

  return (
    <div className="robot-detail-container">
      <button className="btn-close" onClick={onClose}>X</button>
      <h2>Detalle del Robot</h2>
      <img src={robot.image} alt={robot.nombre} className="robot-image" />
      <p><strong>Nombre:</strong> {robot.nombre}</p>
      <p><strong>Modelo:</strong> {robot.modelo}</p>
      <p><strong>Año de fabricación:</strong> {robot.anioFabricacion}</p>
      <p><strong>Capacidad de procesamiento:</strong> {robot.capacidadProcesamiento}</p>
      <p><strong>Descripción:</strong> {robot.descripcion}</p>
    </div>
  );
};

export default RobotDetail;
