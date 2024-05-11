import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                    <img className="w-[12%]" src="/logo/logo.jpg" alt="Logo" />
                    <div className="ml-4">
                        <Link className="transition-all duration-500 hover:text-[#E77813]" to="/">
                            Home
                        </Link>
                        <Link className="mx-8 transition-all duration-500 hover:text-[#E77813]" to="/findtutor">
                            Find Tutors
                        </Link>
                        <Link className="transition-all duration-500 hover:text-[#E77813]" to="/applytoteach">
                            Apply To Teach
                        </Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="mr-6 bg-[#F6C100] px-5 py-1 rounded-md ">English</button>
                    <div>
                        <Link className="border-r-[1px] border-black px-2" to="/signup">
                            Sign Up
                        </Link>
                        <Link className="px-2" to="/signout">
                            Sign Out
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
