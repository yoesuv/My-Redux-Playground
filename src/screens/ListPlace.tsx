import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { getListPlace } from '../store/actions/MyApplicationData';

interface RootState {
  dataConfigure: {
    places: [],
  },
  listPlaceConfigure: {
    isLoading: true,
  }
}

const ListPlace = (props: Props) => {
  useEffect(() => {
      props.onGetListPlaces();
  },[]);

  const loading = (<ActivityIndicator size='large' />);
  const content = (<Text>{ props.places.length }</Text>);

  return (
    <View>
      { props.isLoading ? content : content }
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
  places: state.dataConfigure.places,
  isLoading: state.listPlaceConfigure.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onGetListPlaces: () => dispatch(getListPlace()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(ListPlace);
