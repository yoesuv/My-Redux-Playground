import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { getListPlace } from '../store/actions/MyApplicationData';

interface RootState {
  dataConfigure: {
    places: [],
  }
}

const ListPlace = (props: Props) => {
  useEffect(() => {
      props.onGetListPlaces();
  });
  return (
    <View>
      <Text>Screen Request Api</Text>
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
  places: state.dataConfigure.places,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onGetListPlaces: () => dispatch(getListPlace()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(ListPlace);
