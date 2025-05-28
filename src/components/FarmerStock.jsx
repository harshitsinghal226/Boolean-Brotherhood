import React, { useState } from 'react';
import './FarmerStock.css';

const FarmerStock = () => {
  const [stock, setStock] = useState([
    { id: 1, name: 'Corn Stover', quantity: '500 kg', price: '$150', date: '2024-07-15' },
    { id: 2, name: 'Wheat Straw', quantity: '300 kg', price: '$100', date: '2024-07-10' },
    { id: 3, name: 'Rice Husks', quantity: '400 kg', price: '$120', date: '2024-07-05' },
    { id: 4, name: 'Soybean Hulls', quantity: '250 kg', price: '$80', date: '2024-06-30' },
    { id: 5, name: 'Cotton Gin Trash', quantity: '350 kg', price: '$110', date: '2024-06-25' },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '', date: '' });
  const [selectedItem, setSelectedItem] = useState(null);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      selectLanguage: 'Select Language',
      logout: 'Logout',
      title: 'Farmer Listings',
      subtitle: 'Explore the latest agricultural waste products available from our network of farmers.',
      addProduct: 'Add Product',
      productName: 'Product Name',
      quantity: 'Quantity',
      price: 'Price',
      dateOfCollection: 'Date of Collection',
      actions: 'Actions',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      placeholderProduct: 'Product Name',
      placeholderQuantity: 'Quantity (e.g. 500 kg)',
      placeholderPrice: 'Price (e.g. $100)',
      placeholderDate: 'Date',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '©2024 AgriVal. All rights reserved.',
      confirmDelete: 'Are you sure you want to delete this item?'
    },
    hi: {
      selectLanguage: 'भाषा चुनें',
      logout: 'लॉग आउट',
      title: 'किसान लिस्टिंग',
      subtitle: 'हमारे नेटवर्क से नवीनतम कृषि अपशिष्ट उत्पाद देखें।',
      addProduct: 'उत्पाद जोड़ें',
      productName: 'उत्पाद का नाम',
      quantity: 'मात्रा',
      price: 'मूल्य',
      dateOfCollection: 'संग्रहण तिथि',
      actions: 'क्रियाएँ',
      edit: 'संपादित करें',
      delete: 'हटाएं',
      save: 'सहेजें',
      cancel: 'रद्द करें',
      placeholderProduct: 'उत्पाद का नाम',
      placeholderQuantity: 'मात्रा (जैसे 500 किग्रा)',
      placeholderPrice: 'मूल्य (जैसे ₹100)',
      placeholderDate: 'तिथि',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      copyright: '©2024 AgriVal. सर्वाधिकार सुरक्षित।',
      confirmDelete: 'क्या आप वाकई इस आइटम को हटाना चाहते हैं?'
    },
    ta: {
      selectLanguage: 'மொழியைத் தேர்வு செய்க',
      logout: 'வெளியேறு',
      title: 'விவசாயி பட்டியல்',
      subtitle: 'எங்கள் விவசாயிகள் வலையமைப்பிலிருந்து சமீபத்திய வேளாண்மை கழிவுப் பொருட்களை ஆராயுங்கள்.',
      addProduct: 'பொருள் சேர்க்க',
      productName: 'பொருளின் பெயர்',
      quantity: 'அளவு',
      price: 'விலை',
      dateOfCollection: 'சேகரிப்பு தேதி',
      actions: 'செயல்கள்',
      edit: 'திருத்து',
      delete: 'அழி',
      save: 'சேமி',
      cancel: 'ரத்து செய்',
      placeholderProduct: 'பொருளின் பெயர்',
      placeholderQuantity: 'அளவு (எ.கா. 500 கி.)',
      placeholderPrice: 'விலை (எ.கா. ₹100)',
      placeholderDate: 'தேதி',
      privacy: 'தனியுரிமைக் கொள்கை',
      terms: 'சேவை விதிகள்',
      copyright: '©2024 AgriVal. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      confirmDelete: 'இந்த பொருளை நிச்சயமாக நீக்க விரும்புகிறீர்களா?'
    },
    te: {
      selectLanguage: 'భాషను ఎంచుకోండి',
      logout: 'లాగ్అవుట్',
      title: 'రైతు జాబితా',
      subtitle: 'మా వ్యవసాయదారుల నెట్‌వర్క్ నుండి తాజా వ్యవసాయ వ్యర్థ ఉత్పత్తులను అన్వేషించండి.',
      addProduct: 'ఉత్పత్తి జోడించండి',
      productName: 'ఉత్పత్తి పేరు',
      quantity: 'పరిమాణం',
      price: 'ధర',
      dateOfCollection: 'సేకరణ తేదీ',
      actions: 'చర్యలు',
      edit: 'సవరించు',
      delete: 'తొలగించు',
      save: 'సేవ్ చేయి',
      cancel: 'రద్దు చేయి',
      placeholderProduct: 'ఉత్పత్తి పేరు',
      placeholderQuantity: 'పరిమాణం (ఉదా: 500 కిలోలు)',
      placeholderPrice: 'ధర (ఉదా: ₹100)',
      placeholderDate: 'తేది',
      privacy: 'గోప్యతా విధానం',
      terms: 'సేవా నిబంధనలు',
      copyright: '©2024 AgriVal. అన్ని హక్కులూ పరిరక్షించబడ్డాయి.',
      confirmDelete: 'ఈ వస్తువును ఖచ్చితంగా తొలగించాలనుకుంటున్నారా?'
    },
    mr: {
      selectLanguage: 'भाषा निवडा',
      logout: 'लॉगआउट',
      title: 'शेतकरी सूची',
      subtitle: 'आमच्या शेतकरी नेटवर्कमधून नवीनतम कृषी कचरा उत्पादने एक्सप्लोर करा.',
      addProduct: 'उत्पादन जोडा',
      productName: 'उत्पादनाचे नाव',
      quantity: 'प्रमाण',
      price: 'किंमत',
      dateOfCollection: 'संग्रहाची तारीख',
      actions: 'क्रिया',
      edit: 'संपादित करा',
      delete: 'हटवा',
      save: 'जतन करा',
      cancel: 'रद्द करा',
      placeholderProduct: 'उत्पादनाचे नाव',
      placeholderQuantity: 'प्रमाण (उदा. 500 किग्रॅ)',
      placeholderPrice: 'किंमत (उदा. ₹100)',
      placeholderDate: 'तारीख',
      privacy: 'गोपनीयता धोरण',
      terms: 'सेवेच्या अटी',
      copyright: '©2024 AgriVal. सर्व हक्क राखीव.',
      confirmDelete: 'तुम्हाला खात्री आहे की ही वस्तू हटवायची आहे?'
    }
  };
  const t = translations[language];

  const handleAddStock = () => {
    if (newItem.name && newItem.quantity && newItem.price && newItem.date) {
      if (selectedItem) {
        setStock(stock.map(item => 
          item.id === selectedItem.id ? { ...newItem, id: selectedItem.id } : item
        ));
      } else {
        setStock([...stock, { id: Date.now(), ...newItem }]);
      }
      setNewItem({ name: '', quantity: '', price: '', date: '' });
      setIsAdding(false);
      setSelectedItem(null);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm(t.confirmDelete)) {
      setStock(stock.filter(item => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setNewItem(item);
    setIsAdding(true);
  };

  const handleLogout = () => {
    alert('Logged out! (Demo)');
  };

  return (
    <div className="farmer-stock-listings-container">
      <header className="stock-navbar">
        <div className="stock-navbar-left">
          <img src="../../src/assets/logo.jpg" alt="AgriCarbon Logo" className="navbar-logo" />
        </div>
        <nav className="stock-navbar-right">
          <div className="language-selector">
            <label htmlFor="language-select">{t.selectLanguage}</label>
            <select
              id="language-select"
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="mr">मराठी</option>
            </select>
          </div>
          <button className="stock-logout-btn" onClick={handleLogout}>{t.logout}</button>
        </nav>
      </header>

      <main className="stock-main-content">
        <div className="stock-listings-header-row">
          <div>
            <h1 className="stock-listings-title">{t.title}</h1>
            <p className="stock-listings-desc">{t.subtitle}</p>
          </div>
          <button className="stock-add-btn" onClick={() => setIsAdding(true)}>{t.addProduct}</button>
        </div>

        {isAdding && (
          <div className="stock-add-form">
            <input
              type="text"
              placeholder={t.placeholderProduct}
              value={newItem.name}
              onChange={e => setNewItem({ ...newItem, name: e.target.value })}
              className="stock-input"
            />
            <input
              type="text"
              placeholder={t.placeholderQuantity}
              value={newItem.quantity}
              onChange={e => setNewItem({ ...newItem, quantity: e.target.value })}
              className="stock-input"
            />
            <input
              type="text"
              placeholder={t.placeholderPrice}
              value={newItem.price}
              onChange={e => setNewItem({ ...newItem, price: e.target.value })}
              className="stock-input"
            />
            <input
              type="date"
              placeholder={t.placeholderDate}
              value={newItem.date}
              onChange={e => setNewItem({ ...newItem, date: e.target.value })}
              className="stock-input"
            />
            <div className="stock-form-actions">
              <button onClick={handleAddStock} className="stock-save-btn">{selectedItem ? t.edit : t.save}</button>
              <button onClick={() => { setIsAdding(false); setSelectedItem(null); }} className="stock-cancel-btn">{t.cancel}</button>
            </div>
          </div>
        )}

        <div className="stock-table-wrapper">
          <table className="stock-table-listings">
            <thead>
              <tr>
                <th>{t.productName}</th>
                <th>{t.quantity}</th>
                <th>{t.price}</th>
                <th>{t.dateOfCollection}</th>
                <th>{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {stock.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className="stock-action-link" onClick={() => handleEdit(item)}>{t.edit}</span>
                    {' | '}
                    <span className="stock-action-link" onClick={() => handleDelete(item.id)}>{t.delete}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="stock-footer">
          <div className="stock-footer-links">
            <a href="#">{t.privacy}</a>
            <a href="#">{t.terms}</a>
          </div>
          <div className="stock-footer-copy">{t.copyright}</div>
        </footer>
      </main>
    </div>
  );
};

export default FarmerStock;