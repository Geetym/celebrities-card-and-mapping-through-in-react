import React from 'react';

const profiles = [
  {
    name: "David Adeleke",
    country: "Nigeria",
    image: "https://data.mothership.tools/mothershiptools-ukprod/wp-content/uploads/2021/12/profile.jpg"
  },
  {
    name: "Wizkid",
    country: "Nigeria",
    image: "https://guardian.ng/wp-content/uploads/2021/09/240944433_110593068016775_5713504258986737220_n-3.jpg"
  },
  {
    name: "Lionel Messi",
    country: "Argentina",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzw_Ti47ovNmMbRwz3HaY7hDhHFeAmER6kw&s"
  },
  {
    name: "Cristiano Ronaldo",
    country: "Portugal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8LZk98dkqzBdcXuQ4OhFcAg4Oiv6Gye9DQ&s"
  },
  {
    name: "Kylian Mbappé",
    country: "France",
    image: "https://s.hs-data.com/bilder/spieler/gross/284095.jpg"
  },
  {
    name: "Neymar",
    country: "Brazil",
    image: "https://b.fssta.com/uploads/application/soccer/headshots/713.png"
  },
  {
    name: "Olamide",
    country: "Nigeria",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmxuzx4bTmhzndpdSY98oeoNfszWAvodZcg&s"
  },
  {
    name: "Jason Momoa",
    country: "USA",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jason_Momoa_%2843055621224%29_%28cropped%29.jpg/800px-Jason_Momoa_%2843055621224%29_%28cropped%29.jpg"
  },
  {
    name: "Elon Musk",
    country: "South Africa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
  },
  {
    name: "Jason Statham",
    country: "England",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jason_Statham_2018.jpg/640px-Jason_Statham_2018.jpg"
  },
  {
    name: "Michael Collins Ajereh (DON JAZZY)",
    country: "Nigeria",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtsErOt78hIBttyGgl7DjaLqii7LiW5KpBQ&s"
  },
];

const Component = () => {
  return (
    <div className='flex gap-6'>
      {profiles.map((profile, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <img src={profile.image} alt={profile.name} className='h-[200px] w-[200px] object-cover' />
          <h3>{profile.name}</h3>
          <p>{profile.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Component;


  