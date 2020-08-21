import React, { useState, useEffect } from 'react';
import Foot from './3d-images/3d-Foot-3.glb';
import Header from './components/Header';
import Conditions from './components/Conditions';
import Button from './components/Button';
import Chevron from './components/Chevron';
import { openC, ankleC, bigToeC, heelC, achillesC, soleC } from './objects/ConditionsObject';
import './style/App.css';
import './style/MediaQueries.css';

function App() {
  const [start, setStart] = useState(false);
  const [annotation, setAnnotation] = useState("");
  const [currentView, setCurrentView] = useState(openC["Open a Condition"]);
  const [showChevron, setShowChevron] = useState(false);

  //Click to set or remove annotation for particular foot area
  const toggleAnnotation = (e) => {
    annotation !== e ? setAnnotation(e) : setAnnotation("");
  }

  //add navigate to top chevron button
  useEffect(() => {
    let windowWidth = window.innerWidth;
    window.addEventListener("scroll", (e) => {
      let scrollPosition = window.scrollY;
      if (windowWidth <= 1020 && scrollPosition > 200){
        setShowChevron(true);
      } else if (scrollPosition < 200){
        setShowChevron(false);
      }
    })
  })

  return (
    <div id="container" className="container"> 

      <Header />

      <model-viewer src={Foot}
        ar
        auto-rotate 
        camera-controls
        background-color="#70BCD1"
        shadow-intensity="1"
        exposure="0.35"
        alt="A 3D model of a foot and ankle"
        onClick={() => start === false && setStart(true)}
        onTouchStart={() => start === false && setStart(true)}
      >
        {start && //only once user had touched screen, clicked or dragged the view will buttons show
        <>
        <Button 
          slot="hotspot-ankle" 
          position="-0.03 0.04 -1.07"
          normal="-0.76 -0.08 -0.65" 
          title="Ankle"
          conditionObject={ankleC}
          toggle={(e) => toggleAnnotation(e)}
          toggleSetView={(f) => setCurrentView(f)}
          annotation={annotation}
        />

        <Button 
          slot="hotspot-hallux"
          position="-1.57 -1.32 9.01"
          normal="0.78 0.35 0.52"
          title="Big Toe"
          conditionObject={bigToeC}
          toggle={(e) => toggleAnnotation(e)}
          toggleSetView={(f) => setCurrentView(f)}
          annotation={annotation}
        />

        <Button 
          slot="hotspot-heel"
          position="3.16 -2.16 -1.21"
          normal="0.83 -0.18 -0.53"
          title="Heel"
          conditionObject={heelC}
          toggle={(e) => toggleAnnotation(e)}
          toggleSetView={(f) => setCurrentView(f)}
          annotation={annotation}
        />

        <Button 
          slot="hotspot-achilles"
          position="2.86 0.52 -1.24"
          normal="0.83 -0.1 -0.54"
          title="Achilles"
          conditionObject={achillesC}
          toggle={(e) => toggleAnnotation(e)}
          toggleSetView={(f) => setCurrentView(f)}
          annotation={annotation}
        />

        <Button 
          slot="hotspot-sole"
          position="0.24 -2.66 1.95"
          normal="-0.11 -0.88 0.47"
          title="Sole of the Foot"
          conditionObject={soleC}
          toggle={(e) => toggleAnnotation(e)}
          toggleSetView={(f) => setCurrentView(f)}
          annotation={annotation}
        />
        </>
        }
      </model-viewer>

      <Conditions view={currentView} />

      {showChevron && <Chevron />}

    </div>
  );
}

export default App;