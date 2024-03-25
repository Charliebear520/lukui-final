"use client";

// import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {
    // const pathname=usePathname();
    const NavBarContent = () => (
        <>
            <Link href="/plan"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                我的行程
            </Link>
            <Link href="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </Link>
            <Link href="/userinfo"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                用戶中心
            </Link>
            <Link href="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                地圖
            </Link>
            {/* <Link to="/products/category/textile"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Textile
            </Link>
            <Link to="/products/category/furniture"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Furniture
            </Link> */}
        </>
    )

    return (
        <>
            {/* <div className={styles.navBar}>
                <NavBarContent />
            </div> */}
            <Drawer
                title="CATEGORY"
                placement="top"
                onClose={onClose}
                open={open}
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}