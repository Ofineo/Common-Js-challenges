function Process(state) {
  this.state = state;
}

const Singelton = (function () {
  function ProcessManger() {
    this.numProcess = 0;
  }
  let pManager;

  function createProcessManager() {
    pManager = new ProcessManger();
    return pManager;
  }
  return {
    getProccessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const processManager = Singelton.getProccessManager();
const processManager2 = Singelton.getProccessManager();

console.log(processManager === processManager2);
