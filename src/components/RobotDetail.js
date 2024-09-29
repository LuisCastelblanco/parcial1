import React, { useEffect, useState } from 'react';
import '../styles/RobotDetail.css';
import { useTranslation } from 'react-i18next';

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
    <div className="robot-detail-container">
      <button className="btn-close" onClick={onClose}>{t('close')}</button>
      <h2>{t('robot_details')}</h2>
      <img src={robotDetail.imagen} alt={robotDetail.nombre} className="robot-image" />
      <p><strong>{t('name')}:</strong> {robotDetail.nombre}</p>
      <p><strong>{t('model')}:</strong> {robotDetail.modelo}</p>
      <p><strong>{t('year_of_manufacture')}:</strong> {robotDetail.añoFabricacion}</p>
      <p><strong>{t('processing_capacity')}:</strong> {robotDetail.capacidadProcesamiento}</p>
      <p><strong>{t('additional_features')}:</strong> {robotDetail.humor}</p>
    </div>
  );
};

export default RobotDetail;
