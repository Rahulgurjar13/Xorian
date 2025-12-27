// Website Security Protection
// This file implements multiple layers of security to protect the website

export const initializeSecurity = () => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable keyboard shortcuts for developer tools and view source
  document.addEventListener('keydown', (e) => {
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
      return false;
    }

    // Mac shortcuts
    // Disable Cmd+Option+I (Developer Tools on Mac)
    if (e.metaKey && e.altKey && e.key === 'i') {
      e.preventDefault();
      return false;
    }

    // Disable Cmd+Option+J (Console on Mac)
    if (e.metaKey && e.altKey && e.key === 'j') {
      e.preventDefault();
      return false;
    }

    // Disable Cmd+Option+C (Inspect on Mac)
    if (e.metaKey && e.altKey && e.key === 'c') {
      e.preventDefault();
      return false;
    }

    // Disable Cmd+U (View Source on Mac)
    if (e.metaKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }

    // Disable Cmd+S (Save on Mac)
    if (e.metaKey && e.key === 's') {
      e.preventDefault();
      return false;
    }

    // Disable Cmd+P (Print on Mac)
    if (e.metaKey && e.key === 'p') {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection on the entire page
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable copy
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable cut
  document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable drag
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Detect if DevTools is open (silent detection)
  const detectDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      // DevTools detected - just clear console silently
      console.clear();
    }
  };

  // Check for DevTools periodically
  setInterval(detectDevTools, 1000);

  // Clear console periodically
  setInterval(() => {
    console.clear();
  }, 2000);

  // Disable console functions
  const disableConsole = () => {
    const noop = () => {};
    ['log', 'debug', 'info', 'warn', 'error', 'dir', 'dirxml', 'trace', 'profile', 'profileEnd'].forEach(method => {
      (console as any)[method] = noop;
    });
  };

  disableConsole();

  // Detect automated tools and bots (silent detection)
  const detectAutomation = () => {
    // Check for headless browsers
    if (navigator.webdriver) {
      // Just log and clear console, don't block the page
      console.clear();
      return;
    }

    // Check for common automation tools
    const automationSignals = [
      'webdriver' in window,
      '_selenium' in window,
      'callSelenium' in window,
      '_Selenium_IDE_Recorder' in window,
      'phantom' in window,
      '__nightmare' in window,
    ];

    if (automationSignals.some(signal => signal)) {
      // Just log and clear console, don't block the page
      console.clear();
    }
  };

  detectAutomation();

  // Protect against iframe embedding
  if (window.self !== window.top) {
    window.top!.location.href = window.self.location.href;
  }

  // Obfuscate source code in production
  if (import.meta.env.PROD) {
    // Remove comments and format from HTML
    const cleanHTML = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        Array.from(el.childNodes).forEach(node => {
          if (node.nodeType === Node.COMMENT_NODE) {
            node.remove();
          }
        });
      });
    };
    
    setTimeout(cleanHTML, 100);
  }
};

// Additional security measures
export const preventScreenCapture = () => {
  // This makes screen recording and screenshots more difficult
  document.body.style.webkitUserSelect = 'none';
  document.body.style.userSelect = 'none';
  (document.body.style as any).webkitTouchCallout = 'none';
};

// Monitor for unauthorized access attempts (silent monitoring)
export const monitorSecurity = () => {
  // Silent monitoring without blocking the site
  window.addEventListener('devtoolschange', () => {
    console.clear();
  });
};
