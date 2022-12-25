import{
    take,
    put,
    select
} from 'redux-saga/effects'

import * as mutations from './mutations.js'
import uuid from 'uuid';

export function* taskCreationSaga(){
    while(true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        console.log("got group ID",groupID);
    }
}