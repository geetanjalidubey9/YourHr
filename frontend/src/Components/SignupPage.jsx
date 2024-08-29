
// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SignupPage.css';
// import Navbar from './navbar.jsx';

// const SignupPage = () => {
//     const [formData, setFormData] = useState({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       phoneNumber: '',
//       resumeUrl: '',
//     });
  
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setMessage(''); 
//       try {
//         const response = await axios.post('https://yourhr-o5kg.onrender.com/api/signup', formData);
//         setMessage(response.data.msg);
//         if (response.status === 201) { 
//           navigate('/thank-you');
//         }
//       } catch (error) {
    
//         if (error.response && error.response.data && error.response.data.msg) {
//           setMessage(error.response.data.msg);
//         } else {
//           setMessage('An unexpected error occurred. Please try again later.');
//         }
//       }
//     };

//     return (
//       <>
//         <Navbar />
//         <div className="signup-container">
//           <h2>Sign Up</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Phone Number</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Resume URL</label>
//               <input
//                 type="text"
//                 name="resumeUrl"
//                 value={formData.resumeUrl}
//                 onChange={handleChange}
//               />
//             </div>
//             <button type="submit">Sign Up</button>
//           </form>
        
//           {message && <div className="form-message">{message}</div>}
//         </div>
//       </>
//     );
// };

// export default SignupPage;
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import Navbar from './navbar.jsx';

const SignupPage = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      resumeUrl: '',
    });
  
    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      resumeUrl: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const validateForm = () => {
      const newErrors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone number must be a 10-digit number';
      }
      if (!passwordRegex.test(formData.password) || formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long and include both letters and numbers';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage('');
      
      if (!validateForm()) {
        return;
      }

      try {
        const response = await axios.post('https://yourhr-o5kg.onrender.com/api/signup', formData);
        setMessage(response.data.msg);
        if (response.status === 201) { 
          navigate('/thank-you');
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.msg) {
          setMessage(error.response.data.msg);
        } else {
          setMessage('An unexpected error occurred. Please try again later.');
        }
      }
    };

    return (
      <>
        <Navbar />
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <div className="form-error">{errors.password}</div>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errors.phoneNumber && <div className="form-error">{errors.phoneNumber}</div>}
            </div>
            <div className="form-group">
              <label>Resume URL</label>
              <input
                type="text"
                name="resumeUrl"
                value={formData.resumeUrl}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        
          {message && <div className="form-message">{message}</div>}
        </div>
      </>
    );
};

export default SignupPage;
