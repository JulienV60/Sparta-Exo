import * as path from "path";

import { filterFor } from "../src/index";
import { readCode } from "camp2-helpers";
import { createProject, ts } from "@ts-morph/bootstrap";

let studentCode: string;

describe("filterFor", () => {
  beforeAll(async () => {
    studentCode = await readCode(path.resolve(__dirname, "../src/index.ts"));
  });

  test("It should work with an array of numbers and a simple function", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { filterFor } from "./index";

    filterFor([1, 2, 3], (number) => number === 2);`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of numbers and a simple function\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });

  test("It should work with an array of numbers and a function that manipulate numbers", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { filterFor } from "./index";

    filterFor([1, 2, 3], (number) => number + 1 === 2);`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of numbers and a function that manipulate numbers\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });

  test("It should work with an array of strings and a function that manipulate strings", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { filterFor } from "./index";

    filterFor(["Mickey", "Donald"], (name) => name.toUpperCase() === "DONALD");`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of strings and a function that manipulate strings\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });
});
