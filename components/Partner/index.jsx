import { Grid } from "@mui/material"
import bertin from '../../assets/bertin.png'
import hope from '../../assets/hope.png'
import anna from '../../assets/anna.jpg'
import Image from "next/image";

const Partner = () => {

    const data = [
        { url: bertin },
        { url: hope },
        { url: anna },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
        { url: "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg" },
    ];

    return (
        <Grid container spacing={2}>
            {data.map((ele, index) => (
                <Grid key={index} item md={3} xs={6}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Image src={ele.url} width={300} height={150} layout="responsive" />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default Partner;
