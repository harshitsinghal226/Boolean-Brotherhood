import React, { useState } from 'react';
import './FarmerRegistration.css';

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: 'Register as a Farmer',
      subtitle: 'Join our sustainable agriculture platform',
      name: 'Name',
      username: 'Username',
      phone: 'Phone Number',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      address: 'Farm Address',
      register: 'Register',
      required: 'Required',
      nameError: 'Name is required',
      usernameError: 'Username must be at least 3 characters',
      phoneError: 'Please enter a valid 10-digit phone number',
      passwordError: 'Password must be at least 6 characters',
      confirmPasswordError: 'Passwords do not match',
      addressError: 'Farm address is required',
      success: 'Registration successful! (This is a demo)',
      selectLanguage: 'Select Language',
      home: 'Home',
      about: 'About Us',
      contact: 'Contact'
    },
    hi: {
      title: 'किसान के रूप में पंजीकरण करें',
      subtitle: 'हमारे स्थायी कृषि मंच में शामिल हों',
      name: 'नाम',
      username: 'उपयोगकर्ता नाम',
      phone: 'फोन नंबर',
      password: 'पासवर्ड',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      address: 'खेत का पता',
      register: 'पंजीकरण करें',
      required: 'आवश्यक',
      nameError: 'नाम आवश्यक है',
      usernameError: 'उपयोगकर्ता नाम कम से कम 3 अक्षर का होना चाहिए',
      phoneError: 'कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें',
      passwordError: 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए',
      confirmPasswordError: 'पासवर्ड मेल नहीं खाते',
      addressError: 'खेत का पता आवश्यक है',
      success: 'पंजीकरण सफल! (यह एक डेमो है)',
      selectLanguage: 'भाषा चुनें',
      home: 'होम',
      about: 'हमारे बारे में',
      contact: 'संपर्क'
    },
    ta: {
      title: 'விவசாயியாக பதிவு செய்யுங்கள்',
      subtitle: 'எங்கள் நிலைத்த விவசாய தளத்தில் சேரவும்',
      name: 'பெயர்',
      username: 'பயனர் பெயர்',
      phone: 'தொலைபேசி எண்',
      password: 'கடவுச்சொல்',
      confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
      address: 'பண்ணை முகவரி',
      register: 'பதிவு செய்யவும்',
      required: 'தேவை',
      nameError: 'பெயர் தேவை',
      usernameError: 'பயனர் பெயர் குறைந்தது 3 எழுத்துகள் இருக்க வேண்டும்',
      phoneError: 'சரியான 10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்',
      passwordError: 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்',
      confirmPasswordError: 'கடவுச்சொற்கள் பொருந்தவில்லை',
      addressError: 'பண்ணை முகவரி தேவை',
      success: 'பதிவு வெற்றிகரமாக! (இது ஒரு டெமோ)',
      selectLanguage: 'மொழியைத் தேர்வு செய்க',
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      contact: 'தொடர்பு'
    },
    te: {
      title: 'రైతుగా నమోదు చేసుకోండి',
      subtitle: 'మా స్థిరమైన వ్యవసాయ వేదికలో చేరండి',
      name: 'పేరు',
      username: 'వినియోగదారు పేరు',
      phone: 'ఫోన్ నంబర్',
      password: 'పాస్‌వర్డ్',
      confirmPassword: 'పాస్‌వర్డ్‌ని నిర్ధారించండి',
      address: 'పొలం చిరునామా',
      register: 'నమోదు చేసుకోండి',
      required: 'అవసరం',
      nameError: 'పేరు అవసరం',
      usernameError: 'వినియోగదారు పేరు కనీసం 3 అక్షరాలుగా ఉండాలి',
      phoneError: 'చెల్లుబాటు అయ్యే 10 అంకెల ఫోన్ నంబర్‌ని నమోదు చేయండి',
      passwordError: 'పాస్‌వర్డ్ కనీసం 6 అక్షరాలుగా ఉండాలి',
      confirmPasswordError: 'పాస్‌వర్డ్‌లు సరిపోలడం లేదు',
      addressError: 'పొలం చిరునామా అవసరం',
      success: 'నమోదు విజయవంతమైంది! (ఇది డెమో)',
      selectLanguage: 'భాషను ఎంచుకోండి',
      home: 'హోమ్',
      about: 'మా గురించి',
      contact: 'సంప్రదించండి'
    },
    mr: {
      title: 'शेतकरी म्हणून नोंदणी करा',
      subtitle: 'आमच्या टिकाऊ शेती प्लॅटफॉर्ममध्ये सामील व्हा',
      name: 'नाव',
      username: 'वापरकर्ता नाव',
      phone: 'फोन नंबर',
      password: 'पासवर्ड',
      confirmPassword: 'पासवर्डची पुष्टी करा',
      address: 'शेताचा पत्ता',
      register: 'नोंदणी करा',
      required: 'आवश्यक',
      nameError: 'नाव आवश्यक आहे',
      usernameError: 'वापरकर्ता नाव किमान 3 अक्षरे असणे आवश्यक आहे',
      phoneError: 'कृपया वैध 10-अंकी फोन नंबर टाका',
      passwordError: 'पासवर्ड किमान 6 अक्षरे असणे आवश्यक आहे',
      confirmPasswordError: 'पासवर्ड जुळत नाहीत',
      addressError: 'शेताचा पत्ता आवश्यक आहे',
      success: 'नोंदणी यशस्वी! (हा डेमो आहे)',
      selectLanguage: 'भाषा निवडा',
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      contact: 'संपर्क'
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.nameError;
    }

    if (!formData.username.trim()) {
      newErrors.username = t.usernameError;
    } else if (formData.username.length < 3) {
      newErrors.username = t.usernameError;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.phoneError;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = t.phoneError;
    }

    if (!formData.password) {
      newErrors.password = t.passwordError;
    } else if (formData.password.length < 6) {
      newErrors.password = t.passwordError;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t.confirmPasswordError;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.confirmPasswordError;
    }

    if (!formData.address.trim()) {
      newErrors.address = t.addressError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration data:', formData);
      alert(t.success);
    }
  };

  return (
    <div className="farmer-registration-container">
      <nav className="navbar">
        <div className="navbar-container">
          <div className='navbar-left'>
            <img src="../../src/assets/logo.jpg" alt="AgriCarbon Logo" className="navbar-logo" />
          </div>
          <div className="navbar-right">
            <div className="language-selector">
              <label htmlFor="language-select">{t.selectLanguage}</label>
              <select 
                id="language-select"
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="language-select"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
            <div className="nav-links">
              <a href="#" className="nav-link">{t.home}</a>
              <a href="#" className="nav-link">{t.about}</a>
              <a href="#" className="nav-link">{t.contact}</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="registration-content">
        <div className="registration-card">
          <div className="card-header">
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="name">
                {t.name} <span className="required">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                placeholder={t.name}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="username">
                {t.username} <span className="required">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                id="username"
                name="username"
                placeholder={t.username}
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                {t.phone} <span className="required">*</span>
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                name="phone"
                placeholder={t.phone}
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                {t.password} <span className="required">*</span>
              </label>
              {/* <div className="form-control password-input"> */}
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  placeholder={t.password}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              {/* </div> */}
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                {t.confirmPassword} <span className="required">*</span>
              </label>
              {/* <div className="password-input"> */}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              {/* </div> */}
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="address">
                {t.address} <span className="required">*</span>
              </label>
              <textarea
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                id="address"
                name="address"
                placeholder={t.address}
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
              />
              {errors.address && <div className="error-message">{errors.address}</div>}
            </div>

            <button type="submit" className="submit-button">
              {t.register}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegistration;