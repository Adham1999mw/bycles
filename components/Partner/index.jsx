import { Grid } from "@mui/material"

const  Partner = () => {

    const data = [
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
        {url : "https://getbikeservice.com/wp-content/uploads/2021/02/logo-postnl.svg"},
    ]
    return (
        <Grid container spacing={2}>
            {data.map((ele, index) => (
                <Grid key={index} item md={3} xs={6}>
                    <img width={'100%'} src={ele.url} alt="" />
                </Grid>
            ))}
        </Grid>
    )
}

export default Partner