import React, { useState } from 'react';
import { Mic, Camera, MessageSquare, Send, Brain } from 'lucide-react';
const API_URL = "http://localhost:5000";

export const DemoInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'voice' | 'image'>('text');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [isTyping, setIsTyping] = useState(false);

  // voice recording
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  // --- RESET RESPONSE ON TAB SWITCH ---
  const handleTabSwitch = (tab: 'text' | 'voice' | 'image') => {
    setActiveTab(tab);
    setQuery('');
    setResponse(null); // clear old AI result
  };

  // ---------------- TEXT ----------------
  const handleTextSubmit = async () => {
    if (!query.trim()) return;
    setIsTyping(true);
    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'text', query }),
      });
      const data = await res.json();
      console.log('Text Response:', data);
      setResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  // ---------------- VOICE ----------------
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const formData = new FormData();
        formData.append('file', blob, 'voice.webm');
        formData.append('type', 'voice');

        try {
          const res = await fetch(`${API_URL}/api/agent`, { method: 'POST', body: formData });
          const data = await res.json();
          console.log('Voice Response:', data);
          setResponse(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsTyping(false);
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsTyping(true);
    } catch (err) {
      console.error('Mic error:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) mediaRecorder.stop();
  };

  // ---------------- IMAGE ----------------
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsTyping(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'image');

    try {
      const res = await fetch(`${API_URL}/api/agent`, { method: 'POST', body: formData });
      const data = await res.json();
      console.log('Image Response:', data);
      setResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Experience <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">AgriSage AI</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg flex space-x-1">
              <button onClick={() => handleTabSwitch('text')}
                className={`px-6 py-3 rounded-md flex items-center space-x-2 ${
                  activeTab === 'text' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600'
                }`}>
                <MessageSquare size={18} />
                <span>Text</span>
              </button>
              <button onClick={() => handleTabSwitch('voice')}
                className={`px-6 py-3 rounded-md flex items-center space-x-2 ${
                  activeTab === 'voice' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}>
                <Mic size={18} />
                <span>Voice</span>
              </button>
              <button onClick={() => handleTabSwitch('image')}
                className={`px-6 py-3 rounded-md flex items-center space-x-2 ${
                  activeTab === 'image' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-600'
                }`}>
                <Camera size={18} />
                <span>Image</span>
              </button>
            </div>
          </div>

          {/* Input Interfaces */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl border border-gray-100">
            {/* TEXT */}
            {activeTab === 'text' && (
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                    placeholder="मेरे कपास के पत्तों पर भूरे धब्बे हैं, क्या करूं?"
                    className="flex-1 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 text-lg" />
                  <button onClick={handleTextSubmit}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl">
                    <Send size={18} />
                    <span>Ask AI</span>
                  </button>
                </div>
              </div>
            )}

            {/* VOICE */}
            {activeTab === 'voice' && (
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-lg"> 
                  <Mic size={32} className="text-blue-600" /> 
                </div> 
                <div className="text-lg font-semibold text-gray-800">Voice Input</div>
                <button onClick={startRecording}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg">🎤 Start</button>
                <button onClick={stopRecording}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg ml-4">⏹ Stop</button>
              </div>
            )}

            {/* IMAGE */}
            {activeTab === 'image' && (
              <div className="text-center space-y-4">
                <label className="cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12">
                    <Camera size={32} className="text-purple-600 mx-auto" />
                    <p className="mt-4">Upload Photo</p>
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            )}
          </div>

          {/* Loader */}
          {isTyping && (
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Brain className="text-green-600" size={20} />
                </div>
                <p className="text-green-600 font-medium">AgriSage AI is analyzing...</p>
              </div>
            </div>
          )}

          {/* AI Response */}
          {response && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-xl">
              <h3 className="font-bold text-xl text-gray-800 mb-4">AgriSage AI Analysis</h3>
              {response.success ? (
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {response.data}
                </div>
              ) : (
                <p className="text-red-600">❌ {response.error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
