import React, { useState } from 'react';
import type { Quiz } from '../types';

const LearnCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startQuiz = (difficulty: 'easy' | 'medium' | 'hard') => {
    const quiz = sampleQuizzes.find(q => q.difficulty === difficulty);
    if (quiz) {
      setCurrentQuiz(quiz);
      setSelectedAnswer(null);
      setShowResult(false);
      setActiveTab('quiz');
    }
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || !currentQuiz) return;
    
    setShowResult(true);
    if (selectedAnswer === currentQuiz.correctAnswer) {
      setScore(score + 1);
    }
    setTotalQuestions(totalQuestions + 1);
  };

  const nextQuiz = () => {
    const nextIndex = sampleQuizzes.findIndex(q => q.id === currentQuiz?.id) + 1;
    if (nextIndex < sampleQuizzes.length) {
      setCurrentQuiz(sampleQuizzes[nextIndex]);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCurrentQuiz(null);
      setActiveTab('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-8 text-gray-800">
          学习中心
        </h1>

        <div className="flex justify-center mb-8">
          <nav className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
            {['dashboard', 'quiz', 'progress', 'favorites'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {tabNames[tab as keyof typeof tabNames]}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold mb-4">学习统计</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>已完成测验:</span>
                  <span className="font-semibold">{totalQuestions}</span>
                </div>
                <div className="flex justify-between">
                  <span>正确率:</span>
                  <span className="font-semibold text-primary-600">
                    {totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>当前级别:</span>
                  <span className="font-semibold">初学者</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold mb-4">快速测验</h3>
              <div className="space-y-3">
                <button
                  onClick={() => startQuiz('easy')}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  入门级测验
                </button>
                <button
                  onClick={() => startQuiz('medium')}
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  进阶级测验
                </button>
                <button
                  onClick={() => startQuiz('hard')}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  专家级测验
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold mb-4">学习工具</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                  艺术时间线
                </button>
                <button className="w-full bg-secondary-600 text-white px-4 py-2 rounded-md hover:bg-secondary-700 transition-colors">
                  风格比较器
                </button>
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  学习笔记
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && currentQuiz && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  currentQuiz.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  currentQuiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {difficultyLabels[currentQuiz.difficulty]}
                </span>
                <span className="ml-2 text-sm text-gray-600">{categoryLabels[currentQuiz.category]}</span>
              </div>
              
              <h3 className="text-2xl font-serif font-semibold mb-6">{currentQuiz.question}</h3>
              
              <div className="space-y-3 mb-6">
                {currentQuiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border transition-colors ${
                      selectedAnswer === index
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${
                      showResult && index === currentQuiz.correctAnswer
                        ? 'border-green-500 bg-green-50'
                        : showResult && selectedAnswer === index && index !== currentQuiz.correctAnswer
                        ? 'border-red-500 bg-red-50'
                        : ''
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {!showResult ? (
                <button
                  onClick={submitAnswer}
                  disabled={selectedAnswer === null}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-300"
                >
                  提交答案
                </button>
              ) : (
                <div>
                  <div className={`p-4 rounded-lg mb-4 ${
                    selectedAnswer === currentQuiz.correctAnswer
                      ? 'bg-green-100 border border-green-300'
                      : 'bg-red-100 border border-red-300'
                  }`}>
                    <p className="font-medium mb-2">
                      {selectedAnswer === currentQuiz.correctAnswer ? '恭喜！答案正确！' : '答案错误。'}
                    </p>
                    <p className="text-sm">{currentQuiz.explanation}</p>
                  </div>
                  <button
                    onClick={nextQuiz}
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    下一题
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-semibold mb-6">学习进度</h3>
            <div className="space-y-6">
              {Object.entries(progressData).map(([topic, progress]) => (
                <div key={topic}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{topic}</span>
                    <span className="text-sm text-gray-600">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-semibold mb-6">我的收藏</h3>
            <p className="text-gray-600">您还没有收藏任何内容。开始探索艺术作品和艺术家，将您喜欢的内容加入收藏吧！</p>
          </div>
        )}
      </div>
    </div>
  );
};

const tabNames = {
  dashboard: '概览',
  quiz: '测验',
  progress: '进度',
  favorites: '收藏'
};

const difficultyLabels = {
  easy: '入门级',
  medium: '进阶级',
  hard: '专家级'
};

const categoryLabels = {
  period: '艺术时期',
  artist: '艺术家',
  artwork: '艺术作品',
  technique: '技法'
};

const progressData = {
  '古典艺术': 75,
  '文艺复兴': 60,
  '巴洛克艺术': 40,
  '印象派': 85,
  '现代艺术': 30
};

const sampleQuizzes: Quiz[] = [
  {
    id: '1',
    question: '《蒙娜丽莎》是谁的作品？',
    options: ['米开朗基罗', '列奥纳多·达·芬奇', '拉斐尔', '提香'],
    correctAnswer: 1,
    explanation: '《蒙娜丽莎》是列奥纳多·达·芬奇的代表作品，创作于1503-1519年间，现收藏于卢浮宫。',
    difficulty: 'easy',
    category: 'artwork'
  },
  {
    id: '2',
    question: '印象派绘画的主要特点是什么？',
    options: ['精细的细节描绘', '捕捉光线和色彩的变化', '宗教题材为主', '抽象的几何形状'],
    correctAnswer: 1,
    explanation: '印象派画家注重捕捉光线和色彩的瞬间变化，通常在户外写生，打破了传统学院派的绘画技法。',
    difficulty: 'medium',
    category: 'technique'
  },
  {
    id: '3',
    question: '立体主义的创始人是？',
    options: ['梵高', '莫奈', '毕加索和布拉克', '达利'],
    correctAnswer: 2,
    explanation: '立体主义由巴勃罗·毕加索和乔治·布拉克在20世纪初共同创立，是现代艺术的重要流派。',
    difficulty: 'hard',
    category: 'period'
  }
];

export default LearnCenter;