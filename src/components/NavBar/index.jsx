"use client";

// import { NavLink } from 'react-router-dom';
import { Drawer, ConfigProvider, Menu } from "antd";
import Link from "next/link";
// import { usePathname } from 'next/navigation';
import { createStyles, useTheme } from "antd-style";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./navbar.module.css";
import SubMenu from "antd/es/menu/SubMenu";
// import "antd/dist/antd.css";

export default function NavBar({ open, onClose }) {
  // const pathname=usePathname();

  const NavBarContent = () => (
    <>
      <Link
        href="/plan"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        我的行程
      </Link>
      <Link
        href="/"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        首頁
      </Link>
      <Link
        href="/userinfo"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
        用戶中心
      </Link>
      <Link
        href="/"
        className={({ isActive }) =>
          isActive ? styles.navItemActive : styles.navItem
        }
      >
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
  );

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  //   const items = [
  //     getItem("我的行程", "sub3", <SettingOutlined />, [
  //       getItem("規劃中", "9"),
  //       getItem("過往紀錄", "10"),
  //       getItem("我的收藏", "11"),
  //     ]),

  //     getItem(
  //       "Group",
  //       "grp",
  //       null,
  //       [getItem("Option 13", "13"), getItem("Option 14", "14")],
  //       "group"
  //     ),
  //     { label: '首頁', key: 'item-1' }, // 菜单项务必填写 key
  //     { label: '用戶中心', key: 'item-2' },
  //     { label: '地圖', key: 'item-3' },
  //   ];

  const onClick = (e) => {
    console.log("click ", e);
  };

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
        // mask={false}
        className={styles.drawerbox}
      >
        {/* {items.map((item) => (
         
        ))} */}
        <div className={styles.drawer}>
          <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            selectable={false}
            //   items={items}
            className={styles.menu}
            items={[
              {
                key: "submenu",
                label: <Link href="/plan">我的行程</Link>,
                className:styles.submenu,
                children: [
                  {
                    key: "submenu-item-1",
                    label: <Link href="/plan/isplanning">規劃中</Link>,
                    className:styles.subitem,
                  },
                  {
                    key: "submenu-item-1",
                    label: <Link href="/plan/history">過往紀錄</Link>,
                    className:styles.subitem,
                  },
                  {
                    key: "submenu-item-1",
                    label: <Link href="/plan/collection">我的收藏</Link>,
                    className:styles.subitem,
                  },
                ],
              },
              {
                key: "/",
                label: <Link href="/">首頁</Link>,
                className:styles.item
              },
              {
                key: "/plan",
                label: <Link href="/userinfo">用戶中心</Link>,
                className:styles.item
              },   
               {
                key: "/map",
                label: <Link href="/map">地圖</Link>,
                className:styles.item
              },
            ]}
          />

          {/* <NavBarContent /> */}
          {/* </Menu> */}
        </div>
      </Drawer>
    </>
  );
}
