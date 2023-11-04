const { default: Link } = require("next/link")

const NavLink = ({href, title}) => {
    return (
        <span href={href} className='cursor-pointer block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white'>
            {title}
        </span>
    )
}

export default NavLink