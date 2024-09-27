import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/RobotList.css';
import RobotDetail from './RobotDetail';

const RobotList = () => {
  const [selectedRobot, setSelectedRobot] = useState(null); 

  const robots = [
    {
      id: 1,
      nombre: 'Pedrito',
      modelo: 'PR-001',
      empresa: 'Robotico Corp',
      anioFabricacion: '2015',
      capacidadProcesamiento: '2.4 GHz',
      descripcion: 'Un robot de uso general con gran capacidad para el entretenimiento.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      nombre: 'IronChef',
      modelo: 'IC-3000',
      empresa: 'RoboCocina Inc.',
      anioFabricacion: '2018',
      capacidadProcesamiento: '3.2 GHz',
      descripcion: 'Especialista en preparar comidas deliciosas.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      nombre: 'Chispita',
      modelo: 'LT-007',
      empresa: 'Galactic Robotics',
      anioFabricacion: '2020',
      capacidadProcesamiento: '4.0 GHz',
      descripcion: 'Un droide astromecánico muy leal y valiente.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      nombre: 'SrCalculin',
      modelo: 'BR-001',
      empresa: 'Planet Express',
      anioFabricacion: '2010',
      capacidadProcesamiento: '2.0 GHz',
      descripcion: 'Un robot con una personalidad muy peculiar y divertida.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 5,
      nombre: 'DoctoraBot',
      modelo: 'EVA-001',
      empresa: 'BnL Robotics',
      anioFabricacion: '2021',
      capacidadProcesamiento: '4.5 GHz',
      descripcion: 'Un robot muy avanzado con gran capacidad de aprendizaje.',
      image: 'https://via.placeholder.com/150',

    }
  ];

  const handleRowClick = (robot) => {
    setSelectedRobot(robot); 
  };

  const closeDetail = () => {
    setSelectedRobot(null); 
  };

  return (
    <div className="robot-list-container">
      <h2>Listado de Robots Disponibles para Adopción</h2>
      <Table striped bordered hover className="robot-table text-left">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map(robot => (
            <tr key={robot.id} onClick={() => handleRowClick(robot)} style={{ cursor: 'pointer' }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresa}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      {}
      {selectedRobot && <RobotDetail robot={selectedRobot} onClose={closeDetail} />}
    </div>
  );
};

export default RobotList;
