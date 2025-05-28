import FarmerStock from './components/FarmerStock'
import FarmerRegistration from './components/FarmerRegistration'
import CompanyListing from './components/CompanyListing'
import './App.css'

function App() {
  return (
    <div className="app">
      <FarmerRegistration />
      <FarmerStock />
      <CompanyListing />
    </div>
  )
}

export default App
