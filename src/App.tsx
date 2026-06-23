import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToHash } from './components/ScrollToHash'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { PlatformTermsPage } from './pages/PlatformTermsPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { RefundPolicyPage } from './pages/RefundPolicyPage'
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="/platform-terms" element={<PlatformTermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
