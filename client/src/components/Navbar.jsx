import { useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }

  const goToSignup = () => {
    navigate('/signup');
  }

  return (
    <>
      <nav className="bg-white border-gray-700 dark:bg-gray-900 flex justify-between px-20 py-5 border-b-[3px]">
        <div id="left" className="flex gap-4">
          <a href="/#" className="btn btn-ghost text-xl text-white">MattQuest</a>
          <button className="btn btn-neutral">Repository</button>
          <button className="btn btn-neutral">Docs</button>
        </div>
        <div id="center" className="text-white">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow h-12 px-4 text-white rounded-md" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
        </div>
        <div id="right" className="flex gap-4">
          <button className="btn btn-neutral text-white" onClick={() => goToLogin()}>Log in</button>
          <button className="btn btn-active hover:bg-slate-300 bg-white text-black" onClick={() => goToSignup()}>Sign up</button>
          <div className="avatar pl-5">
            <div className="ring-gray-500 ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
              <img src="https://t4.ftcdn.net/jpg/03/53/31/69/360_F_353316914_m15Upk3Q32k9TAofycnosWeWRJOQ5Cmi.jpg" alt="icon" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}