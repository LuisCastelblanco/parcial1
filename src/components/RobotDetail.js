// RobotDetail.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/RobotDetail.css';

const RobotDetail = ({ robot, onClose }) => {
  const [robotDetail, setRobotDetail] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchRobotDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3001/robots/${robot.id}`);
        if (response.ok) {
          const data = await response.json();
          setRobotDetail(data); 
        } else if (response.status === 404) {
          console.error('Robot not found');
        } else {
          console.error('Error fetching robot details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching robot details:', error);
      }
    };

    fetchRobotDetail();
  }, [robot]);

  if (!robotDetail) return <p>{t('loading')}</p>;

  return (
    <div className="robot-detail-card">
      <h4 className="robot-name">{robotDetail.nombre}</h4>
      <img src={robotDetail.imagen} alt={robotDetail.nombre} className="robot-image" />
      <div className="robot-details">
        <p><strong>{t('year_of_manufacture')}:</strong> {robotDetail.añoFabricacion}</p>
        <p><strong>{t('processing_capacity')}:</strong> {robotDetail.capacidadProcesamiento}</p>
        <p><strong>{t('humor')}:</strong> {robotDetail.humor}</p>
      </div>
      <button className="btn-close" onClick={onClose}>{t('close')}</button>
    </div>
  );
};

export default RobotDetail;
