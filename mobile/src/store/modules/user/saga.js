import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';
import {updateProfileSuccess, updateProfileFailure} from './actions';

import {USER_UPDATE_PROFILE_REQUEST} from '../actionsTypes';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = Object.assign({name, email}, rest.oldPassword ? rest : {});

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Erro',
      'Ocorreu um erro ao atualizar perfil, confira seus dados!',
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(USER_UPDATE_PROFILE_REQUEST, updateProfile)]);
