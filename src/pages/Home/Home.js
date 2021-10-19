import { Fragment } from "react"
import MainFooter from "../../components/core/Footer/MainFooter/MainFooter"
import MainNavigation from "../../components/core/Navigation/MainNavigation/MainNavigation"
import Courses from "./Courses"
import Eksplorasi from "./Eksplorasi"
import ImageHeader from "./ImageHeader"
import Instruktur from "./Instruktur"
import Keunggulan from "./Keunggulan"
import Testimoni from "./Testimoni"
import UpcomingClasses from "./UpcomingClasses"
import Why from "./Why"

const Home = () => {
  document.title = "Beranda - Quamus"
  return (
    <Fragment>
      <MainNavigation />
      <ImageHeader />
      <UpcomingClasses />
      <Why />
      <Eksplorasi />
      <Courses />
      <Keunggulan />
      <Testimoni />
      <Instruktur />
      <MainFooter />
    </Fragment>
  )
}

export default Home