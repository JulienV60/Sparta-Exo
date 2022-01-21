const { developer } = require("../src/developer");
const { expectMessage } = require ("camp2-helpers");

describe("Developer", () => {
  test("The developer should not be coding before starting a project", () => {
    const testDeveloper = developer;
    const isCoding = testDeveloper.isCoding;

    expect(isCoding).toBe(false);
  });

  test("The developer should'nt have any coding stats before starting a project", () => {
    const testDeveloper = developer;

    const daysCoding = testDeveloper.daysCoding;
    const codeLinesProduced = testDeveloper.codeLinesProduced;
    const linesNeeded = testDeveloper.linesNeeded;
    const maxDelay = testDeveloper.maxDelay;



    expect(codeLinesProduced).toBe(0);
    expect(daysCoding).toBe(0);
    expect(linesNeeded).toBe(0);
    expect(maxDelay).toBe(0);
  });

  test("The developer should wait for a project before starting one", () => {
    const testDeveloper = developer;

    const projectStatus = testDeveloper.projectStatus;
    expect(projectStatus.match(/waiting for a project/i)).toBeTruthy();
  })

  describe("#initiateProject", () => {
    test("initiateProject should be a function", () => {
      expect(typeof developer.initiateProject).toBe("function");
    });

    test("It should make the dev start coding", () => {
      const testDeveloper = {
        ...developer
      };
      testDeveloper.initiateProject();
      expect(testDeveloper.isCoding).toBe(true);
    });

    test("It should reset the previous days and lines of code", () => {
      const testDeveloper = {
        ...developer,
        daysCoding: 120,
        codeLinesProduced: 500,
      };

      testDeveloper.initiateProject();

      expect(testDeveloper.daysCoding).toBe(0);
      expect(testDeveloper.codeLinesProduced).toBe(0);
    });
  });

  describe("#startProject", () => {
    test("startProject should be a function", () => {
      const testDeveloper = {
        ...developer,
      }
      expect(typeof testDeveloper.startProject).toBe("function");
    });

    test("It should take linesNeeded and maxDelay as parameters and change their values", () => {
      const testDeveloper = {
        ...developer,
      };

      testDeveloper.startProject(90, 400);
      
      expectMessage(testDeveloper.linesNeeded, "it should change the linesNeeded by the value you give to the function for this parameter", "warning").toBe(90);
      expectMessage(testDeveloper.maxDelay, "it should change the maxDelay by the value you give to the function for this parameter", "warning").toBe(400);
    });

    test("It should return the developer", () => {
      const testDeveloper = {
        ...developer,
      };

      expect(testDeveloper.startProject(130, 100)).not.toBe(undefined)
    });
  })
  describe("#codeForOneDay", () => {
    test("The developer should write 2 lines of code per day when he generates no bug", () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.10);

      const codeLinesProduced = 70;
      const testDeveloper = {
        ...developer,
        codeLinesProduced,
      }

      testDeveloper.codeForOneDay();


      expect(testDeveloper.codeLinesProduced).toBe(codeLinesProduced + 2);


      jest.spyOn(Math, 'random').mockRestore();
    });

    test("The developer should spend 3 days without coding when he generates a bug", () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.09);

      const codeLinesProduced = 147;
      const daysCoding = 100;
      const isCoding = true;
      const testDeveloper = {
        ...developer,
        isCoding,
        codeLinesProduced,
        daysCoding,
      }

      testDeveloper.codeForOneDay();


      expect(testDeveloper.daysCoding).toBe(daysCoding + 3);

      jest.spyOn(Math, 'random').mockRestore();
    });
  })

  describe("#mightStop", () => {
    test("The developer should stop coding & the project status should be 'project stopped' if he goes beyond the delay", () => {
      const testDeveloper = {
        ...developer,
        isCoding: true,
        daysCoding: 150,
        maxDelay: 150,
      };

      testDeveloper.mightStop();

      expect(testDeveloper.isCoding).toBe(false);
      expect(testDeveloper.projectStatus).toBe("project stopped");
    })

    test("The developer should stop coding & the project status should be 'project finished' if he has done the code needed during the delay", () => {
      const testDeveloper = {
        ...developer,
        isCoding: true,
        daysCoding: 100,
        maxDelay: 150,
        codeLinesProduced: 100,
        linesNeeded: 100,
      };

      testDeveloper.mightStop();

      expect(testDeveloper.isCoding).toBe(false);
      expect(testDeveloper.projectStatus).toBe("project finished");
    })
  })
});
