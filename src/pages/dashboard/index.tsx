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


function Dashboard() {
  const { size } = typography;

  const handleClick = () =>{
    console.log("cehck")
  }


  return (
    <DashboardLayout>
      <DashboardNavbar absolute={"static"} light={""}/>





    </DashboardLayout>
  );
}

export default Dashboard;
