const Header = () => {
    return (
        <header>
            <div className="container mx-auto flex items-center p-6 text-sm">
                {/* Website Name */}
                <div className="flex-grow text-white px-4">
                    <a href="/">SipSmart</a>                                                                                                      
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* NavBar */}
                <ul className="flex space-x-4 px-4">
                    <li className="text-white hover:underline cursor-pointer px-4"><a href="/tracker">Track</a></li>
                    <li className="text-white hover:underline cursor-pointer px-4"><a href="https://discord.gg/pCQyBd5zw9">Discord</a></li>
                </ul>
            </div>
        </header>
    )
};

export default Header;