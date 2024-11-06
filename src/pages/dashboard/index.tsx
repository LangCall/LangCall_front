// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "pages/LayoutContainers";
import DashboardNavbar from "components/Navbars";
import Footer from "components/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import boxShadow from "assets/theme/functions/boxShadow";


function Dashboard() {
  const { size } = typography;

  const handleClick = () =>{
    console.log("cehck")
  }


  return (
    <DashboardLayout>
      <DashboardNavbar absolute={"static"} light={true}/>
      <SoftBox py={3} sx={{boxShadow: 1}}>
        
        <SoftBox mb={3} sx={{boxShadow:1}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
            </Grid>
            <Grid item xs={12} lg={5}>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              
            </Grid>
            <Grid item xs={12} lg={7}>
              
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
