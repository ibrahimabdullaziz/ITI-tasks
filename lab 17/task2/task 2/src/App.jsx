import "./App.css";
import data from "./assets/data/data.json";
import profileImage from "./assets/images/profile.jpg";
import Card from "./components/Card";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  const { profile, socialLinks } = data;

  return (
    <Card>
      <ProfileImage imageUrl={profileImage} name={profile.name} />
      <ProfileInfo profile={profile} />
      <SocialLinks links={socialLinks} />
    </Card>
  );
}
