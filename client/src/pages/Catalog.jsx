export function Catalog() {
  return (
    <>
      <div>
        <div className="py-10 bg-base-150">
          <div className="max-w-screen-xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Games</h2>
            <div className="pb-10 flex justify-center space-x-4">
              <div className="dropdown">
                <button className="btn m-1 border-1 border-white text-white">Newest</button>
              </div>
              <div className="dropdown">
                <button className="btn m-1 border-1 border-white text-white">Oldest</button>
              </div>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 border-1 border-white text-white">Year</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>2025</a></li>
                  <li><a>2024</a></li>
                  <li><a>2023</a></li>
                  <li><a>2022</a></li>
                  <li><a>2021</a></li>
                  <li><a>2020</a></li>
                  <li><a>2019</a></li>
                  <li><a>2018</a></li>
                  <li><a>2017</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 border-1 border-white text-white">Category</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>

              {/* Game 1 */}
              <a href="/catalog">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Game 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Game 1</h3>
                    <p className="text-gray-600">Short description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}