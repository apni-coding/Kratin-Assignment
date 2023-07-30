import React, { useState } from 'react';
import Forget from "./Page/Forgetpassword";
import Signup from "./Page/Signup";
import './App.css';
import SignIn from './Page/Sginin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Ourservice from './Component/Ourservice/Ourservice';
import Healthsupport from './Component/Healthsupport/Healthsupport';
import Navbar from './Component/Navbar/Navbar';
import MedicationManagement from './Component/Medicationmangement/MedicationManagement';
import DietaryAssistance from './Component/DietaryAssistance/Dietaryassistance';
import PhysicalTherapy from './Component/PhysicalTherapy/Physicaltherapy';
import Companionship from './Component/Companionship/Companionship';
import RespiteCare from './Component/RespiteCare/RespiteCare';



function App() {
  

  return (
    <>

      <BrowserRouter>
        
          <Navbar /> 


        <Routes>

          <Route path='/' element={<SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ourservices' element={<Ourservice />} />
          <Route path='/healthsupport' element={<Healthsupport />} />
          <Route path='/medicationmanagement' element={<MedicationManagement />} />
          <Route path='/dietaryassistance' element={<DietaryAssistance />} />
          <Route path='/physicaltherapy' element={<PhysicalTherapy />} />
          <Route path='/companionship' element={<Companionship />} />
          <Route path='/respitecare' element={<RespiteCare />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
