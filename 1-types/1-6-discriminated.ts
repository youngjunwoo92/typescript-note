{
  // BAD
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginStateWithUnion(state: LoginState) {
    if ('response' in state) {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π₯² ${state.reason}`);
    }
  }
}

{
  // GOOD WITH DISCRIMINATED UNIONπ
  type SuccessState = {
    result: 'success'; // both state have key of 'result'
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail'; // both state have key of 'result'
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginStateWithDiscriminatedUnion(state: LoginState) {
    if (state.result === 'success') {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π₯² ${state.reason}`);
    }
  }
}
