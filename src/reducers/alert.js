import { ACTION, ALERT } from "@/enums";

export default function alert(alerts, action) {
  switch (action.type) {
    case ACTION.ERROR_PUSH:
      return [
        {
          id: Date.now() + Math.random(),
          type: ALERT.ERROR,
          message: action.payload,
        },
        ...alerts,
      ];
    case ACTION.SUCCESS_PUSH:
      return [
        {
          id: Date.now() + Math.random(),
          type: ALERT.SUCCESS,
          message: action.payload,
        },
        ...alerts,
      ];
    case ACTION.WARNING_PUSH:
      return [
        {
          id: Date.now() + Math.random(),
          type: ALERT.WARNING,
          message: action.payload,
        },
        ...alerts,
      ];
    case ACTION.ALERT_REMOVE:
      return alerts.filter((alert) => alert.id !== action.payload);
    default:
      return alerts;
  }
}
