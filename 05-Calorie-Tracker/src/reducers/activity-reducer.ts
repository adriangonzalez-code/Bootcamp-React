import type { Activity } from "../types";

export type ActivityActions = {
    type: 'save-activity';
    payload: { newActivity: Activity };
}

type ActivityState = {
    activities: Activity[];
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
    if (action.type === 'save-activity') {
        // Este código se ejecutará cuando se dispare la acción 'save-activity' para actualizar el state
        console.log('Desde el type save-activity');
    }

    return state;
}