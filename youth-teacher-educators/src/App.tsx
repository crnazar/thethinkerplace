import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import {
  TheoreticalFrameworks,
  YouthAsEducators,
  EngineeringInPlace,
  PracticeBasedApproaches,
  Resources,
} from './pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TheoreticalFrameworks />} />
          <Route path="/youth-as-educators" element={<YouthAsEducators />} />
          <Route path="/engineering-in-place" element={<EngineeringInPlace />} />
          <Route path="/practice-based" element={<PracticeBasedApproaches />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
