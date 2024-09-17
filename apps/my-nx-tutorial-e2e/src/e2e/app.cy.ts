import { getTodos, getAddTodoButtons } from '../support/app.po';

describe('my-nx-tutorial-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodoButtons().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
