import Welcome from "./components/welcome";
import Event from "./components/event";
import ForOurGuest from "./components/forOurGuest";
import Gallery from "./components/gallery";
import End from "./components/end";
import InvitationNav from "./components/invitation/InvitationNav";
import FallingPetals from "./components/FallingPetals";


export default function Home() {
  return (
    <div className="container min-h-screen max-w-5xl mx-auto flex flex-col">
      <FallingPetals />
      <Welcome />
      <Event />
      <ForOurGuest />
      <Gallery />
      <End />

      <InvitationNav />
    </div>
  )};