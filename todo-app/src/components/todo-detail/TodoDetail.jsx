import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { Fragment } from "react";

const TodoDetail = ({ getDetail, getDetailPop, setGetDetailPop }) => {
  return (
    <Fragment>
      <Dialog open={getDetailPop} onClose={() => setGetDetailPop(false)}>
        <DialogTitle>{getDetail?.todo}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setGetDetailPop(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default TodoDetail;
