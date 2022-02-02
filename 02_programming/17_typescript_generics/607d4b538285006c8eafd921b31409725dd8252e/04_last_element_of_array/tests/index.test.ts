import * as path from "path";

import { lastElementOfArray } from "../src/index";
import { readCode } from "camp2-helpers";
import { createProject, ts } from "@ts-morph/bootstrap";

let studentCode: string;

describe("filterFor", () => {
  beforeAll(async () => {
    studentCode = await readCode(path.resolve(__dirname, "../src/index.ts"));
  });

  test("It should work with an array of numbers", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { lastElementOfArray } from "./index";

      lastElementOfArray([1, 2, 3]);`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of numbers\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });

  test("It should work with an array of strings", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { lastElementOfArray } from "./index";

      lastElementOfArray(["Batman", "Superman", "Wonder-Woman"]);`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of strings\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });

  test("It should work with an array of booleans", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { lastElementOfArray } from "./index";

      lastElementOfArray([true, true, true, false]);`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of booleans\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });

  test("It should work with an array of strings and we should be able to use it afterwards", async () => {
    expect.assertions(1);

    const project = await createProject({ useInMemoryFileSystem: true });
    project.createSourceFile("index.ts", studentCode);
    project.createSourceFile(
      "test.ts",
      `import { lastElementOfArray } from "./index";

      const lastSuperhero = lastElementOfArray(["Batman", "Superman", "Wonder-Woman"]);
      lastSuperhero.toUpperCase()`,
    );

    const program = project.createProgram();
    const errors = ts.getPreEmitDiagnostics(project.createProgram());

    if (errors.length) {
      console.log(
        "\x1b[31m✕\x1b[0m \x1b[2mIt should work with an array of strings\x1b[0m\n\n",
        project.formatDiagnosticsWithColorAndContext(errors),
      );
    }

    expect(errors.length).toBe(0);
  });
});
