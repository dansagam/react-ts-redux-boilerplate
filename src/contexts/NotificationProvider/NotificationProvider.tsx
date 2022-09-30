import React, { createContext, useState, useContext } from "react";
import { IconButton, Snackbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MuiAlert from "@mui/material/Alert";
import { IBasic } from "interfaces/basicInterface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AlertRef(ref: any, prop: any) {
  return <MuiAlert ref={ref} variant="filled" {...prop} />;
}

export type INotification = IBasic;
type TypeShowNotification = {
  type: "error" | "success" | "info" | "warning";
};
export interface IShowNotification {
  showNotification: (message: string, options: TypeShowNotification) => number;
}

const Alert = React.forwardRef(AlertRef);
type SnackMessageType = {
  id: string | number;
  message: string;
  open: boolean;
  options: TypeShowNotification;
};

const NotificationContext = createContext<IShowNotification>({
  showNotification: () => 0,
});

type SnackType = {
  id: string | number;
  message: string;
  open: boolean;
  type: "error" | "success" | "info" | "warning";
  handleClose: () => void;
};
function RenderSnackbar({ id, message, open, type, handleClose }: SnackType) {
  const theme = useTheme();
  const messageId = `message-${id}`;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": messageId,
      }}
      message={<span id={messageId}>{message}</span>}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
          x
        </IconButton>,
      ]}
    >
      <Alert
        onClose={handleClose}
        /**
         * @param {type} type canc be error | success | info
         */
        severity={type}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.common.white,
          borderSize: "1px",
          borderColor: theme.palette[type].dark,
          borderRadius: "4px",
          color: theme.palette[type].dark,
          "& .MuiAlert-icon": {
            color: theme.palette[type].darker,
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

const uniqueId = 2;

function NotificationProvider({ children }: INotification) {
  const [{ current, queue }, setState] = useState<{
    current: null | SnackMessageType;
    queue: SnackMessageType[] | [];
  }>({ current: null, queue: [] });

  const showNotification = (message: string, options: TypeShowNotification) => {
    const id = uniqueId + 1;
    const snack: SnackMessageType = { id, message, open: true, options };

    if (current) {
      setState({ current, queue: [...queue, snack] });
    } else {
      setState({ queue, current: snack });
    }

    return id;
  };

  function openNext() {
    if (queue.length) {
      setState({ current: queue[0], queue: queue.slice(1) });
    } else {
      setState({ current: null, queue: [] });
    }
  }

  const handleClose = () => {
    setState((currentState) => ({
      ...currentState,
      current: currentState.current ? { ...currentState.current, open: false } : null,
    }));
    // time to snack close animation
    setTimeout(openNext, 1000);
  };
  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {current && (
        <RenderSnackbar
          key={current.id}
          {...current}
          type={current?.options?.type}
          handleClose={handleClose}
        />
      )}
      {children}
    </NotificationContext.Provider>
  );
}

export const useAlert = () => {
  const { showNotification } = useContext(NotificationContext);
  return {
    showNotification,
  };
};

export default NotificationProvider;
