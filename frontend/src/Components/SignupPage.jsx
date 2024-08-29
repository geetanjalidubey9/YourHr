// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SignupPage.css';
// import Navbar from'./navbar.jsx';

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
//       try {
//         const response = await axios.post('https://localhost:300/api/signup', formData);
//         setMessage(response.data.msg);
//         if (response.status === 201) { 
//           navigate('/thank-you');
//         }
//       } catch (error) {
//         setMessage(error.response?.data?.msg || 'An error occurred');
//       }
//     };
//     return (
//    <>
//    <Navbar/>
//       <div className="signup-container">
//       <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Phone Number</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Resume URL</label>
//             <input
//               type="text"
//               name="resumeUrl"
//               value={formData.resumeUrl}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
      
//       </div>
//       </>
//     );

//   };

  
//   export default SignupPage ;
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
  
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage(''); // Clear previous messages
      try {
        const response = await axios.post('https://localhost:300/api/signup', formData);
        setMessage(response.data.msg);
        if (response.status === 201) { 
          navigate('/thank-you');
        }
      } catch (error) {
        // Display specific error message if available
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
          {/* Display the message */}
          {message && <div className="form-message">{message}</div>}
        </div>
      </>
    );
};

export default SignupPage;
