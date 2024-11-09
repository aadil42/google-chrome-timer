import { localStorageGetData } from "./libs/localStorage";

const CONST = {
    POP_UP_WINDOW_HEIGHT: "600px", // use it as minHeight
    POP_UP_WINDOW_WIDTH: "600px",
    POP_UP_WINDOW_PRIMARY_BG: "#F24B6A",
    POP_UP_WINDOW_SECONDARY_BG:  "#F27983",
    MAIN_TITLE: "Google Chrome Timer",
    PRIMARY_BTN_CREATE_TIMER: "Create Timer",
    PRIMARY_BTN_RESET_TIMER: "Reset Timer",
    RESET_CONFIRMATION_YES: "Yes",
    RESET_CONFIRMATION_NO: "No",
    RESET_CONFIRMATION_WIDTH: "250px",
    RESET_CONFIRMATION_HEIGHT: "110px",
    RESET_CONFIRMATION_MESSAGE: "Are you sure?",
    CREATE_TIMER_TITLE: "Type name of your Timer",
    CREATE_TIMER_TITLE_WIDTH: "300px",
    CREATE_TIMER_TITLE_HEIGHT: "160px",
    LOCAL_STORAGE_SECTIONS_KEY: "sections",
    TIMER_SECTION_HEIGHT: "80px",
    CREATE_TIMER_MINUTES_MESSAGE: "Enter Time in minutes",
    CREATE_TIMER_MINUTES_MESSAGE_WIDTH: "300px",
    CREATE_TIMER_MINUTES_MESSAGE_HEIGHT: "160px",
    CURRENT_TIMER_KEY: "currentTimer",
    SHOULD_SHOW_POPUP_FOR_DELETING_ALL_SECTIONS: false,
    SHOULD_SHOW_CREATE_TIMER_SECION_INPUT_POPUP: false,
    SHOULD_SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION: false,
    SELECTED_SECTION_IDX: null,
    TO_BE_DELETED_SECTION_IDX: null,
    ENTERED_MINUTES: 0,
    SHOULD_SHOW_POPUP_FOR_ENTERING_MINUTES: false,
    SHOULD_SHOW_CLOCK_ICON_DELEETE_CONFIRMATION: false,
    CLOCK_ICON_DELETE_CONFIRMATION_MESSAGE: "You want to delete this clock?",
    TO_BE_DELETED_CLOCK_IDX: null,
    CURRENT_RUNNING_TIMER_TITLE: "",

    REDUCER_ACTION_TYPES: {
        SHOW_POPUP_FOR_DELETING_ALL_SECTIONS: "SHOW_POPUP_FOR_DELETING_ALL_SECTIONS",
        HIDE_POPUP_FOR_DELETING_ALL_SECTIONS: "HIDE_POPUP_FOR_DELETING_ALL_SECTIONS",
        SHOW_CREATE_TIMER_SECTION_INPUT_POPUP: "SHOW_CREATE_TIMER_SECTION_INPUT_POPUP",
        HIDE_CREATE_TIMER_SECTION_INPUT_POPUP:  "HIDE_CREATE_TIMER_SECTION_INPUT_POPUP",
        SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION: "SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION",
        HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION: "HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION",
        UPDATE_SELECTED_SECTION_IDX: "UPDATE_SELECTED_SECTION_IDX",
        UPDATE_TO_BE_DELETED_SECTION_IDX: "UPDATE_TO_BE_DELETED_SECTION_IDX",
        UPDATE_ENTERED_MINUTES: "UPDATE_ENTERED_MINUTES",
        SHOW_POPUP_FOR_ENTERING_MINUTES: "SHOW_POPUP_FOR_ENTERING_MINUTES",
        HIDE_POPUP_FOR_ENTERING_MINUTES: "HIDE_POPUP_FOR_ENTERING_MINUTES",
        UPDATE_CURRENT_TIMER_END_TIME: "UPDATE_CURRENT_TIMER_END_TIME",
        ADD_TIMER_IN_SECTION: "ADD_TIMER_IN_SECTION",
        DELETE_ALL_SECTIONS: "DELETE_ALL_SECTIONS",
        ADD_SECTION: "ADD_SECTION",
        DELETE_SECTION: "DELETE_SECTION",
        SET_IS_TIMER_RUNNING_FALSE: "SET_IS_TIMER_RUNNING_FALSE",
        REMOVE_CLOCK_FROM_SECTION: "REMOVE_CLOCK_FROM_SECTION",
        SHOW_CLOCK_ICON_DELETE_CONFIRMATION: "SHOW_CLOCK_ICON_DELETE_CONFIRMATION",
        HIDE_CLOCK_ICON_DELETE_CONFIRMATION: "HIDE_CLOCK_ICON_DELETE_CONFIRMATION",
        DELETE_CLOCK_ICON: "DELETE_CLOCK_ICON",
        UPDATE_SELECTED_CLOCK_IDX: "UPDATE_SELECTED_CLOCK_IDX",
    }
}


export default CONST;