function waitFor(time: number): Promise<void> {
  return new Promise((resolve) => {
    resolve(
      console.log(
        setTimeout(() => {
          `This will be printed in ${time} seconds`;
        }, time),
      ),
    );
  });
}

export { waitFor };
