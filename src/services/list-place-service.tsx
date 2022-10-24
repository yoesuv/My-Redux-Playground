import { useQuery } from '@tanstack/react-query';

const fetchList = async () => {
  const result = await fetch('https://info-malang-batu.firebaseapp.com/List_place_malang_batu.json');
  return result.json();
}

const UseList = () => useQuery(['listPlace'], fetchList);

export default UseList;