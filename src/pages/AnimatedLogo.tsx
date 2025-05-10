import { useState, useEffect } from "react";

// AnimatedLogo Component
const AnimatedLogo = () => {
  const [animationPhase, setAnimationPhase] = useState("initial");

  useEffect(() => {
    // Start sequence:
    // 1. Initial state (hidden)
    // 2. After 500ms, appear animation
    // 3. After appearance completes, hold for a moment
    // 4. Start disappear animation
    // 5. After disappear animation, redirect

    // Appear from middle
    const appearTimer = setTimeout(() => {
      setAnimationPhase("appear");
    }, 500);

    // Hold for a moment
    const holdTimer = setTimeout(() => {
      setAnimationPhase("hold");
    }, 2000);

    // Start disappearing
    const disappearTimer = setTimeout(() => {
      setAnimationPhase("disappear");
    }, 3500);

    // Redirect after disappearing
    const redirectTimer = setTimeout(() => {
      window.location.href = "/home"; // Redirects to home page
    }, 4700);

    // Clean up timers if component unmounts
    return () => {
      clearTimeout(appearTimer);
      clearTimeout(holdTimer);
      clearTimeout(disappearTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  let animationClass = "";
  switch (animationPhase) {
    case "initial":
      animationClass = "scale-0 opacity-0";
      break;
    case "appear":
      animationClass = "animate-zoom-in";
      break;
    case "hold":
      animationClass = "scale-100 opacity-100";
      break;
    case "disappear":
      animationClass = "animate-zoom-out";
      break;
    default:
      animationClass = "";
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div
        className={`transform transition-all duration-1000 ${animationClass}`}
        onClick={() => (window.location.href = "/")} // Optional: also redirect on click
      >
        {/* Replace this div with your actual logo image */}
        <div className="bg-white p-8 rounded-full shadow-2xl">
          <div className="h-96 w-96 flex items-center justify-center">
            {/* <div className="text-4xl font-bold text-blue-600">Your Logo</div> */}

            <img
              src="/logo2.png"
              alt="Your Logo"
              className="h-96 w-96 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Component that adds the CSS and renders the logo
const ZoomAnimatedLogo = () => {
  useEffect(() => {
    // Add the animation styles to the document
    const styles = `
      /* Zoom in animation */
      @keyframes zoomIn {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        70% {
          transform: scale(1.1);
          opacity: 0.9;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      /* Zoom out animation */
      @keyframes zoomOut {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(0);
          opacity: 0;
        }
      }

      .animate-zoom-in {
        animation: zoomIn 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .animate-zoom-out {
        animation: zoomOut 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Clean up function to remove styles when component unmounts
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return <AnimatedLogo />;
};

export default ZoomAnimatedLogo;
