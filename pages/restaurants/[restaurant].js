import { useRouter } from 'next/router';

const Restaurant = () => {
  const router = useRouter();

  return (
    <h1>Dynamic Restaurant Page {router.query.restaurant}</h1>
  )
}

export default Restaurant;