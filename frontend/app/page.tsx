import Welcome from "./components/welcome";
import Event from "./components/event";
import ForOurGuest from "./components/forOurGuest";
import Gallery from "./components/gallery";
import Countdown from "./components/countdown";
import InvitationNav from "./components/invitation/InvitationNav";


export default function Home() {
  return (
    <div className="container min-h-screen max-w-5xl mx-auto flex flex-col">
      <Welcome />
      <Event />
      <ForOurGuest />
      <Gallery />
      <Countdown />

      <InvitationNav />
    </div>
  )};