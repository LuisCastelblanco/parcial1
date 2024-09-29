import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n'; 
import { useTranslation } from 'react-i18next'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { t, i18n } = useTranslation(); 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className="app-container">
      {}
      <div className="language-selector text-right">
        <button onClick={() => changeLanguage('es')} className="btn btn-link">ES</button>
        <button onClick={() => changeLanguage('en')} className="btn btn-link">EN</button>
      </div>

      <h1 className="text-center mt-3">{t('headerTitle')}</h1>
      <img
        src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
        alt="Robot Banner"
        className="img-fluid my-3"
        style={{ borderRadius: '8px', maxWidth: '100%' }}
      />

      {}
      {isAuthenticated ? <RobotList /> : <LoginForm onLogin={handleLogin} />}
      
      {}
      <div className="footer">
        {t('footerText')}
      </div>
    </div>
  );
};

export default App;
