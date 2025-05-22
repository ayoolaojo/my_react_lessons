function ProfileCard() {
  return (
    <div className="bg-gray-200 flex flex-col items-center p-12">
      <img
        className="w-32 h-32 rounded-full object-cover "
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Ayoola"
      />
      <h1>Ayoola Johnson</h1>
      <p>CEO G3m Ventures</p>
    </div>
  );
}

export default ProfileCard;
