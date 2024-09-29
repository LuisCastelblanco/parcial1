import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/RobotList.css';
import RobotDetail from './RobotDetail';
import { useTranslation } from 'react-i18next';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('http://localhost:3001/robots');
        if (response.ok) {
          const data = await response.json();
          setRobots(data); 
        } else {
          console.error('Error fetching robots:', response.status);
        }
      } catch (error) {
        console.error('Error fetching robots:', error);
      }
    };

    fetchRobots();
  }, []);

  const handleRowClick = (robot) => {
    setSelectedRobot(robot); 
  };

  const closeDetail = () => {
    setSelectedRobot(null); 
  };


return (
  <div className="robot-list-container">
    <div>
    
      <Table striped bordered hover className="robot-table text-left">
        <thead>
          <tr>
            <th>{t('id')}</th>
            <th>{t('name')}</th>
            <th>{t('model')}</th>
            <th>{t('manufacturer')}</th>
          </tr>
        </thead>
        <tbody>
          {robots.map(robot => (
            <tr key={robot.id} onClick={() => handleRowClick(robot)} style={{ cursor: 'pointer' }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
    {selectedRobot && <RobotDetail robot={selectedRobot} onClose={closeDetail} />}
  </div>
);

};

export default RobotList;
