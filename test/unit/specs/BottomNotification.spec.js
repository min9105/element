import { createTest, destroyVM } from '../util';
import Bottomnotification from 'packages/BottomNotification';

describe('Bottomnotification', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Bottomnotification, true);
    expect(vm.$el).to.exist;
  });
});

