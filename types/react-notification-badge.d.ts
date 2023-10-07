/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
declare module react-notification-badge {
  import React from "react";

  export interface NotificationBadgeProps {
    count?: number;
    label?: string;
    Effect?: any
    // Add more props as needed
  }

  const NotificationBadge: React.FC<NotificationBadgeProps>;

  export default NotificationBadge;
}
