import profilePic from '../../../../assets/feed/profile_img.png';

export type ProfileData = {
  id: number;
  name: string;
  age: string;
  city: string;
  country: string;
  img: string;
  isLikedbyYou: boolean;
  likeYou: boolean;
  video: string;
}[];

const profilesDataInterestedInYou: ProfileData = [
  {
    id: 1,
    name: 'Mary',
    age: '22',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: true,
    video: '',
  },
  {
    id: 2,
    name: 'Jane',
    age: '28',
    city: 'London',
    country: 'England',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: true,
    video: '',
  },
  {
    id: 3,
    name: 'Claire',
    age: '24',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: true,
    video: '',
  },
];

const profilesDataNewPeople: ProfileData = [
  {
    id: 1,
    name: 'Anna',
    age: '22',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: false,
    video: '',
  },
  {
    id: 2,
    name: 'Tony',
    age: '28',
    city: 'Madrid',
    country: 'Spain',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: false,
    video: '',
  },
  {
    id: 3,
    name: 'Milly',
    age: '24',
    city: 'Paris',
    country: 'France',
    img: profilePic,
    isLikedbyYou: false,
    likeYou: false,
    video: '',
  },
];

export { profilesDataInterestedInYou, profilesDataNewPeople };
