import { mount } from '@vue/test-utils'
import Board from './Board.vue'
import draggable from 'vuedraggable'

describe('Board.vue', () => {
  let wrapper

  beforeEach(() => {
    window.alert = jest.fn();
    wrapper = mount(Board, {
      global: {
        components: {
          draggable
        }
      }
    })
  });

  
  it('Should contain 5 columns by default', () => {
    
    // given
    const columns = wrapper.findAll('.column');
    expect(columns.length).toBe(5);
  });


  it('Should add column if "Add table" is clicked', async () => {

    // given
    const currentColumns = wrapper.findAll('.column');
    expect(currentColumns.length).toBe(5);

    // when
    await wrapper.find('.buttonAddTable').trigger('click');

    // then
    const columns = wrapper.findAll('.column');
    expect(columns.length).toBe(6);
  });


  it('Should add task if "Add a task" is clicked', async () => {
    
    // given
    const input = wrapper.find('.dynamicTextarea');
    await input.setValue('Programming header');

    // when
    await wrapper.find('.addTaskButton').trigger('click');

    // then 
    const tasks = wrapper.findAll('.task');
    expect(tasks.length).toBe(1);
    expect(tasks[0].text()).toContain('Programming header');
  });


  // it('Should alert "Fill in a task..." task when input is empty', async () => {

  //   // given
  //   const input = wrapper.find('.dynamicTextarea');
  //   await input.setValue('');

  //   // when
  //   await wrapper.find('.addTaskButton').trigger('click');

  //   // then 
  //   expect(window.alert).toHaveBeenCalledWith('Fill in a task...');

  //   const tasks = wrapper.findAll('.task');
  //   expect(tasks.length).toBe(0);
  // });


  it('Should delete column if "x" is clicked', async () => {

    // given
    const currentColumns = wrapper.findAll('.column');
    expect(currentColumns.length).toBe(6);

    // when
    await wrapper.find('.icon').trigger('click');

    // then
    const columns = wrapper.findAll('.column');
    expect(columns.length).toBe(5);
  });


  it('Should delete task if "x" is clicked', async () => {

    // given
    const input = wrapper.find('.dynamicTextarea');
    await input.setValue('Programming header');
    await wrapper.find('.addTaskButton').trigger('click');

    const currentTasks = wrapper.findAll('.task');
    expect(currentTasks.length).toBe(1);

    // when
    await wrapper.find('.icon').trigger('click');

    // then
    const tasks = wrapper.findAll('.task');
    expect(tasks.length).toBe(0);
  });
});
