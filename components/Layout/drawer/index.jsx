import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./drawer.module.scss";
import Link from "next/link";
import { Typography } from "@mui/material";
import BurgerMenu from "@/assets/burger.svg";
import bike from "@/assets/bike.svg";
import Image from "next/image";

function HeaderDrawer({ data }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => setOpen(false);

  return (
    <div className={styles.Drawer}>
      <div className={styles.Drawer_header}>
        <Image src={bike} width={60} height={60} />
        <Image onClick={toggleDrawer} src={BurgerMenu} width={40} height={40} />
      </div>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
        <div className={styles.Drawer_content} style={{ width: '100%' }}>
          <div>
            <Image src={bike} width={60} height={60} />
          </div>

          {data.map((link, index) => (
            <Link
              className={link.active ? styles.activeLink_container : null}
              href={link.link}
              key={index}
            >
              <Typography
                variant="h6"
                style={{ fontWeight: "200" }}
                onClick={() => handleLinkClick(index)}
              >
                {link.text}
              </Typography>
              <div className={link.active ? styles.activeLink : null}></div>
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default HeaderDrawer;
