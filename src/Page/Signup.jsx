import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Login.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { app, auth, storage, db } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setProfilePicture(selectedImage);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      // Step 1: Create the user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Upload the profile picture to Firebase Storage (if selected)
      if (profilePicture) {
        const storageRef = storage.ref();
        const profilePictureRef = storageRef.child(`profilePictures/${user.uid}`);
        await profilePictureRef.put(profilePicture);
        const profilePictureUrl = await profilePictureRef.getDownloadURL();

        // Step 3: Update the user's profile with the profile picture URL
        await updateProfile(user, { displayName: user.email, photoURL: profilePictureUrl });
      }

      // Step 4: Save additional user information to Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        // Add other user information here if needed
      });

      
      console.log('Signup successful!');
      navigate("/signin")
      
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <section className="section">
      <div className="login-box">
        <form onSubmit={handleSignup}>
          <h2>Signup</h2>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="">Password</label>
          </div>

          <div className="input-box ">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input type="file" accept="image/*" onChange={handleImageChange} className='profilephoto' />
            <label htmlFor="">Profile Picture</label>
          </div>

          <div className="remember-forget">
            <label htmlFor="">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forget">Forgot Password </Link>
          </div>

          <button type="submit">Signup</button>

          <div className="register-link">
            <p>
              Already have an account? <Link to="/signin">Signin</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
