import Robot from './robot-name';

describe('Robot', () => {
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('has a name', () => {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  it('name is the same each time', () => {
    expect(robot.name).toEqual(robot.name);
  });

  it('different robots have different names', () => {
    const NUMBER_OF_ROBOTS = 10000;
    const usedNames = new Set();

    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      const newRobot = new Robot();
      usedNames.add(newRobot.name);
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS);
  });

  it('is able to reset the name', () => {
    const originalName = robot.name;

    robot.reset();
    const newName = robot.name;

    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });

  it('should set a unique name after reset', () => {
    const NUMBER_OF_ROBOTS = 10000;
    const usedNames = new Set();

    usedNames.add(robot.name);
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.reset();
      usedNames.add(robot.name);
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS + 1);
  });

  it('internal name cannot be modified', () => {
    const modifyInternal = () => robot.name += 'a modification';
    expect(modifyInternal).toThrow();
  });

});

let myRobot = Robot();
console.log(myRobot.name);
console.log(myRobot.reset());
console.log(myRobot.name);
