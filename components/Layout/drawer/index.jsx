import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./drawer.module.scss";
import Link from "next/link";
import { Typography } from "@mui/material";
import BurgerMenu from "@/assets/burger.svg";
import bike from "@/assets/logo.png";
import Image from "next/image";
import CustomButton from "@/components/common/BaseButton";
import { useRouter } from "next/router";

function HeaderDrawer({ data }) {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => setOpen(false);

  return (
    <div className={styles.Drawer}>
      <div className={styles.Drawer_header}>
        <Image onClick={() => router.push('/')}  className={styles.logo} src={bike} width={60} height={80} />
        <Image onClick={toggleDrawer} src={BurgerMenu} width={40} height={40} />
      </div>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
        <div className={styles.Drawer_content} style={{ width: "100%" }}>
          <div>
            <Image  onClick={() => router.push('/')} className={styles.logo} src={bike} width={90} height={100} />
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

          <CustomButton
            onclick={() => {
              router.push("./contact")
              setOpen(false);

            }}
            bgColor="white"
            color="#a60f0c"
            text={"Contactez Nous"}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default HeaderDrawer;
