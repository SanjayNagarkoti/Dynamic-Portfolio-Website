// App.jsx
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import PortfolioMockups from './components/Portfolios/PortfolioPage'; // Import your PortfolioMockups component
import PortfolioForm from './components/Portfolios/PortfolioForm'; // Import the new form component
import Template1Image from './components/Portfolios/Template1.png'; // Correct path to the image
function Home() {
  const navigate = useNavigate();

  const handleBuildClick = () => {
    navigate('/build');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Unleash Your Potential</h1>
        <p>
          Create a Portfolio That Gets You Noticed! Whether you're a designer, developer, or creator, 
          our powerful and intuitive portfolio builder helps you stand out from the crowd. 
          Start building your future today—no coding required!
        </p>
        <button className="cta-button" onClick={handleBuildClick}>
          Let's Build →
        </button>
      </header>
    </div>
  );
}

// Define a new component for the "Build" page
function BuildPage() {
  const navigate = useNavigate(); 
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'Modern Template',
      description: 'A sleek and modern design for your portfolio.',
      image: Template1Image,
    },
    {
      id: 2,
      name: 'Creative Template',
      description: 'A colorful and creative portfolio design.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Minimal Template',
      description: 'A clean and minimalistic portfolio template.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
    navigate(`/template/${template.id}`);
  };

  return (
    <div className="App">
      <section className="template-section">
        <h2>Select a Portfolio Template</h2>
        <div className="templates">
          {templates.map((template) => (
            <div key={template.id} className="template-item">
              <img src={template.image} alt={template.name} className="template-image" />
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <button onClick={() => handleTemplateSelection(template)}>
                Preview {template.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Template preview component for displaying the selected template
function TemplatePreviewPage() {
  const { id } = useParams(); 

  if (parseInt(id) === 1) {
    return <PortfolioMockups />;
  }

  const templates = [
    {
      id: 1,
      name: 'Modern Template',
      description: 'A sleek and modern design for your portfolio.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Creative Template',
      description: 'A colorful and creative portfolio design.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Minimal Template',
      description: 'A clean and minimalistic portfolio template.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const template = templates.find(t => t.id === parseInt(id));

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="App">
      <section className="template-preview-section">
        <h2>{template.name} Preview</h2>
        <div className="template-preview">
          <img src={template.image} alt={template.name} className="template-image-large" />
          <p>{template.description}</p>
        </div>
      </section>
    </div>
  );
}

// Define the new form page component
function FormPage() {
  return (
    <div className="App">
      <PortfolioForm />
    </div>
  );
}

// Main App Component that includes the router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/template/:id" element={<TemplatePreviewPage />} />
        <Route path="/form" element={<FormPage />} /> {/* New route for the form page */}
      </Routes>
    </Router>
  );
}

export default App;
