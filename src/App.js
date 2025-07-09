import React, { useEffect, useState } from 'react';

const AppStoreRedirect = () => {
  const [showUI, setShowUI] = useState(false);
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const detectDeviceAndRedirect = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      // App Store URLs (replace with your actual app URLs)
      const appStoreURL = 'https://apps.apple.com/in/app/perpenny-genie/id6503657159';
      const playStoreURL = 'https://play.google.com/store/apps/details?id=com.nishantsirohi.perwork';
      
      // Detect iOS - redirect immediately
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = appStoreURL;
        return;
      }
      // Detect Android - redirect immediately
      else if (/android/i.test(userAgent)) {
        window.location.href = playStoreURL;
        return;
      }
      // Desktop or unknown device - redirect to perpenny.in
      else {
        window.location.href = 'https://perpenny.in';
        return;
      }
    };

    detectDeviceAndRedirect();
  }, []);

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/app/perpenny', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.perpenny', '_blank');
  };

  if (!showUI) {
    return (
      <div className="min-h-screen bg-gray-900" style={{ backgroundColor: '#070606' }}>
        {/* Empty div - mobile users see this briefly before redirect */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#070606' }}>
      <div className="text-center max-w-md px-5 py-10">
        {/* Logo */}
        <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          PERPENNY
        </div>
        
        {/* Subtitle */}
        <div className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in">
          Your Financial Future Starts Here
        </div>
        
        {/* Device Info */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl mb-8 backdrop-blur-md border border-white border-opacity-20 opacity-0 animate-slide-up">
          <div className="text-5xl mb-4">💻</div>
          <div className="text-xl font-semibold mb-2 text-white">Desktop Device Detected</div>
          <div className="text-gray-400 text-sm mb-6">Choose your platform to download</div>
          
          {/* Manual Download Links */}
          <div className="space-y-4">
            <button
              onClick={handleAppStoreClick}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Download for iOS
            </button>
            
            <button
              onClick={handlePlayStoreClick}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
            >
              <span>🤖</span>
              Download for Android
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
        © 2024 Perpenny. All rights reserved.
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default AppStoreRedirect;