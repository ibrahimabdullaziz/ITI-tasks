export default function ProfileInfo({ profile }) {
  return (
    <div className="profile-info">
      <h1>{profile.name}</h1>
      <p className="location">{profile.location}</p>
      <p className="title">{profile.title}</p>
      <p className="bio">"{profile.bio}"</p>
    </div>
  );
}
