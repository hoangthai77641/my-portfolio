'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editContent, setEditContent] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroDescription: '',
    aboutText1: '',
    aboutText2: '',
  });

  // Simple password check (in production, use proper authentication)
  const handleLogin = () => {
    if (password === 'admin123') {
      // Change this to a secure password
      setIsAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  const handleSave = () => {
    // This would typically send data to an API
    // For now, just show instructions
    const instructions = `
To update your portfolio content:

1. Go to GitHub: https://github.com/hoangthai77641/my-portfolio
2. Navigate to: src/data/translations.ts
3. Update the following values:

heroSubtitle: "${editContent.heroSubtitle}"
heroDescription: "${editContent.heroDescription}"
aboutText1: "${editContent.aboutText1}"
aboutText2: "${editContent.aboutText2}"

4. Commit changes and Vercel will auto-deploy!
    `;

    alert(instructions);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio Admin Panel
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {!isAuthenticated ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter admin password"
                  onKeyPress={e => e.key === 'Enter' && handleLogin()}
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hero Subtitle
                </label>
                <input
                  type="text"
                  value={editContent.heroSubtitle}
                  onChange={e =>
                    setEditContent(prev => ({
                      ...prev,
                      heroSubtitle: e.target.value,
                    }))
                  }
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., Fresher Full-Stack Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hero Description
                </label>
                <textarea
                  value={editContent.heroDescription}
                  onChange={e =>
                    setEditContent(prev => ({
                      ...prev,
                      heroDescription: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Brief description about yourself"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  About Text 1
                </label>
                <textarea
                  value={editContent.aboutText1}
                  onChange={e =>
                    setEditContent(prev => ({
                      ...prev,
                      aboutText1: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="First paragraph about yourself"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  About Text 2
                </label>
                <textarea
                  value={editContent.aboutText2}
                  onChange={e =>
                    setEditContent(prev => ({
                      ...prev,
                      aboutText2: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Second paragraph about yourself"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
                >
                  Generate Update Instructions
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium"
                >
                  Cancel
                </button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                  💡 Quick Edit Tips:
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>
                    • Edit content here, then get GitHub update instructions
                  </li>
                  <li>
                    • Changes will auto-deploy to Vercel after GitHub update
                  </li>
                  <li>• You can also edit directly on GitHub web interface</li>
                  <li>• Use GitHub mobile app for quick edits on phone</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
