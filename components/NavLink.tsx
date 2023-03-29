import {useRouter} from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export {NavLink};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({href, exact, children, ...props}) {
    const {pathname} = useRouter();
    const isActive = exact ? (pathname.startsWith(href) && href !== "/") || pathname === href : pathname === href;

    if (isActive) {
        props.className += ' text-gray-100';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}
