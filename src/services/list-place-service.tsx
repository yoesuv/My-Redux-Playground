import { useQuery } from '@tanstack/react-query';
import { PlaceModel } from '../models/place-model';

const fetchList = async () => {
  const result = await fetch('https://info-malang-batu.firebaseapp.com/List_place_malang_batu.json');
  return result.json();
}

const UseList = () => useQuery<PlaceModel[], Error>(['listPlace'], fetchList);

export default UseList;