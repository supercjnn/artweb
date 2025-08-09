import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              ArtHistory
            </h3>
            <p className="text-gray-300 mb-4">
              探索西方艺术史的精彩世界，从古典到现代，深入了解每个时代的杰作与艺术家。
              让艺术成为生活的一部分，让历史在画布上重现。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.997 1.482-1.997.699 0 1.037.219 1.037 1.142 0 .696-.442 1.735-.219 2.695.219.937.917 1.517 1.735 1.517 2.081 0 3.68-2.195 3.68-5.367 0-2.799-2.016-4.756-4.895-4.756-3.338 0-5.297 2.502-5.297 5.088 0 1.008.388 2.081.871 2.663.096.115.11.215.081.334-.088.372-.284 1.149-.323 1.31-.051.219-.165.265-.38.159-1.501-.219-2.44-2.079-2.44-3.338 0-3.683 2.663-7.061 7.714-7.061 4.051 0 7.201 2.885 7.201 6.753 0 4.029-2.537 7.27-6.066 7.27-1.185 0-2.302-.615-2.689-1.35 0 0-.588 2.238-.731 2.79-.265 1.019-.98 2.302-1.459 3.079C9.098 23.508 10.535 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">首页</a></li>
              <li><a href="/periods" className="text-gray-300 hover:text-white transition-colors">艺术时期</a></li>
              <li><a href="/artists" className="text-gray-300 hover:text-white transition-colors">著名艺术家</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">作品画廊</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">学习资源</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">在线测验</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">学习笔记</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">艺术词典</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">时间线工具</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 ArtHistory. All rights reserved. 西方艺术史学习平台</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;