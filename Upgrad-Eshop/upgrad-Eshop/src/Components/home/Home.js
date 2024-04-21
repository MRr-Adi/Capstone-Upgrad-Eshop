import Grid from "@mui/material/Grid";
import useAuthentication from "../../hooks/useAuthentication";
import {useContext} from "react";
import ProductCategory from "../productCategory/ProductCategory";
import Box from "@mui/material/Box";
import ProductSorting from "../productSorting/ProductSorting";
import ProductListing from "../productListing/ProductListing";

const Home = () => {
    // Custom hook to handle authentication
    const {AuthCtx} = useAuthentication();
    // Get user role from authentication context
    const {hasRole} = useContext(AuthCtx);
    // Determine mode based on user role
    let mode = (hasRole(["ADMIN"])) ? "EDIT" : "VIEW";

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                {/* Product Category Section */}
                <Grid container item spacing={3}>
                    <Grid item xs={12}>
                        {/* Center align Product Category */}
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <ProductCategory />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        {/* Left align Product Sorting */}
                        <div style={{display: 'flex', justifyContent: 'left', paddingLeft: "1%"}}>
                            <ProductSorting />
                        </div>
                    </Grid>
                    {/* Product Listing Component */}
                    <ProductListing mode={mode}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
