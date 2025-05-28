import FarmerStock from './components/FarmerStock'
import FarmerRegistration from './components/FarmerRegistration'
import CompanyListing from './components/CompanyListing'
import './App.css'
import CompanyRegistration from './components/CompanyRegistration'

function App() {
  return (
    <div className="app">
      <FarmerRegistration />
      <FarmerStock />
      <CompanyRegistration />
      <CompanyListing />
    </div>
  )
}

export default App
